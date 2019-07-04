export function formatNombre(nombre){
    if(typeof nombre === 'number' && !Number.isInteger(nombre)){
        return nombre.toFixed(2)
    }
    return nombre
}

const OTHER_PRESTATION = 'other'

function recalculePrestation(prestation){
    if(prestation.locationsDetails.quantityIsByLocation){
        prestation.prixHT = prestation.quantite * prestation.prixUnitaireHT
        prestation.montantTVA = ((prestation.prixHT * prestation.tauxTVA) / 100)
        prestation.prixTTC = (prestation.prixHT + prestation.montantTVA)
    }
}

function getSectionParPiece(sectionParMetier, locations){
    let prestationsParPiece = sectionParMetier.lots.reduce(
        (acc, metier) => metier.lignes.forEach(prestation => {
            let prestationCopy = {...prestation}
            if(prestationCopy.locationsDetails.quantityIsByLocation)
                prestationCopy.quantite += prestationCopy.locationsDetails.additionalQuantity
            if(!prestationCopy.locationsDetails.locations.length){
                if(!(OTHER_PRESTATION in acc)) acc[OTHER_PRESTATION] = []
                acc[OTHER_PRESTATION].push(prestationCopy)
                if(prestationCopy.locationsDetails.quantityIsByLocation) 
                    recalculePrestation(prestationCopy)
            }else{
                prestationCopy.locationsDetails.locations.forEach(ligne => {
                    if(!(ligne.uuid in acc)) acc[ligne.uuid] = []
                    let prestationCopyNewQuantite = prestationCopy
                    if(prestationCopyNewQuantite.locationsDetails.quantityIsByLocation){
                        prestationCopyNewQuantite = {...prestationCopy}
                        prestationCopyNewQuantite.quantite = ligne.quantite + prestationCopyNewQuantite.locationsDetails.additionalQuantity
                        recalculePrestation(prestationCopyNewQuantite)
                    }
                    acc[ligne.uuid].push(prestationCopyNewQuantite)
                })
            }
        }) || acc, {})
    let sectionParPiece = {
        lots: []
    }
    for(let piece in prestationsParPiece){
        let label = piece === OTHER_PRESTATION ? 'Autres prestations' :
            locations.find(location => location.uuid === piece).label
        sectionParPiece.lots.push({
            label,
            lignes: prestationsParPiece[piece],
            prixTotalHT: prestationsParPiece[piece].reduce((acc, prestation) => acc + prestation.prixHT, 0),
            prixTotalTTC: prestationsParPiece[piece].reduce((acc, prestation) => acc + prestation.prixTTC, 0),
        })
    }
    sectionParPiece.prixTotalHT = sectionParPiece.lots.reduce((acc, section) => acc + section.prixTotalHT , 0)
    sectionParPiece.prixTotalTTC = sectionParPiece.lots.reduce((acc, section) => acc + section.prixTotalTTC , 0)
    return sectionParPiece
}

export function getSectionsParPiece(devis){
    return devis.sections.map(section => getSectionParPiece(section, devis.locations))
}

export function loadData(){
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest()

        req.onload = function() {
            if (req.status === 200) {
                resolve(JSON.parse(req.responseText))
            } else {
                reject(req.statusText)
            }
        }

        req.onerror = function() {
            reject(req.statusText)
        }

        req.open('GET', process.env.URI_DEVIS_PRO, true)
        req.send(null)
    })
}
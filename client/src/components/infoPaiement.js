import React from 'react'
import PropTypes from 'prop-types'
import ModalitePaiement from './modalitePaiement'
import Total from './total'
import './infoPaiement.sass'

export default function InfoPaiement({devis}){
    return (
        <aside id = 'infoPaiement'>
            <ModalitePaiement modalitesPaiement = {devis.modalitesPaiement}/>
            <Total 
                prixTotalHT = {devis.prixTotalHT} 
                prixTotalTTC = {devis.prixTotalTTC}
                montantRemise = {devis.montantRemise}
                prixTotalOptionHT = {devis.prixTotalOptionHT}
                prixTotalHTAvantRemise = {devis.prixTotalHTAvantRemise}
            />
        </aside>
    )
}

InfoPaiement.propTypes = {
    devis: PropTypes.object.isRequired
}
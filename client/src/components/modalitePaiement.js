import React from 'react'
import PropTypes from 'prop-types'
import './modalitePaiement.sass'

export default function ModalitePaiement({modalitesPaiement}){
    return (
        <div id = 'modalitePaiement'>
            <h2>Modalité de paiement</h2>
            {
                modalitesPaiement.map(({pourcentage, label, montant}) => (
                    <div key = {label + pourcentage}>
                        <span className = 'label'>{label} :</span> {pourcentage}% de réduction : {montant}€
                    </div>
                ))
            }
        </div>
    )
}

ModalitePaiement.propTypes = {
    modalitesPaiement: PropTypes.array.isRequired,
}
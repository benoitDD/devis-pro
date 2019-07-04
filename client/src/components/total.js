import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './total.sass'

export default function Total({prixTotalHT, prixTotalTTC, prixTotalHTAvantRemise, montantRemise,
    prixTotalOptionHT}){
    return (
        <div id = 'total'>
            {
                montantRemise > 0 && (
                    <Fragment>
                        <div>Total HT avant remise : {prixTotalHTAvantRemise}€</div>
                        <div>Remise : {montantRemise}€</div>
                    </Fragment>
                )
            }
            {
                prixTotalOptionHT > 0 && (
                    <div>Option HT : {prixTotalOptionHT}€</div>
                )
            }
            <div>Total HT : {prixTotalHT}€</div>
            <div>Total TTC : {prixTotalTTC}€</div>
        </div>
    )
}

Total.propTypes = {
    prixTotalHT: PropTypes.number.isRequired,
    prixTotalTTC: PropTypes.number.isRequired,
    montantRemise: PropTypes.number.isRequired,
    prixTotalHTAvantRemise: PropTypes.number.isRequired,
    prixTotalOptionHT: PropTypes.number.isRequired
}
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {formatNombre} from '../utils'

export default function Prestation({designation, description, quantite, unite, prixUnitaireHT,
    prixHT, tauxTVA, montantTVA, prixTTC}){
    return (
        <Fragment>
            <td scope = 'row' title = {description}>{designation}</td>
            <td>{quantite} {unite !== 'unitaire' && unite}</td>
            <td>{prixUnitaireHT}</td>
            <td>{formatNombre(prixHT)}</td>
            <td>{tauxTVA}%</td>
            <td>{formatNombre(montantTVA)}</td>
            <td>{formatNombre(prixTTC)}</td>
        </Fragment>
    )
}

Prestation.propTypes = {
    designation: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantite: PropTypes.number.isRequired,
    unite: PropTypes.string.isRequired,
    prixUnitaireHT: PropTypes.number.isRequired,
    prixHT: PropTypes.number.isRequired,
    tauxTVA: PropTypes.number.isRequired,
    montantTVA: PropTypes.number.isRequired,
    prixTTC: PropTypes.number.isRequired
}
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Prestation from './prestation'
import {formatNombre} from '../utils'

export default function Metier({label, lignes, prixTotalHT, prixTotalTTC}){
    return (
        <Fragment>
            <tr>
                <td colSpan = '7'>{label}</td>
            </tr>
            {
                lignes.map((prestation, index) =>
                    <tr key = {prestation.designation} className = {index % 2 === 0 ? 'pair' : 'impair'}>
                        <Prestation {...prestation} />
                    </tr>
                )
            }
            <tr>
                <td className = 'total'>Total</td><td></td><td></td><td>{formatNombre(prixTotalHT)}</td><td></td><td></td><td>{formatNombre(prixTotalTTC)}</td>
            </tr>
        </Fragment>
    )
}

Metier.propTypes = {
    label: PropTypes.string.isRequired,
    lignes: PropTypes.array.isRequired,
    prixTotalHT: PropTypes.number.isRequired,
    prixTotalTTC: PropTypes.number.isRequired
}
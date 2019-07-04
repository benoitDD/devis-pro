import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Metier from './metier'
import './section.sass'

export default function Section({lots, prixTotalHT, prixTotalTTC}){
    return (
        <Fragment>
            <table className = 'table'>
                <thead>
                    <tr>
                        <th scope = 'col'>Produits et prestations</th>
                        <th scope = 'col'>Quantité</th>
                        <th scope = 'col'>Prix unitaire HT</th>
                        <th scope = 'col'>Prix HT</th>
                        <th scope = 'col'>TVA</th>
                        <th scope = 'col'>Montant TVA</th>
                        <th scope = 'col'>Prix TTC</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lots.map(metier => <Metier key = {metier.label} {...metier} />)
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td className = 'total'>Total</td>
                        <td></td>
                        <td></td>
                        <td>{prixTotalHT}</td>
                        <td></td>
                        <td></td>
                        <td>{prixTotalTTC}</td>
                    </tr>
                </tfoot>
            </table>
        </Fragment>
    )
}

Section.propTypes = {
    lots: PropTypes.array.isRequired,
    prixTotalHT: PropTypes.number.isRequired,
    prixTotalTTC: PropTypes.number.isRequired
}
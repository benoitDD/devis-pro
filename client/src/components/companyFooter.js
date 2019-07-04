import React from 'react'
import PropTypes from 'prop-types'
import './companyFooter.sass'

export default function CompanyFooter({email, statutEntreprise, capital, formattedSiret, siren,
    numeroTVA}){
    return (
        <div id = 'company-footer'>
            <div><a href = {`mailto:${email}`}>{email}</a></div>
            <div>{statutEntreprise}, au capital de {capital}€</div>
            <div>Siret : {formattedSiret}</div>
            <div>Siren : {siren}</div>
            <div>N° TVA : {numeroTVA}</div>
        </div>
    )
}

CompanyFooter.propTypes = {
    email: PropTypes.string.isRequired,
    statutEntreprise: PropTypes.string.isRequired,
    capital: PropTypes.number.isRequired,
    formattedSiret: PropTypes.string.isRequired,
    siren: PropTypes.string.isRequired,
    numeroTVA: PropTypes.string.isRequired
}
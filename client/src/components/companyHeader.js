import React from 'react'
import PropTypes from 'prop-types'
import './companyHeader.sass'

export default function CompanyHeader({name, email, logoUrl, address, postalCode, city, phoneNumber}){
    return (
        <div id = 'company-header'>
            <img src = {logoUrl} alt = {`logo ${name}`} width = '100px' height = '100px' />
            <h1>{name}</h1>
            <div>{address}</div>
            <div>{postalCode} {city}</div>
            <div>{phoneNumber}</div>
            <div>{email}</div>
        </div>
    )
}

CompanyHeader.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
}
import React from 'react'
import PropTypes from 'prop-types'
import './customer.sass'

export default function Customer({customerName, customerEmail, billingAddress: {address, postalCode, city}}){
    return (
        <div id = 'customer-header'>
            <div>{customerName}</div>
            <div>{address}</div>
            <div>{postalCode} {city}</div>
            <div>{customerEmail}</div>
        </div>
    )
}

Customer.propTypes = {
    customerName: PropTypes.string.isRequired,
    customerEmail: PropTypes.string.isRequired,
    billingAddress: PropTypes.shape({
        address: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
}
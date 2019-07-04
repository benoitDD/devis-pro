import React from 'react'
import PropTypes from 'prop-types'
import './devisHeader.sass'

export default function DevisHeader({numero, date, dureeValidite}){
    return (
        <div id = 'devis-header'>
            <div>Devis : N° {numero}</div>
            <time dateTime = {date}>
                    Date : {date}
            </time>
            <div>Devis valable {dureeValidite}</div>
        </div>
    )
}

DevisHeader.propTypes = {
    numero: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dureeValidite: PropTypes.string.isRequired
}
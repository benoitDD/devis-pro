import React from 'react'
import PropTypes from 'prop-types'
import CompanyHeader from './companyHeader'
import Customer from './customer'
import DevisHeader from './devisHeader'
import './header.sass'

export default function Header({devis}){
    return (
        <header id = 'header'>
            <CompanyHeader {...devis.company} />
            <div id = 'header-devis-customer'>
                <DevisHeader numero = {devis.token} date = {devis.date} dureeValidite = {devis.dureeValidite}/>
                <Customer {...devis.deal} />
            </div>
            <p id = 'header-letter'>{devis.introductionLetter}</p>
            <h1 id = 'header-title'>{devis.title}</h1>
        </header>
    )
}

Header.propTypes = {
    devis: PropTypes.object.isRequired
}
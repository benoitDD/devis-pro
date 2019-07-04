import React from 'react'
import PropTypes from 'prop-types'
import CompanyFooter from './companyFooter'

export default function Header({devis}){
    return (
        <footer>
            <hr/>
            <CompanyFooter {...devis.company} />
        </footer>
    )
}

Header.propTypes = {
    devis: PropTypes.object.isRequired
}
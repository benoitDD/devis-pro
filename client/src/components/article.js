import React, {Component} from 'react'
import Section from './section'
import PropTypes from 'prop-types'
import {getSectionsParPiece} from '../utils'
import './article.sass'

export default class Article extends Component{
    constructor(props){
        super(props)
        this.state = {
            vuParMetier: true,
            sections: this.props.devis.sections
        }
        this.sectionsParPiece = null
    }

    getSectionsParPiece(devis){
        if(this.sectionsParPiece) return this.sectionsParPiece
        this.sectionsParPiece = getSectionsParPiece(devis)
        return this.sectionsParPiece
    }

    toogleVu(){
        this.setState((state, props) => {
            let sections = props.devis.sections
            if(state.vuParMetier){
                sections = this.getSectionsParPiece(props.devis)
            }
            
            return {
                vuParMetier: !state.vuParMetier,
                sections
            }
        })
    }

    render(){
        return (
            <article>
                <button id = 'toogleVu' onClick = {() => this.toogleVu()}>
                    {this.state.vuParMetier ? 'Vue par pièces': 'Vue par métiers'}
                </button>
                {
                    this.state.sections.map((section, index) => (
                        <div key = {index}>
                            {
                                this.state.sections.length > 1
                                    && <h2>Sous-devis {index + 1}</h2>
                            }
                            <Section {...section}/>
                        </div>
                    )
                    )
                }
            </article>
        )
    }
}

Article.propTypes = {
    devis: PropTypes.object.isRequired
}
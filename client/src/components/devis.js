import React, {Component} from 'react'
import Article from './article'
import {loadData} from '../utils'
import './devis.sass'
import Header from './header'
import Footer from './footer'
import InfoPaiement from './infoPaiement'

export default class Devis extends Component {

    constructor(props){
        super(props)
        this.state = {
            devis: null,
            error: null,
            pending: true
        }
    }

    requestDidIt(data){
        this.setState({...data, pending: false})
    }

    componentDidMount(){
        loadData().then(devis => this.requestDidIt({devis}))
            .catch(error => this.requestDidIt({error}))
    }

    render(){
        if(this.state.pending) return <span>Pending</span>
        if(this.state.error) return <span>{this.state.error}</span>
        const devis = this.state.devis
        return (
            <section id = 'devis'>
                <Header devis = {devis}/>
                <Article devis = {devis} />
                <InfoPaiement devis = {devis} />
                <Footer devis = {devis}/>
            </section>
        )
    }
}
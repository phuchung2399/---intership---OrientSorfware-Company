import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

class index extends Component {
    render(){
        return(
            <div>               
                <Header></Header>
                <Body hello="hello"></Body>
                <Footer></Footer>
            </div>
        )
    }
}
export default index
import React, { PureComponent } from 'react'

import './index.css'

export default class AboutMe extends PureComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p>About Me!</p>
                <h1>I"M HERE!</h1>
            </div>
        )
    }
}
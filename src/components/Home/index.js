import React, {PureComponent} from 'react'

import './index.css'

export default class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentDidMount(){
        console.log("HOME");
    }

    render(){
        return(
            <div>
                <h1>HOME!</h1>
            </div>
        )
    }
}

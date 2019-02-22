import React, { PureComponent } from 'react'

import Outer from './styled/Outer/index.js'

export default class Main extends PureComponent {
    render() {
        return (
            <Outer>
                {this.props.children}
            </Outer>
        )
    }
}
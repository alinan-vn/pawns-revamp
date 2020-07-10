import React, {Component} from 'react';

export default class Nav extends Component { 
    constructor(){
        super()
        this.state = {
            navClass: 'nav-base'
        }
    }

    changeNavClass = () => {
        let path = window.location.pathname
        path = path.split('/')
        if (path[1] === ''){
            this.setState({
                ...this.state,
                navClass: 'nav-base'
            })
        } else {
            path = 'nav-' + path[1]
            this.setState({
                ...this.state,
                navClass: path
            })
        }
    }

    componentDidMount(){
        this.changeNavClass()
    }

    render() {
        return (
        <header>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <a className={this.state.navClass} href="/">
                        Pawns
                    </a>
                </li>
                {/* <li className='nav-li'>
                    <a className={this.state.navClass} href="/about">
                        About
                    </a>
                </li> */}
            </ul>
        </header>
        )
    }
}
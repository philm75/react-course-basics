import React, { Component } from 'react';



class Header extends Component {

    state = {
        keywords: ''
        //active: false
    }

    // inputChange(event) {
    //     const value = event.target.value === '' ? false : true;
    //     this.setState({
    //         keywords : event.target.value,
    //         active: value
    //     });
    // }

    render() {
        return (
            <header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
                <div 
                    className="logo"
                >
                    Logo
                </div>
                <input 
                    onChange={this.props.keywords}
                />              
            </header>
        )
    }
}

export default Header;
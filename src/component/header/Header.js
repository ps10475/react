import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = 
            {
                login: false
            }
        
    }
 
    
    runlogin = () => {
        // console.log(this.state);
        this.setState({
            login : !this.state.login
        })
        
    }

    insertContent() {
        let text_header = "xin chào admin";
        return (
            <div>
                <button onClick={this.runlogin}> {this.state.login?'logout':'login'}  </button>
                <div>{this.state.login?text_header:'nhấn login để đăng nhập'}</div>
            </div>
        )

    }
    
    render(){
        // let text_header = 'Header Brown';
        
        return(
            <div id="header">
                {this.insertContent()}
            </div>
        );
    }
    
};

//  export default Header;
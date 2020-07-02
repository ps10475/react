import React, {Component} from 'react';
import './Slider.css';

class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : 'default'
        }
    }

    changeColor(a){
        this.setState({
            data : a
        })
    }

    render(){
        let result = this.state.data;
        return(
            <div id="slider">
                <button onClick={()=>this.changeColor('Gray')}  className="btn btn-secondary" type="button">Gray</button>
                <button onClick={()=>this.changeColor('Blue')} className="btn btn-primary" type="button">Blue</button>
                <button onClick={()=>this.changeColor('Green')} className="btn btn-success" type="button">Green</button>
                <div className="alert alert-info" role="alert">
                    {result}
                </div>
            </div>
        )
    }
}
export default Slider;
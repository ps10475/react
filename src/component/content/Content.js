import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
     
        state = {
            products :  [
                            {
                                id : 1,
                                name: 'nha lau',
                                status: true,
                            },
                            {
                                id : 2,
                                name: 'xe hoi',
                                status: false,
                            },
                            {
                                id : 3,
                                name: 'du thuyen',
                                status: true,
                            }
                        ]
        }
    
    
    
    render(){
        let products = this.state.products.map((pro,key)=>{
            let result;
            if(pro.status){
                result =    <tr key = {key}>
                                <td>{pro.id}</td>
                                <td>{pro.name}</td>
                                <td>{pro.status.toString()}</td>
                            </tr>
            }
            return result;
        })

        return(
            <div id="content">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Content;
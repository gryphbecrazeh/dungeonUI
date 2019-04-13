import React, { Component } from 'react';

class Fetch extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }    
    }
    componentDidMount(){
        fetch('https://api-beta.open5e.com/?format=json')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            });
    }
    render() {
        var { isLoaded,items}=this.state;
        console.log(this.state.items)
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    Loaded!
                </div>
            );    
        }
    }
}
 
export default Fetch;
import React from 'react';
import './css/portfolio.css'



class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            iteam: this.props.location.state
        }
       
        console.log(this.state.iteam)
    }
    render(){
       
        return(
            <div className="globalPortfolioContainer">
                <h1>{this.state.iteam.title}</h1>
                <p>{this.state.iteam.description}</p>
        <div className="PortfolioContainer">
          {this.state.iteam.img.map(i=><div className="imgContainer" key={i.i} >  <img src={i} key={i.i}  alt="" tabIndex="0"/>   </div>)}
        </div>
        </div>
        )
    }
}


export default Portfolio;


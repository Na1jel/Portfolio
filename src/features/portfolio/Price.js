import React from 'react';
import "./css/Price.css"

class Price extends React.Component{
    render(){
        return(
            <div className="container" id='price'>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2 className="CardH2">Card One</h2>
                        <p className="contetnTextP">Development of the layout in Adobe Photoshop from $ 5 per hour depending on the difficulty level</p>
                        <a href="https://vk.com/kolbik99" >Buy for 5$ </a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2 className="CardH2">Card Two</h2>
                        <p>Site layout (Html, Css, bootstrap, Scss) from $ 7 per hour depending on the difficulty level </p>
                        <a href="https://vk.com/kolbik99" >Buy for 7$ </a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2 className="CardH2">Card Three</h2>
                        <p>layout based on ready-made layouts from $ 5 per hour depending on the difficulty level</p>
                        <a href="https://vk.com/kolbik99" >Buy for 5$</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Price
import React from 'react';
import './css/header.css'
import logo from './img/logo.png'



class Header extends React.Component{
  
    render(){
        return(
            <header onClick={this.textAppearance}> 
                  <a href="/"><img alt="" src={logo} className="logo"/></a>
                <div className='containerHeader' >
                    <nav className='headerMenu'>
                        <a href='#about' className='headerMenuLi headerMenuLi1'>About me</a>
                        <a href='#portfolio' className='headerMenuLi headerMenuLi2'>Portfolio</a>
                        <a href='#price'  className='headerMenuLi headerMenuLi3'>Price</a>
                        <a href='#contacts'  className='headerMenuLi headerMenuLi4'>Contacts</a>
                    </nav>
                    <div className="infoHeader">
                        <div className="boxInfoHeader">
                           <div className="imgHeaderKolbik"></div>
                           <div className="overlay"></div>
                           <div className="overlay2"></div>
                           <div className="Headertext">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <h2 >Hi, i Kolbik Stas</h2>
                               <p className="infoHeaderP">Front-end beginner developer, waiting for your orders</p>
                           </div>
                            </div>
                    </div>
                   
                </div>
            </header>
        )
    }
}

export default Header;
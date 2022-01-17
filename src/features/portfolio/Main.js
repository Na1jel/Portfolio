import React from 'react';
import { Link } from 'react-router-dom';
import './css/main.css';
import "./css/containerWork.css";
import Price from "./Price";



import first from './img/first-work.png';

import shopOne from './img/shop-phone/glavnayaSTR.png';
import shopTwo from "./img/shop-phone/admon-page1.png";
import shopThree from './img/shop-phone/admin-page3.png';
import shopFour from './img/shop-phone/admib-page2.png';

import miniCrm from './img/mini-crm-foto/mini-crm1.png'
import miniCrmTwo from './img/mini-crm-foto/mini-crm2.png'

import stroiShop from "./img/stroi-shop-landing.png"

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            iteam:[{
                id:1,
                name: 'first work',
                title: "my first project",
                description: "This is my very first site, a regular landing page without frameworks, pure bootstrap was used, no js",
                headerTitle: "One of the first works, not a complicated landing page with the use bootstrap",
                img: [first]
            },
            {
                id:2,
                name: 'sekond work',
                title: "Shop phone",
                description: "This is an online phone store. Used HBS, NODE.JS which was used for the server, router, was written without the help of REACT.JS, VUE.JS",
                headerTitle: "Internet phone shop",
                img: [shopOne, shopTwo, shopThree, shopFour]
            },
            {
                id:3,
                name: 'third work',
                title: "Mini Crm",
                description: "Mini tsrm, for some enterprise to control the hours of `working time`, everyone sets a clock for themselves, the amount of wages is calculated by the hour.What is there:there is a removal, everything was written on REACT.JS, EXPRESS, NODE.JS, REACT-ROUTER.",
                headerTitle: "Mini-Crm",
                img: [miniCrm, miniCrmTwo]
            },
            {
                id:4,
                name: 'fourth work',
                title: "landing page",
                description: "Also one of the first jobs, an ordinary vertska landing page. In pure Css, Html everything.",
                headerTitle: "Landing page",
                img: [stroiShop]
            },
           ]
        }
    }

    render(){
        return(
            <main>
             
            <h1 id='about'>About me</h1>
            <div className="mainContainer" name="main">
                <p className="infoPortfolio">I was born and live in Belarus, at the m
                    oment in the city of Brest. His is my personal site. On it you can get acquainted with various works, detailed information about me and much more. I am st
                    udying to be a front-end developer, but I already have several vacancies in my portfolio, I am doing website design, coding, layout analysis and helping to create it.
                </p>
                
            </div>
            <h3 className="mySkill"> <em>My skill</em></h3>
            <div className="skill">
                <div className="Front-End">
                    <h2 className="titulo skillName FrontEnd ">Front-End</h2>
                    <ul className="skillUl">
                        <li><span className="blueline html5"></span><em>HTML</em></li>
                        <li><span className="blueline css3"></span><em>CSS</em></li>
                        <li><span className="blueline js"></span><em>Javascript</em></li>
                    </ul>
                </div>
                <div className="Frameworks">
                    <h2 className="titulo skillName FrameworksSkill">Frameworks</h2>
                    <ul className="skillUl">
                        <li><span className="greenline React"></span><em>React</em></li>
                    </ul>
                </div>                
                <div className="Applications">
                    <h2 className="titulo skillName ApplicationsSkill">Applications</h2>
                    <ul className="skillUl">
                        <li><span className="redline photoshop"></span><em>Adobe Photoshop</em></li>
                        <li><span className="redline figma"></span><em>Figma</em></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="portOneH1">Portfolio</h1>
            <div className="container-work" id='portfolio'>
                {this.state.iteam.map(i=> 
                <div className="containerFotoOne" key={i.id}>
                    <div className="firstWorkText">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h2>{i.name}</h2>
                        <p>{i.headerTitle}</p>
                        <Link to={{pathname:`/portfolio/${i.id}`,
                                    state:i}} className="LinkProjectPortfolio"> See more</Link>
                       
                    </div>
                </div>
                   )}
                    </div> 
            </div>
            <div > 
                <Price/>
            </div>
            </main>
        )
    }
}

export default Main;
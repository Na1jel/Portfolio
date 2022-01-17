import React from 'react';
import './css/footer.css'

import logoVk from './img/logo/vkontakte_PNG1.png'
import logoFacebook from './img/logo/facebook_logos_PNG19762.png'
import logoInst from './img/logo/instagram.png'
import logoGithub from './img/logo/github_PNG1.png'

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <h1 className="h1Footer" id="contacts">Contacts</h1>
            <ul className='ulFooter'>
                <li className="liFooter"><a href="https://vk.com/kolbik99" target="blank" className="linkFooter">vk <img rel="noreferrer" alt="logo" src={logoVk}></img></a></li>
                <li className="liFooter"><a href="https://www.facebook.com/profile.php?id=100008862427510" target="blank" className="linkFooter">Facebook <img alt="logo" rel="noreferrer" src={logoFacebook}></img></a></li>
                <li className="liFooter"><a href="https://www.instagram.com/s_kolbik/" target="blank" className="linkFooter">Inst <img rel="noreferrer" alt="logo" src={logoInst}></img></a></li>
                <li className="liFooter"><a href="https://github.com/Na1jel" target="blank" className="linkFooter">GitHub <img rel="noreferrer" alt="logo" src={logoGithub}></img></a></li>
            </ul>
            </footer>
        )
    }
}

export default Footer;
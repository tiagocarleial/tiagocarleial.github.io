import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='App-footer'>
            <a
                className="Footer-link"
                href="https://api.whatsapp.com/send?phone=5585997248830"
                target="_blank"
                rel="noopener noreferrer"
            >
                +5585997248830
            </a>
            <a
                className="Footer-link"
                href="mailto:email@provedor.com.br"Enviar e-mail
                target="_blank"
                rel="noopener noreferrer"
            >
                tiagocarleial@gmail.com
            </a>
        </div>
    );
}

export default Footer;

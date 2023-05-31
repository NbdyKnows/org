import './Footer.css'

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
        <a href='https://www.linkedin.com/in/claudio-jara-almonacid/' target='_blank' rel="noreferrer"> 
            <img src="/img/linkedin.png" alt="Linkedin"/>
        </a>
        <a href='https://www.instagram.com/arttt567/' target='_blank' rel="noreferrer"> 
            <img src="/img/instagram.png" alt="Instagram" />
        </a>
        <a href='https://github.com/NbdyKnows/' target='_blank' rel="noreferrer"> 
            <img src="/img/github.png" alt="Github" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Claudio</strong>
    </footer>
}

export default Footer
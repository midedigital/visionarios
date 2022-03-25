import mide from '../assets/svg/mide-footer.svg'
import social from '../assets/svg/social@4x.png'
import colors from '../assets/svg/colores-barra.svg'
import './Footer.css'

const Footer = () => {
    return(
        <div className="d-flex justify-content-between footer">
            <img src={colors} alt="colores" className='colores-footer' />
            <img src={mide} alt="mide" className='mide-footer' />
            <img src={social} alt="social" className='social-footer' />
        </div>
    )
}

export default Footer
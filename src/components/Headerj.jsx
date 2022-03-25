import logo from '../assets/svg/logo.svg'
import mide from '../assets/svg/mide.svg'
import imagen from '../assets/slider_main/heiska_1.png'
import colores from '../assets/svg/colores-barra.png'
import './Header.css'

const Header = () => {
    return(
        <>
            <div className='d-flex justify-content-center header'>
                <img src={logo} alt="logo" className='logo mt-5' />
                <img src={mide} alt="mide" className='mide' />
            </div>
            <div>
                <img src={imagen} alt="imagen" className='imagen'/>
                <div className="gradiente" />
            </div>
            <div className="texto">
                <h1 className='fauna'>VISIONARIOS</h1>
                <h3 className='fauna mb-3'>EL PROYECTO</h3>
                <span className='geneva description'>
                    A través de la visión y de la obra de reconocidos artistas contemporáneos, abordamos algunos de los desafíos relacionados con los 17 Objetivos de Desarrollo Sostenible. <br />Conócelos, actúa y transforma nuestro mundo.
                </span>
            </div>
            <img src={colores} alt="colores" className='colores' />
        </>
    )
}

export default Header
import './SubHeader.css'
import hero from '../assets/tina_1@4x.png'
import imgs from '../assets/imagenes@4x.png'
import igualdad from '../assets/igualdad-imagen_1@4x.png'
import rueda from '../assets/svg/rueda@4x.png'

const SubHeader = () => {
    return(
        <div className='pt-3 sub-header'>
            <div className='d-flex justify-content-between'>
                <div className="cuadro" />
                <div className='d-flex flex-column hero-container'>
                    <img src={hero} alt="hero" className='hero' />
                    <h5 className='fauna subheader-name'>TIINA HEISKA</h5>
                    <span className='fauna subheader-sub'>Igualdad de género</span>
                    <span className='pink-block subheader-pais'>País invitado: Finlandia</span>
                </div>
                <div>
                    <img src={imgs} alt="imagenes" className='imagenes'/>
                </div>
            </div>
            <button className='conoce-btn'>{'Conoce las obras'.toUpperCase()}</button>
            <div className="d-flex justify-content-between igualdad-container">
                <div className='d-flex'>
                    <img src={igualdad} alt="igualdad" className='igualdad' />
                </div>
                <div className='d-flex flex-column igualdad-texto'>
                    <h2 className='fauna'>Los 17 Objetivos de Desarrollo Sostenible (ODS)</h2>
                    <span>
                    La Asamblea General de las Naciones Unidas adoptó en 2015 la "Agenda 2030 para el Desarrollo Sostenible", un plan de acción compuesto por 17 objetivos y 169 metas, a favor de las personas, el planeta y la prosperidad, que también tiene la intención de fortalecer la paz universal y el acceso a la justicia. 
                    </span>
                </div>
            </div>
            <div className='rueda-container'>
                <img src={rueda} alt="rueda" className='rueda' />
            </div>
        </div>
    )
} 

export default SubHeader
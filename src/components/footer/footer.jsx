import logo from './logo.png'
import './footer.css'

export default function Footer() {

    return(
        <footer className="footer">
            <p>Все права защищены</p>
            <img src={logo}/>
            <p className="copi">©</p>
            <p>2025  Alinka Trip</p>
        </footer>
    )
}
import logo from './Logo.svg'
import './hero.css'
import heroImg from './brgHero.png'



export default function Hero() {
   
  return (
    <div  className="Hero-Bgr">
      <img src={heroImg} className="Hero-Bgr-Img" ></img>
      <div className='Hero-Logo-Box'> 
        <img src={logo}   className='Hero-Logo'></img>
        <p className='Hero-Text'>Твоя виза — моя забота. Сделаю понятно и без суеты</p>
      </div>
    </div>
  )
}


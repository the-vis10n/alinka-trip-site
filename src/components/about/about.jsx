import AboutSlider from "./aboutSlider";
import './about.css'
import imgRight from './about15.png'
import imgLeft from './about28.png'



export default function About() {
  
  return (
    <div className="About">
        <h1 className="About-title">Обо мне</h1>
        <div className="About-box">
            <p className="About-Text">Привет! Я — Алина, путешественница и визовый консультант. За плечами — более 30 стран, от Латвии и Австрии до Мексики и Эквадора. Я бывала в Турции, Дубае, Литве, Испании, Польше, Беларуси, Чехии и других уголках мира.<br></br><br></br>
            Последние три года живу в США, в Нью-Йорке, и помогаю людям из СНГ получить шенгенскую. Моя цель — избавить тебя от стресса, путаницы и «непонятных анкетаформ» и сделать оформление визы понятным и быстрым.</p>
            <AboutSlider />
        </div>
          <img className="imgLeft" src={imgLeft}></img>
          <img  className="imgRight" src={imgRight}></img>
    </div>
  )
}
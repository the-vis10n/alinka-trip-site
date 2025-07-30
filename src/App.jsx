import React from "react";
import { Link, Element } from 'react-scroll';
import { useInView } from "react-intersection-observer";
import Hero from "./components/hero/hero"
import "./App.css"
import About from "./components/about/about"
import Service from "./components/service/service"
import Price from "./components/price/price"
import SliderRewiews from "./components/reviews/slider"
import Contacts from "./components/contacts/contacts"
import Footer from "./components/footer/footer"
import Home from "./components/nav/Home.svg"
import I from "./components/nav/I.svg"
import Helping from "./components/nav/Helping.svg"
import PriceImg from "./components/nav/Price.svg"
import Feedback from "./components/nav/Feedback.svg"
import ContactsImg from "./components/nav/Contacts.svg"
import "./components/nav/nav.css"

function App() {

  const { ref:HeroRef, inView:HeroNav} = useInView({threshold: 0.5});
  const { ref:AboutRef, inView:AboutNav} = useInView({threshold: 0.5});
  const { ref:ServiceRef, inView:ServiceNav} = useInView({threshold: 0.5});
  const { ref:PriceRef, inView:PriceNav} = useInView({threshold: 0.5});
  const { ref:RewiewsRef, inView:RewiewNav} = useInView({threshold: 0.5});
  const { ref:ContactsRef, inView:ContactNav} = useInView({threshold: 0.5});



  return (
    <>
    <div name="Hero" ref={HeroRef}><Hero /></div>
    <div name="About" ref={AboutRef}><About /></div> 
    <div name="Service" ref={ServiceRef}><Service  /></div>
    <div name="Price" ref={PriceRef} ><Price /></div>
    <div name="Rewiews" ref={RewiewsRef}><SliderRewiews  /></div>
    <div name="Contacts" ref={ContactsRef}> <Contacts  /></div>
     <Footer  />
     <div className="Nav-box">
          <Link to="Hero" smooth={true} duration={500} className={HeroNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Главная</span><img  src={Home}  className='Nav-Logo'></img></Link>
          <Link to="About" smooth={true} duration={500} className={AboutNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Обо мне</span><img src={I}  className='Nav-Logo'></img></Link>
          <Link to="Service" smooth={true} duration={500} className={ServiceNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Что я могу</span><img src={Helping}  className='Nav-Logo'></img></Link>
          <Link to="Price" smooth={true} duration={500} className={PriceNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Цены и пакеты</span><img src={PriceImg}  className='Nav-Logo'></img></Link>
          <Link to="Rewiews" smooth={true} duration={500} className={RewiewNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Отзывы</span><img src={Feedback}  className='Nav-Logo'></img></Link>
          <Link to="Contacts" smooth={true} duration={500} className={ContactNav ? 'icon-box active' : 'icon-box'}><span className="prompt">Контакты</span><img src={ContactsImg}  className='Nav-Logo'></img></Link>   
     </div>
    </>
  )
}

export default App

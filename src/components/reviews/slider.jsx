import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews1 from './reviews1.png'
import reviews2 from './reviews2.png'
import reviews3 from './reviews3.png'
import reviews4 from './reviews4.png'
import reviews5 from './reviews5.png'
import reviews6 from './reviews6.png'
import reviews7 from './reviews7.png'
import reviews8 from './reviews8.png'
import reviews9 from './reviews9.png'
import reviews10 from './reviews10.png'
import set from './set.svg'
import wifi from './wifi.svg'
import battery from './Empty Battery.svg'
import micro from './Microphone.svg'
import vkladka from './vkladka.svg'
import Attach from './Attach.svg'
import './slider.css'
import r1 from './1.png'
import r2 from './2.png'
import r3 from './3.png'
import r4 from './4.png'
import r5 from './5.png'
import r6 from './6.png'
import r7 from './7.png'
import r8 from './8.png'
import r9 from './9.png'
import r10 from './10.png'
import o1 from './o1.png'
import o2 from './o2.png'
import o3 from './o3.png'
import o4 from './o4.png'
import o5 from './o5.png'
import o6 from './o6.png'
import o7 from './o7.png'
import o8 from './o8.png'
import o9 from './o9.png'
import o10 from './o10.png'
import ReviewsLeft from './bgr15.png'
import ReviewsRight from './bgr17.png'

function ScreenBottom(){
    return(
        <div className="screen-bottom">
            <img src={Attach} />
            <div className="MessageBlock">
                <p>Сообщение</p>
                <img src={vkladka}/>
            </div>
            <img src={micro}/>
        </div>
        )
}

function ScreenTop(){
    return(
        <div className="screen-top">
            <p>09:00 PM</p>
            <div className="iconBlock">
                <img src={set} alt="сигнал"/>
                <img src={wifi} alt="вифи"/>
                <img src={battery} alt="батарея"/>
            </div>
        </div>
    )
}




export default function SliderRewiews() {

    let reviews = [
        
        {name:'Масис Мкртчян',
         data:'13 марта 2024',
         avatar: reviews1,
         text1: r1,
         text2: o1,
         link:'https://vk.com/masismk'
        },
        {name:'Екатерина Ганеева',
         data:'26 ноябрь 2024 ',
         avatar: reviews2,
         text1: r2 ,
         text2: o2,
         link:'https://vk.com/ganeevakate'
        },
        {name:'Мария Кулагина',
         data:'25 май 2025',
         avatar: reviews3,
         text1: r3,
         text2: o3,
         link:'https://vk.com/mrkulagina'
        },
        {name:'Анастасия Струкова',
         data:'14 апреля 2025',
         avatar: reviews4,
         text1:r4,
         text2: o4,
         link:'https://www.instagram.com/_nastyaa.s?igsh=Y2hjbWN0cGZjMHA='
        },
        {name:'Павел Широков',
         data:'3 марта 2025',
         avatar: reviews5,
         text1: r5,
         text2: o5,
         link:'https://www.instagram.com/pavel.shirok?igsh=MW5rdXdsMnY0NXdueQ=='
        },
        {name:'София Каралевич',
         data:'31 мая 2024 ',
         avatar: reviews6,
         text1:r6,
         text2: o6,
         link:'https://vk.com/sofya_karalevich'
        },
        {name:'Ева Никонорова',
         data:'28 февраля 2025',
         avatar: reviews7,
         text1:r7,
         text2: o7,
         link:'https://vk.com/iamevaaaaa'
        },
        {name:'Алина Потапкова',
         data:'16 май 2025',
         avatar: reviews8,
         text1:r8,
         text2:o8,
         link:'https://vk.com/a_potapochka'
        },
        {name:'Ксения Дворецкая',
         data:'30 января 2025',
         avatar: reviews9,
         text1:r9,
         text2:o9,
         link:'https://vk.com/a_potapochka'
        },
        {name:'Дарья Герасимчук',
         data:'15 июля 2025',
         avatar: reviews10,
         text1:r10,
         text2:o10,
         link:'https://www.instagram.com/leimanchik?igsh=ajVoc2NyZ3hsNXI2'
        },
    ]


  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: true
  };
  return (
    <div  className="Rewiews">
        <h1 href='#nav5' className="reviews-Title">Отзывы</h1>
       <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((item) =>   
        <div className="bgr">
                <div className="phone">
                    <ScreenTop/>
                    <div className="userBlock">
                        <p>Назад</p>
                        <div className="nameBlock">
                            <a href={item.link} target="_blank">{item.name}</a>
                            <p>был(а) {item.data}</p>
                        </div>
                        <a href={item.link} target="_blank"><img className="avatar" src={item.avatar} alt="аватар"/></a>
                    </div>
                    <div className="BgrChat">
                        <div className="ReviewsBlock"><img className="ReviewsText" src={item.text1}/></div>
                        <div className="ReviewsReplyBlock"><img className="ReviewsReplyText" src={item.text2}/></div>       
                    </div>
                    <ScreenBottom/>
                </div>
            </div>
        )}
      </Slider>
    </div>
        <img className='ReviewsLeft' src={ReviewsLeft}></img>
        <img className='ReviewsRight' src={ReviewsRight}></img>
    </div>
  );
}








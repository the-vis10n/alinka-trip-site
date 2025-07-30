import Globe from './Globe.svg'
import Test from './Test.svg'
import Tickets from './Tickets.svg'
import Insurance from './Insurance.svg'
import Documents from './Documents.svg'
import Confusion from './Confusion.svg'
import './service.css'
import Kelt from './kelt7.png'
import Brd from './brd15.png'

export default function Service(){

    const service = [
        {
            icon: Globe,
            text: 'Помогу выбрать подходящую страну для подачи'
        },
        {
            icon: Test,
            text: 'Заполню анкету без ошибок'
        },
        {
            icon: Tickets,
            text: 'Забронирую отели и билеты'
        },
        {
            icon: Insurance,
            text: 'Оформлю страховку'
        },
        {
            icon: Documents,
            text: 'Проверю твои документы перед подачей'
        },
        {
            icon: Confusion,
            text: 'Подскажу, как вести себя в визовом центре'
        },
        
    ]

    return(
        <div className='Service'>
            <h1 href='#nav3' className='service-Title'>Что я могу сделать для тебя</h1>
            <div className='service-Box'>
                {service.map((item) => 
                    <div className='service-Item'><img className='service-icon' src={item.icon}/><p className='service-Text'>{item.text}</p></div>
                )}
            </div>
            <img className='Kelt' src={Kelt}></img>
            <img className='Brd'src={Brd}></img>
        </div>
    )
}
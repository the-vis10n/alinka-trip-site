import Whatsapp from './Whatsapp.svg'
import Telegram from './Telegram.svg'
import VK from './VK.svg'
import Instagram from './Instagram.svg'
import Visa from './Visa.png'
import './contacts.css'
import BrgContacts from './bgrcontacts.png'

export default function Contacts(){

    const contacts = [
        {
            icon:Whatsapp,
            text:'@alinka_trip',
            link:''
        },
        {
            icon:Telegram,
            text:'@Alinka_tripp',
            link:'https://t.me/Alinka_tripp',
        },
        {
            icon:VK,
            text:'vk.com/secretplace_tgd',
            link: 'https://vk.com/secretplace_tgd'
        },
        {
            icon:Instagram,
            text:'the_great_deer',
            link: 'https://www.instagram.com/the_great_deer/'
        },
    ]

    return(
        <div className='Contacts'>
            <h1 href='#nav6' className="ContactsTitle">Контакты</h1>
           <div className='ContactsBlock'>
                <div className="ContactsBox">
                    <h2 className="ContactsBoxTitle">Связаться со мной</h2>
                    {contacts.map((item) =>
                    <div className='ContactsLine'>
                        <a href={item.link} target="_blank"><img className='ContactsIcon' src={item.icon}/></a>
                        <a href={item.link} target="_blank"><p className='ContactsText'>{item.text}</p></a>
                    </div>
                    )}
                </div>
                <img className='VisaApp' src={Visa}/>
            </div>
            <img className='BrgContacts' src={BrgContacts}></img>
        </div>
    )
}
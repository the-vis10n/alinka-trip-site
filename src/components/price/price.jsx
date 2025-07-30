import Analyze from './Analyze.svg'
import Approva from './Approval.svg'
import WarningShield from './Warning Shield.svg'
import './price.css'
import Piza from './tower-piza.png'
import Colos from './colosseum3.png'



export default function Price(){

    return(
        <div className='Price'>
            <h1 href='#nav4' className='Price-Title'>Цены и пакеты</h1>
            <div className='Price-Box'>
                <div className='Price-Item'>
                    <img className='Price-icon' src={Analyze}/>
                    <p className='Price-Text'>Проверка документов — <span>2 500 ₽</span></p>
                    <p className='Price-Text2'>Если ты всё собрал сам — я просто проверю и подскажу, чего не хватает.</p>
                </div>
                <div className='Price-Item'>
                    <img className='Price-icon' src={Approva}/>
                    <p className='Price-Text'>Стандартный пакет — <span>4 500 ₽</span></p>
                    <p className='Price-Text2'>Анкета, брони, страховка + сопровождение до дня подачи.</p>
                </div>
                <div className='Price-Item'>
                    <img className='Price-icon' src={WarningShield}/>
                    <p className='Price-Text'>При отказе — верну  <span>50 %</span> стоимости.</p>
                    <p className='Price-Text2'>(если отказ официальный, не по вине подающегося).</p>
                </div>
            </div>
            <img className='Colos' src={Colos}></img>
            <img className='Piza' src={Piza}></img>
        </div>
    )
}
import {Link} from 'react-router-dom'
import './Header.scss'

export function Header(){
    return(
        <div className='header'>
            {/*<h2>This is header</h2>*/}
            <div className='header-text'>
                <Link to ={'/'}>Сайт исторических реконструкций имени К.А.Жукова</Link>
            </div>
            <ul className="list-items">

                <li className="list-item__single">
                    <Link to = {'/about-reconstruction'}>Реконструкции</Link>
                </li>
                <li className="list-item__single">
                    <Link to ={'/login'}>Войти</Link>
                </li>
            </ul>





        </div>
    )
}
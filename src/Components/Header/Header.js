import {Link} from 'react-router-dom'
import './Header.scss'

export function Header(){
    return(
        <div className='header'>
            <h2>This is header</h2>
            <ul className="list-items">
                <li className="list-item__single">
                    <Link to = {'/about-reconstruction'}>About Reconstruction</Link>
                </li>
                <li className="list-item__single">
                    <Link to ={'/login'}>Login Page</Link>
                </li>
            </ul>





        </div>
    )
}
import {Link} from 'react-router-dom'
import {Header} from "../Header/Header";
import './LogInPage.scss'

export function LogInPage(){
    return(
        <div>
            <Header/>
        <div className='log-in__wrapper'>

            <div className="log-in">
                Login
            </div>
        </div>
        </div>
    )
}
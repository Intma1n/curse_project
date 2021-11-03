import {Link} from 'react-router-dom'
import {Header} from "../Header/Header";
import './LogInPage.scss'

export function LogInPage(){
    return(
        <div className='log-in__page'>
            <Header/>
        <div className='log-in__wrapper'>

            <div className="log-in">
                <div className="log-in__header">
                    Login
                </div>
                <div className="log-in-form__wrapper">
                    <form action="" className="form">
                        <input type="text" className="input_name" placeholder='Имя'/>
                        <input type="text" className="input_surname" placeholder='Фамилия'/>
                        <input type="text" className="input_email" placeholder='E-mail'/>
                        <input type='password' className="input_password" placeholder='Пароль'/>
                        <input type='submit' className="btn" placeholder='Зарегестрироваться'/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
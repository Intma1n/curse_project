import {SingleReconstruction} from "../SingleReconstruction/SingleReconstruction";
import {Link} from "react-router-dom";
import {Header} from "../Header/Header";
import './AboutReconstructionPage.scss'

export function AboutReconstrucctionPage(){
    return(
        <div>
            <Header/>

                <ul className='reconstructions-list'>

                <li className='reconstructions-list__item'>
                    <Link  to = {'/single-reconstruction'}>
                        Single reconstruction
                    </Link>
                </li>
                    <li className='reconstructions-list__item'>
                        <Link  to = {'/single-reconstruction'}>
                            Single reconstruction
                        </Link>
                    </li>
                    <li className='reconstructions-list__item'>
                        <Link  to = {'/single-reconstruction'}>
                            Single reconstruction
                        </Link>
                    </li>
                    <li className='reconstructions-list__item'>
                        <Link  to = {'/single-reconstruction'}>
                            Single reconstruction
                        </Link>
                    </li>
                    <li className='reconstructions-list__item'>
                        <Link  to = {'/single-reconstruction'}>
                            Single reconstruction
                        </Link>
                    </li>


                </ul>

        </div>
    )
}
import {SingleReconstruction} from "../SingleReconstruction/SingleReconstruction";
import {Link} from "react-router-dom";
import {Header} from "../Header/Header";
import './AboutReconstructionPage.scss'

export function AboutReconstrucctionPage(){
    return(
        <div>
            <Header/>
            <Link  to = {'/single-reconstruction'}>
                <ul className='reconstructions-list'>
                <li className='reconstructions-list__item'>
                    Single reconstruction
                </li>
                </ul>
            </Link>
        </div>
    )
}
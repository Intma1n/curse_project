import {SingleReconstruction} from "../SingleReconstruction/SingleReconstruction";
import {Link} from "react-router-dom";

export function AboutReconstrucctionPage(){
    return(
        <div>
            <h2>THIS IS ABOUT RECONSTRUCTION PAGE</h2>
            <Link  to = {'/single-reconstruction'}>
                Single reconstruction
            </Link>
        </div>
    )
}
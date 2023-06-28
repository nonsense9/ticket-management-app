import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export const Header = () => {
    return <div className="d-flex justify-content-between mb-5">
        <div><Link to={'tickets'}>Tickets</Link></div>
        <div><Link to={'dictionary'}>Dictionary</Link></div>
        <div><Link to={'map'}>Map</Link></div>
    </div>

}

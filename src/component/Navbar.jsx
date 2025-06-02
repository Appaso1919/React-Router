import { Link } from "react-router-dom";
import './header.css'
export default function Navbar() {
    return (
        <div className="header">
            <div>
                <Link className="link" to="/"><h2>Logo</h2></Link>
            </div>
            <div>
               <ul>
                 <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/login">Login</Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/collage">Collage</Link>
                </li>
                <li>
                    <Link className="link" to="/users">User</Link>
                </li>
               </ul>
            </div>
        </div>
    )
}
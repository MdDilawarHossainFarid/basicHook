import { Link } from "react-router-dom";

const Navigaiton = () => {
    return (
        <>
        <nav className="top-nav">
         <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
        
         </ul>
         </nav>
        </>
    )
}

export default Navigaiton

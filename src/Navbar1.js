// import { Link } from 'react-router-dom';

// const Navbar1 = () => {
//     return ( 
//         <nav className="navbar">
//             <div className="links">
//                 <Link to="/about" className="about">ABOUT</Link>
//                 <Link to="/" className="home">HOME</Link>
//                 <img src="logoo.jpg" alt="CC LOGO" />         
//                 <Link to="/events" className="events">EVENTS</Link>
//                 <Link to="/contact_us"className="cont">CONTACT US</Link>
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar1;

import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,
    Button
   } from "react-bootstrap";

const Navbar1 = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <a href="#"><img src="https://codingyaar.com/wp-content/uploads/logo.png"></a>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <div/>
        <nav/>
            
        
     );
}
 
export default Navbar1;


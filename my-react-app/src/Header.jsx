import './Header.css';
import pic from './assets/logo.png';


function Header() {
    
    return (
            <header>
                <nav>
                    <img src={pic} alt="Docplanner Group" className='image' />
                    <ul className='navlist'>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Departments</a></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;
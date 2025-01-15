import './Header.css';
import pic from './assets/react.svg'


function Header() {
    
    return (
            <header>
                <img src={pic} alt="Docplanner Group" className='image' />
                <nav>
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
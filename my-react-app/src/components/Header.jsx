import './Header.css';
import pic from './assets/logo.png';


function Header() {
    return (
            <div className='HeadComp'><header>
                <nav>
                    <img src={pic} alt="Docplanner Group" className='image' />
                    <ul className='navlist'>
                        <li><a href="#" className='link'>About us</a></li>
                        <li><a href="#" className='link'>Career</a></li>
                        <li><a href="#" className='link'>Departments</a></li>
                    </ul>
                </nav>
            </header></div>
    );
}

export default Header;
import './Header.css';
import pic from './assets/logo.png';


function Header() {
    return (
            <div className='HeadComp'><header>
                <nav>
                    <img src={pic} alt="Docplanner Group" className='image' />
                    <ul className='navlist'>
                        <li><a href="#"><p>About us</p></a></li>
                        <li><a href="#"><p>Career</p></a></li>
                        <li><a href="#"><p className='text-center text-blue-700'>Departments</p></a></li>
                    </ul>
                </nav>
            </header></div>
    );
}

export default Header;
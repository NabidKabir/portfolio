import './Header.css';



const Header = () => {
    return(
        <header className='header'>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='/'>Nabid Kabir</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='#section1'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#section2'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#section3'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#section4'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
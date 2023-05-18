import './HomePage.css';
import Header from './components/Header';
import About from './components/About';

function HomePage() {
    return(
        <div className='HomePage'>
            <Header/>
            <div id = "section1">
                <h1>Section 1</h1>
            </div>
            <div id = "section2">
                <About/>
            </div>
            <div id = "section3">
                <h1>Section 3</h1>
            </div>
            <div id = "section4">
                <h1>Section 4</h1>
            </div>
        </div>
    );
}

export default HomePage;
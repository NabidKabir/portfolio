import './About.css';

const About = () => {
    return(
        <div className='about'>
            <div className='container'>
                <h2 className='section-title'>About Me</h2>
                <div>
                    <div className='left'>
                        <p className='section-description'>
                            Hello, my name is Nabid Kabir and I am passionate and dedicated computer science major in his 4th year
                            at Rutgers University - New Brunswick. I have a strong interest in software development and have experience
                            with object-oriented programming and web development. I have experience in Java, C, Python, JavaScript, and 
                            and various technologies such as React, Node, Android Studio, HTML, CSS, and Git. I have a wide variety of 
                            projects showcased in my resume, and I am hoping learn TypeScript as well as SQL this 
                            2023! I have been programming for 7 years and hope to never stop as it is a deep passion of mine!
                        </p>
                    </div>
                    <div className='hobby-section'>
                        <div className='left'>
                            <p>
                                Aside from programming, I also have many hobbies that I enjoy delving into from time to time. I like are playing guitar,
                                listening to music, studying philosophy (achieving a minor in), watching television and movies, as well 
                                as crochet. I also really enjoy reading, I think it is important to get away from screens and what better way to 
                                wind down than to pick up a good book! Three of my favorite books that I have read in recent time are:
                            </p>
                        </div>
                        <div className='right'>
                            <ul className='book-list'>
                                <li>The Secret History - Donna Tartt</li>
                                <li>Kitchen - Banana Yoshimoto</li>
                                <li>Things Fall Apart - Chinua Achebe</li>
                                <li>Stoner - John Williams</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
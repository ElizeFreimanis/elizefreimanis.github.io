import "./styles.css";

export default function About() {
    return (
        <div className='about' id='abt'>
            <img className='selfie' alt='selfie' src='images/selfie.jpeg' />
            <div className='about-info'>
                <h1>WHO AM I?</h1>
                <p>
                    My name is Elize and i am a self-taught Front-End Developer. During the fall of
                    2021 after a few months of hobby coding i completed the Front-End Engineering
                    course on CodeCademy and although it was challenging, as only coding can be, i
                    loved every minute of it. I strive to be a better developer every day and
                    looking forward to a fun and exciting carrier in coding!
                </p>
                <p>
                    I would concider myself a outgoing and happy person with a hunger for knowledge.
                    In my free time i like to listen and dance to music (not professionally but in
                    my livingroom), meet friends and family and travel.
                </p>
                <p>
                    I want to start from the bottom and work my way up the knowledge ladder and
                    hopefully i can become one of the best in my field one day.
                </p>
            </div>
        </div>
    );
}

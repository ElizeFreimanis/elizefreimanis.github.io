import './styles.css';

export default function About() {
    return (
        <div className='about' id='abt'>
            <img className='selfie' alt='selfie' src='images/selfie.jpeg' />
            <div className='about-info'>
                <h1>WHO AM I?</h1>
                <p>
                    My name is Elize and i am a front-end developer fresh out of
                    bootcamp. I strive to be a better developer every day and
                    looking forward to a fun and exciting carrier in coding! I
                    did a online bootcamp through Codecademy and although it was
                    challenging at times, as only coding can be, i loved every
                    minute of it.
                </p>
                <p>
                    I would concider myself a outgoing and happy person with a
                    hunger for knowledge. In my free time i like to listen and
                    dance to music (not professionally but in my livingroom),
                    meet friends and travel.
                </p>
                <p>
                    I want to start from the bottom and work my way up the
                    knowledge ladder, hopefully i can become one of the best in
                    my field one day.
                </p>
            </div>
        </div>
    );
}

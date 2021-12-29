import { Link } from 'react-router-dom';
import './styles.css';
import Container from '../../components/Container';

export default function Contact() {
    return (
        <Container>
            <h1>CONTACT ME</h1>
            <div className='logos'>
                <a href='mailto:elizesf@hotmail.com'>
                    <img alt='email' src='images/email.svg' />
                </a>
                <Link
                    to={{ pathname: 'https://github.com/ElizeFreimanis' }}
                    target='_blank'
                >
                    <img alt='github' src='images/github1.svg' />
                </Link>
                <Link
                    to={{
                        pathname:
                            'https://www.linkedin.com/in/elize-sj%C3%B6man-freimanis-1259a5200/',
                    }}
                    target='_blank'
                >
                    <img alt='linkedin' src='images/linkedin.svg' />
                </Link>
            </div>
        </Container>
    );
}

import "./styles.css";
import Container from "../../components/Container";

export default function Skills() {
    return (
        <Container>
            <h1>MY SKILLS</h1>
            <div className='logos'>
                <img alt='css' src='images/css3.svg' />
                <img alt='html5' src='images/html5.svg' />
                <img alt='javascript' src='images/js.svg' />
                <img alt='terminal' src='images/terminal.svg' />
                <img alt='devtools' src='images/chrome.svg' />
                <img alt='git' src='images/git.svg' />
                <img alt='react' src='images/react.svg' />
                <img alt='react' src='images/typescript.svg' />
                <img alt='react' src='images/redux.svg' />
            </div>
        </Container>
    );
}

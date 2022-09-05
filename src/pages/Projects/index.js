import "./styles.css";
import Container from "../../components/Container";
import ProjectContainer from "../../components/ProjectContainer";

export default function Projects() {
    return (
        <Container>
            <h1>MY PROJECTS</h1>
            <div className='p-container'>
                <ProjectContainer
                    img={"images/calculator.png"}
                    link={"https://elizefreimanis.github.io/react-calculator/"}
                >
                    Calculator
                </ProjectContainer>
                <ProjectContainer
                    img={"images/recipeApp.png"}
                    link={"https://elizefreimanis.github.io/recipe-app/"}
                >
                    Recipe app
                </ProjectContainer>
                <ProjectContainer
                    img={"images/weatherApp.png"}
                    link={"https://elizefreimanis.github.io/weather-app/"}
                >
                    Weather app
                </ProjectContainer>
            </div>
        </Container>
    );
}

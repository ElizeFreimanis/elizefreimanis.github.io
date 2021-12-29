import './styles.css';

export default function Container({ children }) {
    let h = { height: window.innerHeight };
    return (
        <div style={h} className='container'>
            {children}
        </div>
    );
}

import './styles.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="site-title">Karen's Portfolio</a>
            <ul>
                <li id= 'nav-list'>
                    <a href="/about">About</a>
                </li>
                <li id= 'nav-list'>
                    <a href="/skills">Skills</a>
                </li>
                <li id= 'nav-list'>
                    <a href="/work">Projects</a>
                </li>
                <li id= 'nav-list'>
                    <a href="/contact">Contact Me!</a>
                </li>
            </ul>
        </nav>
    )
}
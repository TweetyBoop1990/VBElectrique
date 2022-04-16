import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
    return (
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="services" className="menu-item" href="/services">Services</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    );
}

export default BurgerMenu

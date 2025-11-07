import StaggeredMenu from "./components/StaggeredMenu";
import './NavMenu.css';

function NavMenu(){
    const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com/shohanur-shoron' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/shohanur-shoron/' }
    ];

    return (
        <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#FFC400', '#FF3F7F', '#8C00FF', '#5227FF']}
            logoUrl="/public/logo.png"
            accentColor="#5227FF"
            isFixed={true}
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    )
}

export default NavMenu;
import StaggeredMenu from "./components/StaggeredMenu";
import './NavMenu.css';

function NavMenu(){
    const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Work', ariaLabel: 'View my work', link: '#work' },
    { label: 'Education', ariaLabel: 'View my education', link: '#education' },
    { label: 'Research', ariaLabel: 'View my research', link: '#research' },
    { label: 'Chat', ariaLabel: 'Chat with me', link: '#chat' },
    { label: 'Contact', ariaLabel: 'Contact me', link: '#contact' },
    ];

    const socialItems = [
    { label: 'Facebook', link: 'https://www.facebook.com/shohanur.rahman.shoron.bd' },
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
            logoUrl="/logo.png"
            accentColor="#5227FF"
            isFixed={true}
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    )
}


export default NavMenu;

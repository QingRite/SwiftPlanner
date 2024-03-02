function Navbar(props) {
    //style
    const navBarStyle = {
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '7.5vh',
    };

    const headerNameStyle = {
        display: 'inline-block',
        fontFamily: "'Advent Pro', sans-serif",
        color: 'white',
        margin: '20px',
    };
    
    const headerColourStyle = {
        color: '#426da9',
    };

    const navListStyle = {
        display: 'inline-block',
        margin: '10px',
    };

    const navItemStyle = {
        display: 'inline-block',
        marginLeft: '-3px',
    };

    const navAStyle = {
        color: 'white',
        listStyle: 'none',
        textDecoration: 'none',
        padding: '0px 10px',
    };

    const navBorderStyle = {
        borderRight: '2px solid gray',
    };
    //combine border with nav item to create a separator
    const navSeparatorStyles = { ...navItemStyle, ...navBorderStyle };

    const hamburgerStyle = {
        marginRight: '20px',
        display: 'none',
    };

    const barsStyle = {
        display: 'inline-block',
        backgroundColor: 'white',
        height: '2px',
        width: '18px',
        top: '-3px',
        position: 'relative',
    };


    return (
        <header>
            <nav style={navBarStyle}>
                <h1 style={headerNameStyle}><span style={headerColourStyle}>SwiftPlanner</span></h1>
                <ul style={navListStyle}>
                    <li style={navSeparatorStyles}><a style={navAStyle} href="#">Important</a></li>
                    <li style={navSeparatorStyles}><a style={navAStyle} href="#">Tasks</a></li>
                    <li style={navSeparatorStyles}><a style={navAStyle} href="#">Goals</a></li>
                    <li style={navSeparatorStyles}><a style={navAStyle} href="#">Calender</a></li>
                    <li style={navSeparatorStyles}><a style={navAStyle} href="#">Statistics</a></li>
                    <li style={navItemStyle}><a style={navAStyle} href="#">History</a></li>
                    <li style={hamburgerStyle}><a id="toggle-btn" style={navAStyle} href="#"><span style={barsStyle}></span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

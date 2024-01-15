const Header = ()=>{
    const view = `
        <div class='header-inner'>
            <img class="header-logo" src="../images/logo.png"/>
            <form class="heder-form">
                <input type="search" placeholder="Search a character" />
                <button type="submit">Search</button>
            </form>
        </div>
    `;
    return view
}
export default Header;
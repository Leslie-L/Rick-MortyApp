import imgUrl from '../images/logo.png'
const Header = ()=>{
    const view = `
        <div class='header-inner'>
            <a href="/">
                <img class="header-logo" src="${imgUrl}"/>
            </a>
            <form class="header-form">
                <input type="search" placeholder="Search a character" />
                <button type="submit">Search 🔍</button>
            </form>
        </div>
    `;
    return view
}
export default Header;
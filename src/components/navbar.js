import "../styles/nav.css"

function Navbar() {
    return ( 
        <nav>
            <div className="col left">
                <h1>Slide<span>.</span></h1>
            </div>
            <div className="col centre">
                <input type="text"/>
                <i className="material-icons">search</i>
            </div>
            <div className="col right">
                <span id="menu-icons">
                     <i className="material-symbols-outlined">dark_mode</i>
                     <i className="material-symbols-outlined">settings</i>
                     <i className="material-symbols-outlined">notifications</i>
                     <h1>|</h1>
                     <span className="user-pic"></span>
                </span>
            </div>
        </nav>
     );
}

export default Navbar;
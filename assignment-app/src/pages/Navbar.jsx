

//Componenet
function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                {/* <p> tag is a placeholder, You'll need to change the tag/component type later*/}
                <p className="navbar-brand ms-4 nav-link">User Behavior Data</p>
                <Link className="navbar-brand ms-4 nav-link" to="/search"> Search Through Dataset</Link>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar;
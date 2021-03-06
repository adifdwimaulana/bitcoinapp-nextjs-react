import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Crypto App</a>


                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link">About</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
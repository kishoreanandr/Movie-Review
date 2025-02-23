import { NavLink } from "react-router-dom";

export const Header=()=>{
    return(
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-md sticky-top">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <i class="bi bi-film"></i> Movie Hunt
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">

                          <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to="/movie/top" className="nav-link">
                                    Top Rated
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/movie/popular" className="nav-link">
                                    Popular
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/movie/upcoming" className="nav-link">
                                    Upcoming
                                </NavLink>
                            </li>

                          </ul>
                        <form>
                            <input type="search" className="form-control me-2" placeholder="Search" name="search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
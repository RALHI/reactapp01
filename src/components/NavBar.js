import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NavBar(props){

    const RedDarkModeHandler = () => {
      props.modeset("#652727");
    }

    const YellowDarkModeHandler = () => {
      props.modeset("#959547");
    }

    const GreenDarkModeHandler = () => {
      props.modeset("#405540");
    }

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to='/home'>{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
              </ul>
              {props.mode === "dark" ? <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={RedDarkModeHandler}>Red Dark Mode</button>
                <button type="button" className="btn btn-warning" onClick={YellowDarkModeHandler}>Yellow Dark Mode</button>
                <button type="button" className="btn btn-success" onClick={GreenDarkModeHandler}>Green Dark Mode</button>
              </div> : ""}
              <div className={`form-check form-switch mx-4 text-${props.mode === "light" ? "dark" : "light"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.toggletext}</label>
              </div>
              <form className="d-flex" role="search" onSubmit={props.SearchHandler}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    );
}

NavBar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired     
}

NavBar.defaultProps ={
    title : 'Set title',
    about : 'About'
}
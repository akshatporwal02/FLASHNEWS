const Navbar = ({ setCategory, toggleMode,mode}) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${mode === "light" ? "bg-light" : "bg-dark"}`}
    >
      <div className="container-fluid">
        <a className={`navbar-brand" ${mode === "light" ? "text-dark" : "text-light"}`} href="#">
          <span className={`badge ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} fs-4`}>FlashNews</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <div
                className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`}
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`} onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`} onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`} onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`} onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link btn btn-link ${mode === "light" ? "text-dark" : "text-light"}`}
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>

          </ul>
          <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                // checked={mode === "dark"}
              />
            <label className={`form-check-label ${mode === "light" ? "text-dark" : "text-light"}`} htmlFor="flexSwitchCheckChecked">
              {mode === "light" ? "Light Mode" : "Dark Mode"}
            </label>
            </div>
        </div>
      </div>
      {/* <div className="form-check form-switch ">
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Dark Mode</label>

  
</div> */}
    </nav>
  );
};

export default Navbar;

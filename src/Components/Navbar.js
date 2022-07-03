import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <>
      <style>{`
      * {
        {/* border: 1px solid red; */}
      }
        nav {
            font-family: 'Work Sans', sans-serif;
        }

        .nav-link {
            color: var(--dark-blue);
            font-size: 20px;          
        }

        .active {
            font-weight: bold;
            transform: translateY(-4px);
            text-decoration: dashed underline;
            text-decoration-color: var(--active-link);
            text-underline-offset: 6px;
        }

        {/* .active::after {
            content: '';
            height: 2px;
            width: 100%;
            background: var(--active-link);
        } */}

        .btn-nav {
            border: 1px solid var(--dark-blue);
            color: var(--dark-blue);
            margin: 0 1rem;
            width: 96px;
            height: 36px;
            font-family: 'Ubuntu', san-serif;
            font-weight: medium;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;            
        }
        
        .join {
            background: var(--dark-blue);
            color: white;
        }
    `}</style>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <div className="container mt-2">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Tlancer" width={"187"} height={"45"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Student
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Tutor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Why us?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Reviews
                  </a>
                </li>
              </ul>
              <button className="btn btn-nav btn-lg join">Join</button>
              <button className="btn btn-nav btn-lg">login</button>
              <button className="btn btn-nav btn-lg">Eng</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

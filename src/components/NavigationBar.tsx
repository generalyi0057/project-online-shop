import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';

const logo = {name: "uozɐɯ∀", link: "/"};
const settings = [
  {name: "Sign In", link: "/sign-in"},
  {name: "Sign Up", link: "/sign-up"}
];

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to={logo.link} className="navbar-brand text-light fs-3 fw-bold text-decoration-none">
          {logo.name}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={logo.link} className="nav-link text-light">
                <span className="text-light" aria-current="page">Home</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {settings.map((setting) =>
              <li className="nav-item" key={setting.name}>
                <Link to={setting.link} className="nav-link text-light">
                  {setting.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
  // return (
  //   <nav className="navbar navbar-dark bg-dark sticky-top">
  //     <div className="container-fluid">
  //       <Link to={logo.link} className="navbar-brand text-light fs-3 fw-bold text-decoration-none">
  //         {logo.name}
  //       </Link>
  //       <div className="collapse navbar-collapse" id="navbarText">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">Features</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">Pricing</a>
  //           </li>
  //         </ul>
  //         <span className="navbar-text">
  //           Navbar text with an inline element
  //         </span>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavigationBar;

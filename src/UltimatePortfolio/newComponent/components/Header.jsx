// import img from '../../../../public'
const Header = () => {
  return (
    <div className="header-main-wrapper">
      <div className="custom-container">
        <div className="navbar-container">
          <div className="detail-left">
            <div className="navbar-avatar-container">
              <div className="button-wrapper ">
                <div className="button-bg"></div>
                {/* <button> */}
                <img
                  src="./images/heroSlider/avatar-pic.jpg"
                  alt="avatar-image"
                />
                {/* </button/> */}
              </div>
            </div>
          </div>
          <div className="detail-right">
            <ul className="nav-menu-wrapper">
              <li className="nav-menu">
                <a href="#home "> Home</a>
              </li>
              <li className="nav-menu">
                <a href="#about"> About</a>
              </li>
              <li className="nav-menu">
                <a href="#tech"> Tech</a>
              </li>
              <li className="nav-menu">
                <a href="#get_in_touch"> Get in Touch </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

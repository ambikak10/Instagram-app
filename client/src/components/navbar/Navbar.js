import React, { Component } from "react";
import "./navbar.css";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className='navbar navbar-light navbar-expand-lg'
        style={{ backgroundColor: "white", padding: "0px" }}
      >
        <div className='container'>
          <Link className='navbar-brand' to=''>
            <img className='logo-navbar' alt='Instagram' src={logo} />
          </Link>

          <div className='search d-none d-xl-block d-lg-block d-md-block'>
            <span className='fa fa-search'></span>
            <input
              className='form-control form-control-sm'
              type='search'
              placeholder='Search..'
            />
          </div>
          <ul style={{ marginTop: "auto", marginBottom: "auto" }}>
            <li>
              <Link to='#'>
                <i className='fa fa-home navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='fa fa-compass navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='fa fa-heart-o navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>

            <li>
              <Link to='/profile'>
                <img className='avatar navbarIcon' src={avatar} alt='Avatar' />
              </Link>
            </li>

            {/* to be shown only once the user logs In */}
            <li style={{marginTop: "10px"}}>
              <Link
                to='/'
                // style={{
                //   fontSize: "0.9em",
                //   fontFamily: "sans-serif",
                //   color: "black",
                // }}
              >
                <span className="navbarIcon" style={{fontSize: "0.9em"}}>Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
   export default Navbar; 

              {/* Conditional rendering of dropdown -- on click to do in react*/}
              {/* <div className='dropdown'>
                <section
                  className='avatar-wrapper dropdown-toggle'
                  id='profileDropDownMenu'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <img
                    className='avatar navbarIcon'
                    src={avatar}
                    alt='Avatar'
                  />
                  <div
                    className='log-toolContainer dropdown-menu'
                    aria-labelledby='profileDropDownMenu'
                  >
                    <div className='log-popover'>
                      <Link to='#'>
                        <i
                          className='fa fa-user'
                          aria-hidden='true'
                          style={{ marginRight: "8px" }}
                        ></i>
                        Profile
                      </Link>
                      <Link to='#'>
                        <i
                          className='fa fa-bookmark-o'
                          style={{ marginRight: "8px", marginBottom: "1px" }}
                          aria-hidden='true'
                        ></i>
                        Saved
                      </Link>
                      <hr
                        className='lineTopMargin'
                        style={{ marginTop: "1px" }}
                      />
                      <Link to='#' style={{ marginTop: "-15px" }}>
                        Log out
                      </Link>
                    </div> 
                   </div> 
                 </section>
              </div> */}
       
 



import React, { useState } from 'react';
import './styles.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (id) => {
    setActiveSubmenu(id);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className="primary-header sticky-top" aria-label="Page Header">
      <div className="d-lg-block utility-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="utility-nav">
                <nav aria-label="Utility" className="position-relative">
                  <ul>
                    <li className="nav-item dropdown utility-nav-link">
                      <a
                        href="#"
                        target
                        className="nav-link utility-nav-link"
                        aria-controls="user-nav-30cb9991-1012-4707-989e-b081d7d47ea8"
                        aria-expanded="false"
                      >
                        Support
                        <span className="sr-only">Support</span>
                      </a>
                    </li>
                    <li className="nav-item language-wrap utility-nav-link dropdown utility-nav-link">
                      <a
                        href="#"
                        className="nav-link utility-nav-link"
                        aria-controls="region-picker"
                        aria-expanded="false"
                      >
                        <img src="https://www.pfu-us.ricoh.com/-/media/project/common/icons/icon_region-picker.png" />
                        English
                      </a>
                    </li>
                    <li className="nav-item">
                      <button className="search-trigger" id="topnav-search-toggle">
                        <img
                          src="https://www.pfu-us.ricoh.com/Themes/scanners/images/icons/icon-search.svg"
                          alt=""
                        />
                        <span className="sr-only">Toggle Search</span>
                      </button>
                    </li>
                    <li className="nav-item utility-nav-login">
                      <a
                        href="#"
                        target
                        className="nav-link utility-nav-login"
                        aria-controls="user-nav-fe202bac-8e61-48ff-a82f-a2f7e94dfa54"
                        aria-expanded="false"
                      >
                        <img
                          src="https://www.pfu-us.ricoh.com/Themes/Scanners/images/icons/icon-login.svg"
                          alt=""
                        />
                        <span className="sr-only">Login</span>
                      </a>
                    </li>
                    <li className="nav-item utility-nav-cart">
                      <a
                        href="#"
                        target
                        className="nav-link utility-nav-cart"
                        aria-controls="user-nav-e5d23bad-b075-4174-82d5-5628bc519991"
                        aria-expanded="false"
                      >
                        <img
                          src="https://www.pfu-us.ricoh.com/Themes/Scanners/images/icons/icon-cart.svg"
                          alt=""
                        />
                        <span className="sr-only">Cart</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="d-lg-block primary-navigation-desktop" aria-label="Navigation Bar">
        <div className="container">
          <div className="row">
            <div className="col-12 primary-nav-row">
              <nav
                id="primary-nav"
                className="navbar primary-nav navbar-expand-lg"
                aria-label="Primary"
              >
                <div className="mobile-lock-up">
                  <a className="navbar-brand" href="/">
                    <img
                      src="https://www.pfu-us.ricoh.com/Themes/scanners/images/logo.svg"
                      alt="scanners"
                    />
                  </a>
                </div>
                <div className="collapse navbar-collapse nav-justify" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li
                      className="nav-item dropdown levels-2"
                      onMouseEnter={() => handleMouseEnter('documentScanners')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        id="navbarDropdownMenuLink_91b3c894-ffa3-4da2-9a39-375d49e1ae56"
                        href="/scanners"
                        target
                        className="nav-link dropdown-toggle"
                        title="Browse Document Scanners"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Document Scanners
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div
                        aria-labelledby="navbarDropdownMenuLink_91b3c894-ffa3-4da2-9a39-375d49e1ae56"
                        className={`dropdown-menu column-dropdown ${
                          activeDropdown === 'documentScanners' ? 'show' : ''
                        }`}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <a href="/scanners/fi" target className="heading">
                                Enterprise &amp; Government
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    fi-8170
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    fi-8950
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    FADGI Bundle
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Solutions
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Calculate Potential Savings
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    All fi Series Scanners
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                Home &amp; Small Business
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    ScanSnap iX1600
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    ScanSnap iX1400
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    ScanSnap iX1300
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Refurbished ScanSnap
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    ScanSnap Software
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    All ScanSnap Scanners
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                By Document Type
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Photos
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Receipts
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    ID Cards
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Onboarding
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Trading Cards
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    View All Scanner Features
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                By Scanner Function
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Production
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Flatbed
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Network
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Desktop
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Personal/Small Business
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    View All Document Scanners
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item dropdown levels-2"
                      onMouseEnter={() => handleMouseEnter('solutionServices')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        id="navbarDropdownMenuLink_da09ff52-d5ed-4b83-b1ab-f47025d61168"
                        href="/scanners/fi/solutions"
                        target
                        className="nav-link dropdown-toggle"
                        title="Browse Solutions & Services"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Solutions &amp; Services
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div
                        className={`dropdown-menu column-dropdown ${
                          activeDropdown === 'solutionServices' ? 'show' : ''
                        }`}
                        aria-labelledby="navbarDropdownMenuLink_da09ff52-d5ed-4b83-b1ab-f47025d61168"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <a href="#" target className="heading">
                                Software Solutions
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Image Optimization
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/scanners/fi/solutions/paperstream-capture-pro"
                                    target
                                    className
                                  >
                                    <span>NEW</span> PaperStream Capture Pro
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Distributed Scanning
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Multi Scanner Management
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Integrations
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    View All Software
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                Services
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Priority Replacement
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Premium On-Site &amp; Maintenance
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Basic On-Site
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Mail-in Service
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Service Guides
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    View All Services
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                Industries
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Government
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Education
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Healthcare
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Accounting
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    BPO, Service Bureaus
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className="highlighted">
                                    View All Industries
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <a href="#" target className="heading">
                                Scanner Resources
                              </a>
                              <ul className="third-level">
                                <li>
                                  <a href="#" target className>
                                    Scanner Guides
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Programs
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    Partners
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target className>
                                    How To Buy
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item dropdown levels-3 popout"
                      onMouseEnter={() => handleMouseEnter('officeProductivity')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink_9db79b0e-e624-4b6c-affd-8d10a626ac7b"
                        target
                        href="/office-productivity"
                        title="Browse Office Productivity"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Office Productivity
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div
                        className={`dropdown-menu  ${
                          activeDropdown === 'officeProductivity' ? 'show' : ''
                        }`}
                        aria-labelledby="navbarDropdownMenuLink_9db79b0e-e624-4b6c-affd-8d10a626ac7b"
                      >
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li
                                className="inner-menu"
                                onMouseEnter={() => handleSubmenuEnter('printers')}
                                onMouseLeave={handleSubmenuLeave}
                              >
                                <a href="#" target className aria-expanded="false">
                                  Printers
                                </a>
                                <ul
                                  className={`third-level ${
                                    activeSubmenu === 'printers' ? 'show' : ''
                                  }`}
                                >
                                  <li>
                                    <a
                                      href="/printers/black-and-white-laser-printer-132-p"
                                      target
                                      className
                                    >
                                      Black &amp; White Laser Printer
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Black &amp; White 4-in-1 Laser Printer
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Color Laser Printer
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Color 4-in-1 Laser Printer
                                    </a>
                                  </li>
                                  <li className="inner-menu">
                                    <a href="#" target className aria-expanded="false">
                                      Printer Guides
                                    </a>
                                    <ul className="fourth-level">
                                      <li>
                                        <a href="#" target className>
                                          Business Printers
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" target className>
                                          Business Printing Solutions
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" target className>
                                          How Printers Work
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" target className>
                                          Types of Printers
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="inner-menu"
                                onMouseEnter={() => handleSubmenuEnter('projectors')}
                                onMouseLeave={handleSubmenuLeave}
                              >
                                <a href="#" target className aria-expanded="false">
                                  Projectors
                                </a>
                                <ul
                                  className={`third-level ${
                                    activeSubmenu === 'projectors' ? 'show' : ''
                                  }`}
                                >
                                  <li>
                                    <a href="#" target className>
                                      Business &amp; Classroom Projectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Short Throw Projectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Ultra Short Throw Projectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Auditorium &amp; Venue Projectors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Golf Simulator Projectors
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="inner-menu"
                                onMouseEnter={() => handleSubmenuEnter('portable')}
                                onMouseLeave={handleSubmenuLeave}
                              >
                                <a href="#" target className aria-expanded="false">
                                  Portable Monitors
                                </a>
                                <ul
                                  className={`third-level ${
                                    activeSubmenu === 'portable' ? 'show' : ''
                                  }`}
                                >
                                  <li>
                                    <a href="#" target className>
                                      Wireless
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target className>
                                      Wired
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  Meeting 360
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item dropdown levels-1 popout"
                      onMouseEnter={() => handleMouseEnter('resources')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink_59e93e61-e61f-4d3a-87b7-d73f13748beb"
                        target
                        href="/resources"
                        title="Browse Resources"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Resources
                      </a>
                      <button
                        className="toggle-dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      />
                      <div
                        className={`dropdown-menu  ${activeDropdown === 'resources' ? 'show' : ''}`}
                        aria-labelledby="navbarDropdownMenuLink_59e93e61-e61f-4d3a-87b7-d73f13748beb"
                      >
                        <div className="row">
                          <div className="col-lg-8 offset-lg-1">
                            <ul className="inner-submenu">
                              <li>
                                <a href="/about-us" target className="heading">
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  Customer Stories
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  Events
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  Industry Briefs
                                </a>
                              </li>
                              <li>
                                <a href="#" target className="heading">
                                  Videos
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

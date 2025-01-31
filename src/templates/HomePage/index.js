/* eslint-disable react/no-unknown-property */
import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <>
      <main role="main" id="mainContent">
        <section className="animated-banner secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12 banner-content">
                <h2 className="animated-text" style={{ opacity: 1 }}>
                  Fujitsu Document Scanners are now Ricoh Document Scanners
                </h2>
                <p className="animated-text" style={{ opacity: 1 }} />
                <a className="cta" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="promo-carousel slick-initialized slick-slider slick-dotted"
          data-autoplay="true"
          data-autoplay-speed={6000}
          data-speed={500}
        >
          <a name="home" className="anchor" />
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: 8400 }}>
              <div
                className="slide slick-slide"
                data-slick-index={0}
                aria-hidden="true"
                style={{
                  width: 1680,
                  position: 'relative',
                  left: 0,
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                  transition: 'opacity 500ms',
                }}
                tabIndex={-1}
                role="tabpanel"
                id="slick-slide00"
                aria-describedby="slick-slide-control00"
              >
                <section className="full-width-promo-with-background-image orientation-left">
                  <a name="paperstream-capture-pro" className="anchor" tabIndex={-1} />
                  <div className="image-container">
                    <picture>
                      <source
                        media="(max-width: 991px)"
                        srcSet="
                    /-/media/project/scanners/home/promo-carousel/pfu_scansnapreceiptedition-lp_homepagecarousel-853x290.png?mw=991&hash=8393E15EEC92F4631A6901C73B8302D2
                  "
                      />
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/112carouselslide9pscpd.jpg?mw=2880&hash=BCF281AB89901234D643A6E22C7E98AA"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="content-wrapper">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="content-col col-lg-6">
                          <div className="content-container no-text-box">
                            <div className="text">
                              <div>
                                <h2 className="heading-1">
                                  Introducing the New PaperStream Capture Pro
                                </h2>
                              </div>
                              <div className="body">
                                <p>
                                  Defeat daunting data entry. Streamline manual processes with
                                  automated document scanning, checking, extraction, and delivery.
                                </p>
                              </div>
                            </div>
                            <div className="cta-container">
                              <a
                                className="btn btn-reverse"
                                href="#"
                                disabledescription="True"
                                tabIndex={-1}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="slide slick-slide"
                data-slick-index={1}
                aria-hidden="true"
                style={{
                  width: 1680,
                  position: 'relative',
                  left: '-1680px',
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                  transition: 'opacity 500ms',
                }}
                tabIndex={-1}
                role="tabpanel"
                id="slick-slide01"
                aria-describedby="slick-slide-control01"
              >
                <section className="full-width-promo-with-background-image orientation-left">
                  <a name="scansnap-ix1600" className="anchor" tabIndex={-1} />
                  <div className="image-container">
                    <picture>
                      <source
                        media="(max-width: 991px)"
                        srcSet="
                    /-/media/project/scanners/home/promo-carousel/pfu_scansnapreceiptedition-lp_homepagecarousel-853x290.png?mw=991&hash=8393E15EEC92F4631A6901C73B8302D2
                  "
                      />
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/pfu_scansnapreceiptedition-lp_homepagecarousel.png?mw=2880&hash=A78A4B7B5F60D53BA0E4A4967CB5F440"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="content-wrapper">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="content-col col-lg-6">
                          <div className="content-container no-text-box">
                            <div className="text">
                              <div>
                                <h2 className="heading-1">Take “taxing” out of tax season</h2>
                              </div>
                              <div className="body">
                                <p>
                                  The iX1600 Receipt Edition easily configures all the data from
                                  your receipts and invoices into your Quickbooks® scanning profile.
                                </p>
                              </div>
                            </div>
                            <div className="cta-container">
                              <a
                                className="btn btn-reverse"
                                href="#"
                                disabledescription="True"
                                tabIndex={-1}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="slide slick-slide slick-current slick-active"
                data-slick-index={2}
                aria-hidden="false"
                style={{
                  width: 1680,
                  position: 'relative',
                  left: '-3360px',
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
                tabIndex={0}
                role="tabpanel"
                id="slick-slide02"
                aria-describedby="slick-slide-control02"
              >
                <section className="full-width-promo-with-background-image orientation-left">
                  <a name="naos" className="anchor" tabIndex={0} />
                  <div className="image-container">
                    <picture>
                      <source
                        media="(max-width: 991px)"
                        srcSet="
                    /-/media/project/scanners/home/promo-carousel/uhl3660_projector_sm.png?mw=991&hash=10E24B19D2DFED9FC166C01AA78A6DC9
                  "
                      />
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/uhl3660_projector_lg.png?mw=2880&hash=7F0F42577E9AEBDCC6B5C877CDA26E02"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="content-wrapper">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="content-col col-lg-6">
                          <div className="content-container no-text-box">
                            <div className="text">
                              <div>
                                <h2 className="heading-1">
                                  Take your visuals up close and personal
                                </h2>
                              </div>
                              <div className="body">
                                <p>
                                  Our new RICOH Ultra Short Throw Laser Projector brings your
                                  <nobr>dramatic visuals to life</nobr>, even from the shortest of
                                  distances.
                                </p>
                              </div>
                            </div>
                            <div className="cta-container">
                              <a
                                className="btn btn-reverse"
                                href="#"
                                disabledescription="True"
                                tabIndex={0}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="slide slick-slide"
                data-slick-index={3}
                aria-hidden="true"
                style={{
                  width: 1680,
                  position: 'relative',
                  left: '-5040px',
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                }}
                tabIndex={-1}
                role="tabpanel"
                id="slick-slide03"
                aria-describedby="slick-slide-control03"
              >
                <section className="full-width-promo-with-background-image orientation-left">
                  <a name="setting-the-standard" className="anchor" tabIndex={-1} />
                  <div className="image-container">
                    <picture>
                      <source
                        media="(max-width: 991px)"
                        srcSet="
                    /-/media/project/scanners/home/promo-carousel/hero-setting-the-standard-mobile.jpg?mw=991&hash=76E1AACEFBDE4385A771994449506254
                  "
                      />
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/hero-setting-the-standard_lg.jpg?mw=2880&hash=4EE6F92CED60154799C6908B68FD3AAB"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="content-wrapper">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="content-col col-lg-6">
                          <div className="content-container no-text-box">
                            <div className="text">
                              <div>
                                <h2 className="heading-1">Setting the standard</h2>
                              </div>
                              <div className="body">
                                <p>
                                  Customers and industry experts call Ricoh Document Scanners their
                                  solution of choice. We are proud of these accolades and committed
                                  to an ongoing standard of excellence.
                                </p>
                              </div>
                            </div>
                            <div className="cta-container">
                              <a
                                className="btn btn-reverse"
                                href="#"
                                disabledescription="True"
                                tabIndex={-1}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="slide slick-slide"
                data-slick-index={4}
                aria-hidden="true"
                style={{
                  width: 1680,
                  position: 'relative',
                  left: '-6720px',
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                }}
                tabIndex={-1}
                role="tabpanel"
                id="slick-slide04"
                aria-describedby="slick-slide-control04"
              >
                <section className="full-width-promo-with-background-image orientation-left">
                  <a name="awards" className="anchor" tabIndex={-1} />
                  <div className="image-container">
                    <picture>
                      <source
                        media="(max-width: 991px)"
                        srcSet="
                    /-/media/project/scanners/home/promo-carousel/hero-awards-mobile.jpg?mw=991&hash=9D8888BF6185ACD6D86F26008B617F13
                  "
                      />
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/hero-awards_lg.jpg?mw=2880&hash=8E5B40D288B6FA8D2E417275A8477264"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="content-wrapper">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="content-col col-lg-6">
                          <div className="content-container no-text-box">
                            <div className="text">
                              <div>
                                <h2 className="heading-1">
                                  Ricoh Wins Scanner Line of the Year Award
                                </h2>
                              </div>
                              <div className="body">
                                <p>
                                  Keypoint Intelligence, the leading market research firm in the
                                  digital imaging industry, announces that Ricoh Document Scanners
                                  wins the coveted Buyers Lab 2024 Scanner Line of the Year Award.
                                </p>
                              </div>
                            </div>
                            <div className="cta-container">
                              <a
                                href="#"
                                disabledescription="True"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                target="_blank"
                                tabIndex={-1}
                              >
                                Read Story
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="slider-controls-wrapper container">
            <div className="slider-controls">
              <button className="slider-play-pause" data-playing="true">
                <span className="sr-only">Toggle Play/Pause</span>
              </button>
              <div className="slider-dots-container">
                <ul className="slick-dots" role="tablist">
                  <li className="" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control00"
                      aria-controls="slick-slide00"
                      aria-label="1 of 5"
                      tabIndex={0}
                    >
                      1
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control01"
                      aria-controls="slick-slide01"
                      aria-label="2 of 5"
                      tabIndex={0}
                    >
                      2
                    </button>
                  </li>
                  <li role="presentation" className="slick-active">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control02"
                      aria-controls="slick-slide02"
                      aria-label="3 of 5"
                      tabIndex={0}
                      aria-selected="true"
                    >
                      3
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control03"
                      aria-controls="slick-slide03"
                      aria-label="4 of 5"
                      tabIndex={0}
                    >
                      4
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control04"
                      aria-controls="slick-slide04"
                      aria-label="5 of 5"
                      tabIndex={0}
                    >
                      5
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="card-deck standard arrow-cta items-per-row-4 orientation-left mb-0 pb-0"
          data-show-more={3}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <a name="browse-our-exceptional-productivity-solutions" className="anchor" />
                <div className="deck-header">
                  <div className="deck-header-body">
                    <h2 className="">Browse our exceptional productivity solutions</h2>
                    <p>
                      Transform your organization and workflows with our industry-leading
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center main-content">
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{e173ea96-d936-4255-aacc-397eeffc50f7}"
                data-datasource-id="{BC5EED1B-B636-4B19-9BDE-C70251B31B6D}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">fi Series Document Scanners</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-fi-series.jpg?h=1109&iar=0&mw=1200&w=1200&hash=0F4128E3678E8F22F35846AD4676E453"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">fi Series Document Scanners</h3>
                      <h4>Professional performance scanning solutions</h4>
                      <div className="card-text">
                        <p>
                          Scale productivity, streamline workflows, and save labor costs with
                          reliable, top-performing document scanners.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See fi Series Scanners
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{f42f0237-fd13-4802-9795-cac323fc4a21}"
                data-datasource-id="{92156796-2FFA-4B19-800D-2F5E0494D618}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">ScanSnap Document Scanners</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-scansnap-fixed.png?h=1109&iar=0&mw=1200&w=1200&hash=20DFEE490FE7BA1B933E6E3A7D629DA6"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">ScanSnap Document Scanners</h3>
                      <h4>Solutions for small business and personal use</h4>
                      <div className="card-text">
                        <p>
                          Manage your documents and photos with ease using our feature-rich,
                          powerful ScanSnap scanners.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See ScanSnap Scanners
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{facdcce8-32db-4157-b384-1333f3c3b972}"
                data-datasource-id="{F69E73B0-ACC0-42D2-9E7A-41B02040337D}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">Printers</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-printers.jpg?h=1109&iar=0&mw=1200&w=1200&hash=10CB2B3355282A9849DDFCC38532BEB2"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Printers</h3>
                      <h4>Ultimate speed, precision, and reliability</h4>
                      <div className="card-text">
                        <p>
                          Our laser printers deliver high-powered performance and efficiency for all
                          your printing needs.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See Printers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{abdb8bf1-f77c-4ed4-9393-156a6c4e6cf5}"
                data-datasource-id="{FF14B1A6-5203-4620-BB2E-DB7E47FCB11C}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">Projectors</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-projectors-fixed.png?h=1109&iar=0&mw=1200&w=1200&hash=96F06BA81EBA0D79C3F84DFDE6B05DD5"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Projectors</h3>
                      <h4>Awe-inspiring image quality</h4>
                      <div className="card-text">
                        <p>
                          Display bright, stunning images for any setting with our cutting-edge
                          laser light source and high quality lens technology.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See Projectors
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{84f5b730-94c9-4758-97b0-f9cd1bb351ba}"
                data-datasource-id="{65787CC8-CEB9-4C59-A437-E2FCB6C865EB}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">PaperStream Software Suite</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-pscp.jpg?h=1109&iar=0&mw=1200&w=1200&hash=D7FF1492C4E132912E7A3CB243496A0F"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">PaperStream Software Suite</h3>
                      <h4>Make your data work for you</h4>
                      <div className="card-text">
                        <p>
                          Successful businesses need actionable data, instantly. These solutions
                          help you do more, better.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See Software
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{805a031f-6b5c-493e-93cf-f369ce6eda06}"
                data-datasource-id="{6780A8B4-54B1-47A0-B38D-9215A61B0A13}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">Portable Monitors</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-portable-monitors.jpg?h=1109&iar=0&mw=1200&w=1200&hash=C31DD233D3F3D08607A225862E2E218B"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Portable Monitors</h3>
                      <h4>High-performance, lightweight touchscreen monitors</h4>
                      <div className="card-text">
                        <p>
                          Stay productive on the go with our lightweight, versatile OLED touchscreen
                          portable monitors.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See Portable Monitors
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{d9243b2e-4bf3-4fa0-8b2c-cd1777a65d61}"
                data-datasource-id="{3326840A-3D1B-44DB-88BA-37EA19C76654}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">Meeting 360</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-meeting-360.jpg?h=1109&iar=0&mw=1200&w=1200&hash=E71F6E6BFAE7C98AAADD406288198B22"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Meeting 360</h3>
                      <h4>Bring people and ideas together</h4>
                      <div className="card-text">
                        <p>
                          Discover the 3-in-1 video conferencing device that enables collaboration
                          in hybrid work environments.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a className="btn btn-reverse" href="#" disabledescription="True">
                        See Meeting 360
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-col promo-card flip-animation"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{80091e22-f2e1-4971-8da6-6cedff6cbf86}"
                data-datasource-id="{C21F2FFB-1E6E-4966-B151-EEB35EEC9D35}"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <h3 className="card-title">Keyboards</h3>
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/product-categories/card-keyboards.jpg?h=1109&iar=0&mw=1200&w=1200&hash=2185955B3B5640BB4396FBD99D2C2492"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={1109}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Keyboards</h3>
                      <h4>Unparalleled design and craftsmanship</h4>
                      <div className="card-text">
                        <p>
                          Elevate your typing experience with the compact and elegant HHKB, built
                          with premium components for smooth precision.
                        </p>
                      </div>
                    </div>
                    <div className="cta-wrapper">
                      <a
                        className="btn btn-reverse"
                        target="_blank"
                        href="#"
                        disabledescription="True"
                      >
                        See HHKB Keyboards
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="themed-container enable-flex background-color-off-white">
          <section className="promo-text-and-image staggered layout-half orientation-right pb-0">
            <div className="container">
              <div className="row">
                <div className="text-col">
                  <div className="content-container">
                    <div className="text">
                      <a name="service-programs" className="anchor" />
                      <h2 className="heading-1">Service Programs</h2>
                      <h3 className="heading-2">
                        Avoid costly downtime with premium Service Programs
                      </h3>
                      <div className="body">
                        <p>
                          Ensure that you’re getting the best service and replacement parts for your
                          products. Explore our Service Program options and see what’s right for
                          you.
                        </p>
                      </div>
                    </div>
                    <div className="cta-container">
                      <a className="btn" href="#" disabledescription="True">
                        Browse Services
                      </a>
                    </div>
                  </div>
                </div>
                <div className="image-col">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promos/promo-service-programs.jpg?h=728&iar=0&mw=1200&w=944&hash=0F0DCC9CEF633CC4005A6DBB2CD9565E"
                      className="img-fluid"
                      alt=""
                      width={944}
                      height={728}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="promo-text-and-image staggered layout-half orientation-left pb-0">
            <div className="container">
              <div className="row">
                <div className="text-col">
                  <div className="content-container">
                    <div className="text">
                      <a name="refurbished-products" className="anchor" />
                      <h2 className="heading-1">Refurbished Products</h2>
                      <h3 className="heading-2">
                        Explore products that meet our meticulous standards
                      </h3>
                      <div className="body">
                        <p>
                          Our productivity solutions are purpose-built for longevity. Each
                          refurbished product is cleaned, inspected, and repaired by trained
                          technicians.
                        </p>
                      </div>
                    </div>
                    <div className="cta-container">
                      <a className="btn" href="#" disabledescription="True">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="image-col">
                  <div className="img-container">
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promos/promo-refurbished-products.jpg?h=728&iar=0&mw=1200&w=944&hash=388B2B8308897D4D5BEE7A0BDEE24E82"
                      className="img-fluid"
                      alt=""
                      width={944}
                      height={728}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          className="card-deck resources-card arrow-cta items-per-row-3 orientation-left pb-0 theme-primary"
          data-show-more={3}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <a name="discover-the-latest" className="anchor" />
                <div className="deck-header">
                  <div className="deck-header-body">
                    <h2 className="">Discover the latest</h2>
                    <h3 className="">
                      Blogs, customer stories, upcoming events, videos, and more.
                    </h3>
                  </div>
                  <div className="deck-cta-wrapper">
                    <a className="btn btn-primary" href="#">
                      See More of the Latest
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center main-content">
              <div
                className="card-col video-card trigger-video-modal"
                data-video-id="wyyplCN0mRk"
                data-video-start={0}
                data-video-host="youtube"
                data-toggle="modal"
                data-target="#videoModal"
                id="videoModalTrigger-wyyplCN0mRk"
                role="button"
                title="Play Video: Document AI & Intelligent Document Processing with Ricoh's Industry-Leading Technology"
                aria-label="Play Video: Document AI & Intelligent Document Processing with Ricoh's Industry-Leading Technology"
                tabIndex={0}
              >
                <div className="card with-link">
                  <div className="card-img-top">
                    <div className="img-container">
                      <span className="video-container">
                        <img
                          src="https://img.youtube.com/vi/wyyplCN0mRk/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Video</h3>
                      <h4>
                        Document AI &amp; Intelligent Document Processing with Ricoh&apos;s
                        Industry-Leading Technology
                      </h4>
                    </div>
                    <div className="cta-wrapper">
                      <button
                        className="card-cta"
                        aria-label="Play Video: Document AI &amp; Intelligent Document Processing with Ricoh's Industry-Leading Technology"
                      >
                        Play Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-col">
                <div className="card with-link">
                  <a
                    href="#"
                    title="Learn More About Customer Story"
                    aria-label="Learn More About Customer Story"
                  >
                    <div className="card-img-top">
                      <div className="img-container">
                        <img
                          src="https://www.pfu-us.ricoh.com/-/media/project/scanners/customer-stories/bhgh_photo_1_720.jpg?mw=1200&hash=FC146FCC4F569E5F4BEB4826307DE1F5"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-content">
                        <h3 className="card-title">Customer Story</h3>
                        <h4>
                          How one organization spends less time on paperwork and more time on kids
                        </h4>
                      </div>
                      <div className="cta-wrapper">
                        <span className="card-cta" href="#">
                          Learn More
                          <span className="sr-only">
                            about How one organization spends less time on paperwork and more time
                            on kids
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-col">
                <div className="card with-link">
                  <a
                    href="#"
                    aria-label="Learn More About Customer Onboarding Strategy: Examples and Best Practices"
                    title="Learn More About Customer Onboarding Strategy: Examples and Best Practices"
                  >
                    <div className="card-img-top">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="https://www.pfu-us.ricoh.com/-/media/project/scanners/blog/2024/01/customer_onboarding_strategy_1440.jpg?mw=1200&hash=ADFCF31460B6E25176DFB6A37D86312C"
                          alt="A businessman and client shaking hands over a table."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-content">
                        <h3 className="card-title">Blog</h3>
                        <h4>Customer Onboarding Strategy: Examples and Best Practices</h4>
                      </div>
                      <div className="cta-wrapper">
                        <span className="card-cta" href="#">
                          Learn More
                          <span className="sr-only">
                            about Customer Onboarding Strategy: Examples and Best Practices
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="dynamic-ph multi-column container">
          <div className="row">
            <section
              className="content-block generic background-color-off-white"
              data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
              data-rendering-id="{7b8f5700-fd30-44fe-81ca-4dd50dddf4ec}"
              data-datasource-id="{D4BE5052-47BF-4F5A-81A2-90535C268120}"
              data-target=""
            >
              <div className="content-block-container">
                <div className="content-block-heading-wrapper">
                  <div className="content-block-heading-container">
                    <h3 className="">Follow us on social media</h3>
                  </div>
                </div>
                <div className="content-block-content-wrapper">
                  <div className="content-block-content-container">
                    <p>Stay up-to-date with the latest news, product announcements, and more.</p>
                    <ul className="social-icons">
                      <li>
                        <a target="_blank" href="#" title="Browse LinkedIn">
                          <span className="icon icon-linkedin">
                            <span className="sr-only">LinkedIn</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" title="Browse Facebook">
                          <span className="icon icon-facebook">
                            <span className="sr-only">Facebook</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" title="Browse YouTube">
                          <span className="icon icon-youtube">
                            <span className="sr-only">YouTube</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="content-block generic background-color-off-white"
              data-item-id="{CD2FA6D1-55A7-430B-B6D0-4F4DCC7D34F1}"
              data-rendering-id="{50638244-2310-4f6d-b5e2-65dc3fb7d560}"
              data-datasource-id="{69AE0C67-C9E7-4443-AB13-BFCD5C73F24C}"
              data-target=""
            >
              <div className="content-block-container">
                <div className="content-block-heading-wrapper">
                  <div className="content-block-heading-container">
                    <h3 className="">Our products in the news</h3>
                  </div>
                </div>
                <div className="content-block-content-wrapper">
                  <div className="content-block-content-container">
                    <p>See who has been talking about our products and what they think.</p>
                    <p>
                      <a href="#" className="btn btn-reverse">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section
          className="callout-deck background-color-off-white alignment-center mb-0 separated"
          data-show-more={3}
        >
          <div className="container">
            <a name="need-help-start-here" className="anchor" />
            <div className="deck-header">
              <div className="deck-header-body">
                <h2 className="">Need help? Start here.</h2>
                <h3 className="h3">Find installation guides, technical data, and much more.</h3>
              </div>
            </div>
            <div className="card-deck justify-content-center main-content">
              <div
                className="card-container"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{3b33211b-c4e5-4a14-af35-3b3e10eee7ec}"
                data-datasource-id="{C46E2BB8-5576-432C-B027-9857622D751A}"
              >
                <div className="card has-image with-link">
                  <div className="card-image-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/icons/icons/icon_tech-support.svg?iar=0&mw=100&hash=67FCCF8B4F9689FCDE77C1080C0C50F0"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Technical Support</h3>
                      <div className="card-text-container">
                        <p className="card-summary">
                          Technical support for al products and services.
                        </p>
                      </div>
                    </div>
                    <div className="card-link">
                      <a className="cta" href="#">
                        Technical Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-container"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{e6d295a2-75e9-46e7-8acc-087c62934918}"
                data-datasource-id="{809606FE-2B6A-46D8-917C-8FAE1081F4AE}"
              >
                <div className="card has-image with-link">
                  <div className="card-image-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/icons/icons/icon_warranties-manuals.svg?iar=0&mw=100&hash=8F95060580C4788FF5B0A4F4CD6EA9BA"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Warranties, Manuals &amp; Datasheets</h3>
                      <div className="card-text-container">
                        <p className="card-summary">Locate a product warranty or manual.</p>
                      </div>
                    </div>
                    <div className="card-link">
                      <a className="cta" href="#">
                        Warranties, Manuals &amp; Datasheets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-container"
                data-item-id="{D9CD3D3F-535D-41D0-9F0C-4434AFA09CCF}"
                data-rendering-id="{4db1b4a7-5c03-4fee-85f5-7e9c7512a47f}"
                data-datasource-id="{FC8AD935-B753-49F2-B1D7-D467DA1605F8}"
              >
                <div className="card has-image with-link">
                  <div className="card-image-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/icons/icons/icon_drivers-downloads.svg?iar=0&mw=100&hash=8C50119B1EE09E1A2AC08964004383A2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Drivers &amp; Downloads</h3>
                      <div className="card-text-container">
                        <p className="card-summary">Quickly find drivers and downloads.</p>
                      </div>
                    </div>
                    <div className="card-link">
                      <a className="cta" href="#">
                        Drivers &amp; Downloads
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="deck-footer">
              &nbsp;
              <div className="deck-cta-wrapper">
                <a className="btn btn-primary" href="#">
                  See All Support Resources
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

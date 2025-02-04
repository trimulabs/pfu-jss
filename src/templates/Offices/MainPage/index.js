/* eslint-disable react/react-in-jsx-scope */
import './styles.css';

const OfficeMain = () => {
  return (
    <main role="main" id="mainContent">
      <section
        className="promo-carousel slick-initialized slick-slider slick-dotted"
        data-autoplay="true"
        data-autoplay-speed={3000}
        data-speed={300}
      >
        <a name="office-productivity" className="anchor" />
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: '6720px' }}>
            <div
              className="slide slick-slide"
              data-slick-index={0}
              aria-hidden="true"
              style={{
                width: '1680px',
                position: 'relative',
                left: '0px',
                top: '0px',
                zIndex: 998,
                opacity: 0,
                transition: 'opacity 300ms',
              }}
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide00"
              aria-describedby="slick-slide-control00"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="naos" className="anchor" tabIndex={-1} />
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
                        <div className="content-container">
                          <div className="text">
                            <div>
                              <h2 className="heading-1">Take your visuals up close and personal</h2>
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
                            <a className="btn btn-reverse" href="#" tabIndex={-1}>
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
                width: '1680px',
                position: 'relative',
                left: '-1680px',
                top: '0px',
                zIndex: 998,
                opacity: 0,
                transition: 'opacity 300ms',
              }}
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide01"
              aria-describedby="slick-slide-control01"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="meeting-360" className="anchor" tabIndex={-1} />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/home/promo-carousel/hero-meeting-360-mobile.jpg?mw=991&hash=CEDEAEB7D3883A364D5A028A4C847327
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/110carouselslide10meeting360d.jpg?mw=2880&hash=3B7E728B7FD8B8EA8DE6684A3018DFF1"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="content-wrapper">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="content-col col-lg-6">
                        <div className="content-container">
                          <div className="text">
                            <div>
                              <h2 className="heading-1">For more engaging hybrid meetings</h2>
                            </div>
                            <div className="body">
                              <p>
                                Introducing the RICOH Meeting 360, our new 3-in-1 video conferencing
                                device that&apos;s designed to increase collaboration and
                                productivity in hybrid meetings.
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn btn-reverse" href="#" tabIndex={-1}>
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
                width: '1680px',
                position: 'relative',
                left: '-3360px',
                top: '0px',
                zIndex: 999,
                opacity: 1,
              }}
              tabIndex={0}
              role="tabpanel"
              id="slick-slide02"
              aria-describedby="slick-slide-control02"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="twice-vip-award" className="anchor" tabIndex={0} />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/home/promo-carousel/15carouselmonitorsawards-sm.jpg?mw=991&hash=985AD1604E0CD582790C45FB76549EE1
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/15carouselmonitorsawards-lg.jpg?mw=2880&hash=CC5BC991CF820DA3A5FC600706BEA4C4"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="content-wrapper">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="content-col col-lg-6">
                        <div className="content-container">
                          <div className="text">
                            <div>
                              <h2 className="heading-1">Our portable monitors win</h2>
                            </div>
                            <div className="body">
                              <p>
                                Experience high-quality design and features that make our portable
                                monitors stand out amongst our competitors.
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn btn-reverse" href="#" tabIndex={0}>
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
                width: '1680px',
                position: 'relative',
                left: '-5040px',
                top: '0px',
                zIndex: 998,
                opacity: 0,
              }}
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide03"
              aria-describedby="slick-slide-control03"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="savings-bundles" className="anchor" tabIndex={-1} />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/home/promo-carousel/hero-bundles-mobile.jpg?mw=991&hash=C847FE113DDDC3301E115BEE43A90F20
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/home/promo-carousel/hero-bundles_lg.jpg?mw=2880&hash=B89D0FD369B0D24ED741EE56D4248DBE"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="content-wrapper">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="content-col col-lg-6">
                        <div className="content-container">
                          <div className="text">
                            <div>
                              <h2 className="heading-1">
                                Save up to $312 on our
                                <nobr>2-in-1</nobr> Scan + Print bundles
                              </h2>
                            </div>
                            <div className="body">
                              <p>
                                Increase efficiency with our exclusive Scan + Print Productivity
                                bundles, which include a ScanSnap iX1600 Receipt Edition Scanner and
                                a RICOH Laser Printer.
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a
                              href="#"
                              rel="noopener noreferrer"
                              className="btn btn-reverse"
                              target="_blank"
                              tabIndex={-1}
                            >
                              Shop Now
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
              <ul className="slick-dots" style={{}} role="tablist">
                <li className role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control00"
                    aria-controls="slick-slide00"
                    aria-label="1 of 4"
                    tabIndex={0}
                  >
                    1
                  </button>
                </li>
                <li role="presentation" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control01"
                    aria-controls="slick-slide01"
                    aria-label="2 of 4"
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
                    aria-label="3 of 4"
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
                    aria-label="4 of 4"
                    tabIndex={0}
                  >
                    4
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
              <a name="browse-our-office-productivity-solutions" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2 className>Browse our office productivity solutions</h2>
                  <p>Quality products designed to optimize business performance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center main-content">
            <div
              className="card-col promo-card flip-animation"
              data-item-id="{E3CC6EE9-036C-46AE-9529-3AC1F99C3B74}"
              data-rendering-id="{eef88441-6c57-4d30-a914-bf8c8f62d0d3}"
              data-datasource-id="{59518413-1140-46E1-8BB4-7F0920459735}"
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
                    <a className="btn btn-reverse" href="#">
                      See Printers
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-col promo-card flip-animation"
              data-item-id="{E3CC6EE9-036C-46AE-9529-3AC1F99C3B74}"
              data-rendering-id="{05c9bddb-1122-4801-9d06-acfa8f74d58f}"
              data-datasource-id="{C0C0A594-62A0-4F2A-BF69-5C18D8436200}"
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
                        Display bright, stunning images for any setting with our cutting-edge laser
                        light source and high quality lens technology.
                      </p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a className="btn btn-reverse" href="#">
                      See Projectors
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-col promo-card flip-animation"
              data-item-id="{E3CC6EE9-036C-46AE-9529-3AC1F99C3B74}"
              data-rendering-id="{8cd0cca8-2f93-4122-b863-763030c2ce81}"
              data-datasource-id="{2B82B08C-308C-4E56-92CA-F7798F0D4D76}"
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
                    <a className="btn btn-reverse" href="#">
                      See Portable Monitors
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-col promo-card flip-animation"
              data-item-id="{E3CC6EE9-036C-46AE-9529-3AC1F99C3B74}"
              data-rendering-id="{26436b37-ddaa-4149-8298-68b8b1671761}"
              data-datasource-id="{973EA1E6-FC62-4C71-AFCF-3CF55CFBE3AD}"
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
                        Discover the 3-in-1 video conferencing device that enables collaboration in
                        hybrid work environments.
                      </p>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a className="btn btn-reverse" href="#">
                      See Meeting 360
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="dynamic-ph multi-column container">
        <div className="row">
          <section
            className="content-block generic background-color-off-white"
            data-item-id="{CD2FA6D1-55A7-430B-B6D0-4F4DCC7D34F1}"
            data-rendering-id="{43a906bb-5aca-4bb7-851f-f8dc021079ea}"
            data-datasource-id="{55A3A689-8887-4FB6-AACF-2F5DEEBFCC52}"
            data-target
          >
            <div className="content-block-container">
              <div className="content-block-heading-wrapper">
                <div className="content-block-heading-container">
                  <h3 className>Follow us on social media</h3>
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
            data-target
          >
            <div className="content-block-container">
              <div className="content-block-heading-wrapper">
                <div className="content-block-heading-container">
                  <h3 className>Our products in the news</h3>
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
        className="card-deck background-color-off-white resources-card arrow-cta items-per-row-fluid orientation-left mb-0 pb-0"
        data-show-more={3}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <a name="discover-the-latest" className="anchor" />
              <div className="deck-header">
                <div className="deck-header-body">
                  <h2 className>Discover the latest</h2>
                  <h3 className>Blogs, customer stories, upcoming events, videos, and more.</h3>
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
              data-video-id="BfDxP9NSGJw"
              data-video-start={0}
              data-video-host="youtube"
              data-toggle="modal"
              data-target="#videoModal"
              id="videoModalTrigger-BfDxP9NSGJw"
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
                        src="https://img.youtube.com/vi/BfDxP9NSGJw/maxresdefault.jpg"
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
                    <span className="card-cta">
                      Play Video
                      <span className="sr-only">
                        : Document AI &amp; Intelligent Document Processing with Ricoh&apos;s
                        Industry-Leading Technology
                      </span>
                    </span>
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
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/customer-stories/itoki_corp_hero_lg.jpg?mw=1200&hash=DFD4B88D94CF029F5348BDE02B2AD2BB"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Customer Story</h3>
                      <h4>
                        Furniture business enhances workplace flexibility with RICOH Portable
                        Monitors
                      </h4>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta" href="#">
                        Learn More
                        <span className="sr-only">
                          about Furniture business enhances workplace flexibility with RICOH
                          Portable Monitors
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
                  aria-label="Learn More About How to Pick the Right Office Printer for Your Business"
                  title="Learn More About How to Pick the Right Office Printer for Your Business"
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        className="img-fluid"
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/blog/2023/12/office_printer_1440.jpg?mw=1200&hash=89C0872E14DB5561833DA0E14B14F402"
                        alt="A well-dressed businessman sorts through work documents in a brightly lit office."
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Blog</h3>
                      <h4>How to Pick the Right Office Printer for Your Business</h4>
                    </div>
                    <div className="cta-wrapper">
                      <span className="card-cta" href="#">
                        Learn More
                        <span className="sr-only">
                          about How to Pick the Right Office Printer for Your Business
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
    </main>
  );
};

export default OfficeMain;

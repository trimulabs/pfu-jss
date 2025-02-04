/* eslint-disable react/react-in-jsx-scope */
import './styles.css';

const MainPage = () => {
  return (
    <main role="main" id="mainContent">
      <section
        className="promo-carousel mb-0 slick-initialized slick-slider slick-dotted"
        data-autoplay="true"
        data-autoplay-speed={6000}
        data-speed={500}
      >
        <a name="resources" className="anchor" />
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
                transition: 'opacity 500ms',
              }}
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide00"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="the-complete-guide-to-digitization" className="anchor" tabIndex={-1} />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/guide/digitization/guide_digitization_sm.jpg?mw=991&hash=264572D3ACA974D445593D211F3F98B9
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/digitization/guide_digitization_lg.jpg?mw=2880&hash=FD59D815F3D3390F26E2CE68246F41BF"
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
                              <h2 className="heading-1">The complete guide to digitization</h2>
                            </div>
                            <div className="body">
                              <p>
                                Digitization makes organizations more efficient, refining the
                                document workflows, accelerating retrieval processes and reducing
                                your total physical footprint
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn" target="_blank" href="#" tabIndex={-1}>
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
                transition: 'opacity 500ms',
              }}
              tabIndex={0}
              role="tabpanel"
              id="slick-slide01"
            >
              <section className="full-width-promo-with-background-image orientation-right">
                <a
                  name="what-is-video-conferencing-technology-and-how-does-it-work"
                  className="anchor"
                  tabIndex={0}
                />
                <div className="image-container">
                  <picture>
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/blog/2024/08/video_conferencing_technology_1440.jpg?mw=2880&hash=FAD87112AF31C595EFDC7D2B59A45F5C"
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
                                What is video conferencing technology and how does it work?
                              </h2>
                            </div>
                            <div className="body">
                              <p>
                                Learn how your video meetings get from your office to the rest of
                                the team, wherever they are in the world
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn" target="_blank" href="#" tabIndex={0}>
                              Read Blog Post
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
                zIndex: 1000,
                opacity: 1,
                transition: 'opacity 500ms',
              }}
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide02"
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a
                  name="the-el-triunfo-corporation-digitizes-its-way-to-success"
                  className="anchor"
                  tabIndex={-1}
                />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/customer-stories/el_triunfo_sm.jpg?mw=991&hash=00DD9015D2C66CCDC04FB04BA9A31B37
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/customer-stories/el_triunfo_lg.jpg?mw=2880&hash=E01B8AC7E650674D61E92B15DDE3D73B"
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
                                The El Triunfo corporation digitizes its way to success
                              </h2>
                            </div>
                            <div className="body">
                              <p>
                                Full-service Southern California accounting and consulting firm El
                                Triunfo lauds high quality technology as a touchstone for its
                                success
                              </p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn" target="_blank" href="#" tabIndex={-1}>
                              Read the Story
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
            >
              <section className="full-width-promo-with-background-image orientation-left">
                <a name="industry-briefs" className="anchor" tabIndex={-1} />
                <div className="image-container">
                  <picture>
                    <source
                      media="(max-width: 991px)"
                      srcSet="
                            /-/media/project/scanners/industry-briefs/healthcare-hospital-hero_sm.png?mw=991&hash=23C0B8266C5D96CF0BA522741EE8D8AF
                          "
                    />
                    <img
                      src="https://www.pfu-us.ricoh.com/-/media/project/scanners/industry-briefs/healthcare-hospital-hero_lg.png?mw=2880&hash=D19BA9D4EDB53A6A73FDEC3A6CFB4D3F"
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
                              <h2 className="heading-1">Industry Briefs</h2>
                            </div>
                            <div className="body">
                              <p>Provide better patient care with high-quality image scanning</p>
                            </div>
                          </div>
                          <div className="cta-container">
                            <a className="btn" target="_blank" href="#" tabIndex={-1}>
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
          </div>
        </div>
        <div className="slider-controls-wrapper container">
          <div className="slider-controls">
            <button className="slider-play-pause" data-playing="true">
              <span className="sr-only">Toggle Play/Pause</span>
            </button>
            <div className="slider-dots-container">
              <ul className="slick-dots" role="tablist">
                <li className role="tab">
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
                <li role="tab" className>
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control01"
                    aria-controls="slick-slide01"
                    aria-label="2 of 4"
                    tabIndex={0}
                    aria-selected="true"
                  >
                    2
                  </button>
                </li>
                <li role="tab" className="slick-active">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control02"
                    aria-controls="slick-slide02"
                    aria-label="3 of 4"
                    tabIndex={0}
                  >
                    3
                  </button>
                </li>
                <li role="tab">
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
      <section className="cta-blade background-color-off-white mb-0 theme-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <a name="subscribe-to-our-newsletter" className="anchor" />
              <h2>Subscribe to Our Newsletter</h2>
              <div className="content-container">
                <p>Get the latest featured resources delivered straight to your inbox.</p>
              </div>
              <div className="cta-container">
                <a href="#" className="btn btn-primary">
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-deck latest-deck background-color-off-white mb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="header-container">
                <a name="customer-stories" className="anchor" />
                <h2>Customer Stories</h2>
                <a className="cta" href="#">
                  View All Customer Stories
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card customer-stories-card with-link">
                <a
                  href="#"
                  target
                  aria-label="Learn More About El Triunfo"
                  title="Learn More About El Triunfo"
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/customer-stories/el_triunfo_card_720x480.jpg?h=480&iar=0&mw=1200&w=720&hash=227EE9E9137E797E2353AE2706737DF0"
                        className="img-fluid"
                        alt="Side view of a Hispanic woman sitting at desk with two monitors. "
                        width={720}
                        height={480}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">El Triunfo</h3>
                      <p className="card-text">
                        The El Triunfo Corporation digitizes its way to success
                      </p>
                    </div>
                    <div className="cta-wrapper">
                      <span href="#" className="cta">
                        Learn More<span className="sr-only">about El Triunfo</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card customer-stories-card with-link">
                <a
                  href="#"
                  target
                  aria-label="Learn More About Midwest Financial Institution"
                  title="Learn More About Midwest Financial Institution"
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/customer-stories/midwest-financial-institution-hero_sm.jpg?h=480&iar=0&mw=1200&w=720&hash=5A3FC88A68D095DD387AA6F06B2824A7"
                        className="img-fluid"
                        alt="Group of financial executives working around a meeting table looking at tablet. "
                        width={720}
                        height={480}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-content">
                      <h3 className="card-title">Midwest Financial Institution</h3>
                      <p className="card-text">
                        Midwest financial institution eliminates workflow logjams
                      </p>
                    </div>
                    <div className="cta-wrapper">
                      <span href="#" className="cta">
                        Learn More
                        <span className="sr-only">about Midwest Financial Institution</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-deck latest-deck guide-card-deck background-color-off-white mb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="header-container">
                <a name="guides" className="anchor" />
                <h2>Guides</h2>
                <a href="#" className="cta">
                  View All Guides <span className="sr-only">Guides</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card with-link with-summary">
                  <a
                    href="#"
                    aria-label="Learn More About How to choose a scanner"
                    title="Learn More About How to choose a scanner"
                  >
                    <div className="card-img-top">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/choose-scanner/choose-scanner_card.jpg?mw=515&w=515&hash=BCB88B02135A269A2CF7DB56E8D2E064"
                          srcSet="
                                https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/choose-scanner/choose-scanner_card.jpg?mw=290&w=290&hash=CBED41AE77D99093DD53C176CF44DB4E 290w,
                                https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/choose-scanner/choose-scanner_card.jpg?mw=515&w=515&hash=BCB88B02135A269A2CF7DB56E8D2E064 515w
                              "
                          sizes="(max-width: 768px) 515px,(max-width: 992px) 290px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-details">
                        <div className="card-details">
                          <h4 className="card-title">How to choose a scanner</h4>
                          <p className="summary">
                            Find the right scanner for your business, home office, or hobby
                          </p>
                        </div>
                      </div>
                      <div className="cta-wrapper">
                        <span className="cta">Read Guide</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card with-link with-summary">
                  <a
                    href="#"
                    aria-label="Learn More About The 11 types of scanners every pro needs to know"
                    title="Learn More About The 11 types of scanners every pro needs to know"
                  >
                    <div className="card-img-top">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/scanner-types/types-of-scanners_card.jpg?mw=515&w=515&hash=D8CDEF8EF9F4F444B72FE0D5EFC2266A"
                          srcSet="
                                https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/scanner-types/types-of-scanners_card.jpg?mw=290&w=290&hash=7DDC2BAC5106FE0D0B229A29330D88F2 290w,
                                https://www.pfu-us.ricoh.com/-/media/project/scanners/guide/scanner-types/types-of-scanners_card.jpg?mw=515&w=515&hash=D8CDEF8EF9F4F444B72FE0D5EFC2266A 515w
                              "
                          sizes="(max-width: 768px) 515px,(max-width: 992px) 290px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-details">
                        <div className="card-details">
                          <h4 className="card-title">
                            The 11 types of scanners every pro needs to know
                          </h4>
                          <p className="summary">
                            Top scanner categories and products for professionals
                          </p>
                        </div>
                      </div>
                      <div className="cta-wrapper">
                        <span className="cta">Read Guide</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-deck latest-deck background-color-white mb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="header-container">
                <h2>Industry Briefs</h2>
                <a className="cta" href="#">
                  View All Industry Briefs
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card with-link latest-solution-brief-card">
                <a
                  href="#"
                  target
                  aria-label="Read More About High quality scanners for higher education"
                  title="Read More About High quality scanners for higher education"
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/industry-briefs/solution_higher_ed_01.jpg?h=769&iar=0&mw=1200&w=1200&hash=E727263635E414AB47F2C43C864DE1EF"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={769}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-details">
                      <h3 className="card-title">High quality scanners for higher education</h3>
                      <span className="cta">
                        Read More
                        <span className="sr-only">
                          about High quality scanners for higher education
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card with-link latest-solution-brief-card">
                <a
                  href="#"
                  target
                  aria-label="Read More About Streamline and stay organized this school year with ScanSnap"
                  title="Read More About Streamline and stay organized this school year with ScanSnap"
                >
                  <div className="card-img-top">
                    <div className="img-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/industry-briefs/solution_k-12_01.jpg?h=800&iar=0&mw=1200&w=1200&hash=EDF19FE643134CFD3E33F9ACC8F770FD"
                        className="img-fluid"
                        alt=""
                        width={1200}
                        height={800}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-details">
                      <h3 className="card-title">
                        Streamline and stay organized this school year with ScanSnap
                      </h3>
                      <span className="cta">
                        Read More
                        <span className="sr-only">
                          about Streamline and stay organized this school year with ScanSnap
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
      <section className="card-deck latest-deck arrow-cta video-card-deck background-color-off-white pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="header-container">
                <a name="videos" className="anchor" />
                <h2>Videos</h2>
                <a className="cta" title="View All Videos" href="#">
                  View All
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="video-card trigger-video-modal with-link card"
                role="button"
                data-video-id="rfDEPf4elNY"
                data-video-start={0}
                data-video-host="youtube"
                data-toggle="modal"
                data-target="#videoModal"
                id="videoModalTrigger-rfDEPf4elNY"
                title="Play Video: How to Set Up Your First Scanning Job With Paperstream Capture Pro"
                tabIndex={0}
                aria-label="Play Video: How to Set Up Your First Scanning Job With Paperstream Capture Pro"
              >
                <div className="card-img-top">
                  <div className="img-container">
                    <span className="video-container">
                      <img
                        src="https://img.youtube.com/vi/rfDEPf4elNY/maxresdefault.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h4 className="card-title">
                      How to Set Up Your First Scanning Job With Paperstream Capture Pro
                    </h4>
                  </div>
                  <div className="cta-wrapper">
                    <span className="card-cta">
                      Play Video
                      <span className="sr-only">
                        : Play Video: How to Set Up Your First Scanning Job With Paperstream Capture
                        Pro
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="video-card trigger-video-modal with-link card"
                role="button"
                data-video-id="ZzqTazSTIcQ"
                data-video-start={0}
                data-video-host="youtube"
                data-toggle="modal"
                data-target="#videoModal"
                id="videoModalTrigger-ZzqTazSTIcQ"
                title="Play Video: What is Easy NX Connect?"
                tabIndex={0}
                aria-label="Play Video: What is Easy NX Connect?"
              >
                <div className="card-img-top">
                  <div className="img-container">
                    <span className="video-container">
                      <img
                        src="https://www.pfu-us.ricoh.com/-/media/project/scanners/video-thumbs/what-is-easynx-connect.jpg?h=535&w=1124&hash=B8FD45536898AB0CD4D81DB9EB7E6B9E"
                        alt=""
                        className="img-fluid"
                      />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <h4 className="card-title">What is Easy NX Connect?</h4>
                  </div>
                  <div className="cta-wrapper">
                    <span className="card-cta">
                      Play Video
                      <span className="sr-only">: Play Video: What is Easy NX Connect?</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-text-and-image layout-half orientation-left">
        <div className="container">
          <div className="row">
            <div className="text-col">
              <div className="content-container">
                <div className="text">
                  <a name="scanner-programs" className="anchor" />
                  <h2 className="heading-1">Scanner Programs</h2>
                  <div className="body">
                    It’s about more than specs. It’s about real world performance. That’s why,
                    before you buy, we let you test our award-winning scanners in your environment.
                  </div>
                </div>
                <div className="cta-container">
                  <a className="btn" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="image-col">
              <div className="img-container">
                <img
                  src="https://www.pfu-us.ricoh.com/-/media/project/scanners/campaign-landing-pages/2024/programs/programs_promo.png?h=910&iar=0&mw=1200&w=1109&hash=8251FF22D9F6086F91F5D23FBACFFDBC"
                  className="img-fluid"
                  alt=""
                  width={1109}
                  height={910}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;

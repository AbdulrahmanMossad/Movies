/* eslint-disable jsx-a11y/no-redundant-roles */
import { Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { PAGES, MOVIES } from "../Redux/Types/MoviesTypes";
import { getByUrl } from "../Redux/Actions/MoviesAction";
import { useEffect, useState } from "react";
const Navbar = ({ onFocusInput, x }) => {
  const [show, setShow] = useState("block");
  useEffect(() => {
    console.log(x);
    if (x === 1) {
      setShow("block");
    } else {
      setShow("none");
    }
  }, [x]);
  const dispatch = useDispatch();
  const searchWord = async (word) => {
    if (x === 1) {
      onFocusInput();
    }
    console.log(PAGES + `${word}`);
    try {
      if (word === "") {
        dispatch(getByUrl(MOVIES));
      } else {
        dispatch(getByUrl(PAGES + `${word}`));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: `${show}` }}>
      <div className="bg-black w-100 contain-div">
        <div>
          <div className="navBar">
            <Row className="pt-2 d-flex flex-wrap nav-row">
              <Col xs="12" sm="2" lg="2" className="text-center img-web">
                <a href="/">
                  <img className="logo" src={logo} alt="dfs" />
                </a>
              </Col>
              <Col
                xs="12"
                sm="10"
                lg="10"
                className=" d-flex align-items-center"
              >
                <div className="search  w-100">
                  <div
                    class="Search_searchContainer__pPauy"
                    data-testid="universalSearch"
                    id="universalSearch-container"
                  >
                    <span className="span-x">
                      <label
                        id="universalSearch-label"
                        for="universalSearch-input"
                      >
                        Find Movies &amp; TV
                      </label>
                    </span>
                    <div
                      class="eztygd2 eztygd1"
                      style={{ maxWidth: "100%", height: "42px" }}
                    >
                      <input
                        aria-activedescendant=""
                        aria-autocomplete="list"
                        aria-controls="universalSearch-menu"
                        aria-expanded="false"
                        aria-labelledby="universalSearch-label"
                        autocomplete="off"
                        id="universalSearch-input"
                        role="combobox"
                        autocapitalize="none"
                        autocorrect="off"
                        placeholder="Find Movies &amp; TV"
                        className="eztygd4"
                        type="search"
                        onChange={(e) => searchWord(e.target.value)}
                        onFocus={x === 1 ? onFocusInput : null}
                      ></input>

                      <div class="eztygd5">
                        <button
                          class="_1v4h9jl0 eztygd6 tvbry60"
                          role="button"
                          tabindex="-1"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            class="rkbrtb0 rkbrtb1 rkbrtb3 rkbrtbc"
                            fill="currentColor"
                            height="48"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.46448 37.4355L10.5645 39.5355L24 26.0999L37.4356 39.5355L39.5356 37.4355L26.1 23.9999L39.5356 10.5644L37.4356 8.46439L24 21.8999L10.5645 8.46438L8.46448 10.5644L21.9 23.9999L8.46448 37.4355Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        <button
                          class="_1v4h9jl0 eztygd7 tvbry60"
                          role="button"
                          tabindex="-1"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            class="rkbrtb0 rkbrtb1 rkbrtb3 rkbrtbc"
                            fill="currentColor"
                            height="48"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M45.5 43.3788L34.1718 32.0507C36.8939 28.7827 38.2513 24.5911 37.9616 20.3479C37.672 16.1046 35.7575 12.1364 32.6166 9.26865C29.4757 6.40093 25.35 4.85455 21.098 4.95117C16.846 5.04779 12.7948 6.77999 9.78742 9.78742C6.77999 12.7948 5.04779 16.846 4.95117 21.098C4.85455 25.35 6.40093 29.4757 9.26865 32.6166C12.1364 35.7575 16.1046 37.672 20.3479 37.9616C24.5911 38.2513 28.7827 36.8939 32.0507 34.1718L43.3788 45.5L45.5 43.3788ZM7.99999 21.5C7.99999 18.8299 8.79175 16.2199 10.2751 13.9998C11.7585 11.7797 13.867 10.0494 16.3338 9.02762C18.8006 8.00583 21.515 7.73849 24.1337 8.25939C26.7525 8.78029 29.1579 10.066 31.0459 11.954C32.9339 13.8421 34.2197 16.2475 34.7406 18.8663C35.2615 21.485 34.9941 24.1994 33.9724 26.6662C32.9506 29.133 31.2202 31.2414 29.0002 32.7248C26.7801 34.2082 24.17 35 21.5 35C17.9208 34.996 14.4893 33.5724 11.9584 31.0415C9.42755 28.5107 8.00396 25.0792 7.99999 21.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      id="universalSearch-menu"
                      role="listbox"
                      aria-labelledby="universalSearch-label"
                    ></div>
                  </div>
                  {/* <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                onChange={(e) => searchWord(e.target.value)}
              /> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <section className="Section_section__Is2CP Section_isCollapsed__e2tJj Section_dim__A7_XK">
            <div className="_1h4p3k00 _1v25wbq8 _1v25wbq1o _1v25wbqk _1v25wbq1g _1v25wbq1c _1v25wbq14 _1v25wbq30 _1v25wbq2x _1v25wbq28 _1v25wbq68  ">
              <div className="row x  align-self-center text-start signUp">
                <div className="col-sm-7 col-md-7 col-lg-7 text-danger  "></div>
                <div className="col-sm-5 col-md-5 col-lg-5 text-danger ">
                  <p className="y">
                    With Plex you can watch over 20,000 free movies and shows,
                    plus Live TV on almost any device. What are you waiting for
                    ?!s
                  </p>
                  <button
                    role="button"
                    type="button"
                    className="_1v4h9jl0 _76v8d62 _76v8d61 _76v8d68 tvbry60 _76v8d6f _76v8d66 _1v25wbq1g _1v25wbq1c hello"
                  >
                    <span
                      title="Sign Up"
                      className="ineka90 ineka9h ineka9d ineka9r ineka9n _1v25wbq1g _1v25wbq1c _1v25wbqk8"
                    >
                      Sign Up
                    </span>
                  </button>
                </div>
              </div>
              <div className="Hero_hero__y7_Db Hero_masked__qtNjV Hero_duo__PQKNd ">
                <div className="Hero_videoArtwork__ZTjHx Hero_artwork__Dtf2E">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://website-static.plex.tv/videos/home_hero_background_2023.mp4"
                  ></video>
                </div>
                <div className="Hero_fallbackArtwork__gq_wT Hero_artwork__Dtf2E">
                  <img
                    alt=""
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="img-Header"
                    sizes="(max-width: 1920px) 100vw, (min-width: 1921px) 1920px"
                    srcSet="https://images.plex.tv/photo?size=medium-360&amp;scale=2&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg 720w, https://images.plex.tv/photo?size=large-480&amp;scale=2&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg 960w, https://images.plex.tv/photo?size=large-1280&amp;scale=1&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg 1280w, https://images.plex.tv/photo?size=large-720&amp;scale=2&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg 1440w, https://images.plex.tv/photo?size=large-1920&amp;scale=1&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg 1920w"
                    src="https://images.plex.tv/photo?size=large-1920&amp;scale=1&amp;url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fuo4wPlubpUwjlLm39PF8BxXCqLm.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

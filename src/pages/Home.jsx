import slider1 from "../images/slide-1.jpg";
import abouticon from "../images/about-icons-1.svg";
import slider2 from "../images/slider-2.jpg";
import adbanner1 from "../images/ad-banner-1.jpg";
import adbanner2 from "../images/ad-banner-2.jpg";
import adbanner3 from "../images/ad-banner-3.jpg";
import attaricedal from "../images/atta-rice-dal.png";
import petcare from "../images/pet-care.png";
import cleaningessentials from "../images/cleaning-essentials.png";
import babycare from "../images/baby-care.png";
import chickenmeatfish from "../images/chicken-meat-fish.png";
import colddrinksjuices from "../images/cold-drinks-juices.png";
import teacoffeedrinks from "../images/tea-coffee-drinks.png";
import instantfood from "../images/instant-food.png";
import bakerybiscuits from "../images/bakery-biscuits.png";
import snackmunchies from "../images/snack-munchies.png";
import fruitsvegetables from "../images/fruits-vegetables.png";
import dairybreadeggs from "../images/dairy-bread-eggs.png";
 
 
import clock from "../images/clock.svg";
 
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";
 
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductItem from "../ProductList/ProductItem";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Slide, Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
// import { PulseLoader } from 'react-spinners';
import { MagnifyingGlass } from "react-loader-spinner";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
            <>
              <div className="scroll-to-top">
                <button
                  onClick={scrollToTop}
                  className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
                >
                  ↑
                </button>
              </div>
              <section className="hero-section">
                <div className="container mt-8">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          style={{
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                            <span className="badge text-bg-warning">
                              Opening Sale Discount 50%
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              SuperMarket Daily <br /> Fresh Grocery
                            </h2>
                            <p className="lead">
                              Introduced a new model for online grocery shopping
                              and convenient home delivery.
                            </p>
                            <Link to="#!" className="btn btn-dark mt-3">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div
                          style={{
                            background: `url(${slider2}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                            <span className="badge text-bg-warning">
                              Free Shipping - orders over $100
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              Free Shipping on <br /> orders over{" "}
                              <span className="text-primary">$100</span>
                            </h2>
                            <p className="lead">
                              Free Shipping to First-Time Customers Only, After
                              promotions and discounts are applied.
                            </p>
                            <Link to="#!" className="btn btn-dark mt-3">
                              Shop Now{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="carousel-control-prev"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </Link>
                    <Link
                      className="carousel-control-next"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </Link>
                  </div>
                </div>
              </section>
            </>
            <>
              <section className="mt-8">
                {/* contianer */}
                <div className="container ">
                  <div className="row">
                    {/* col */}
                    <Slide direction="down">
                      <div className="col-12">
                        {/* cta */}
                        <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 rounded-3 text-center text-lg-start">
                          {/* img */}
                          <div className="d-lg-flex align-items-center">
                            <img
                              src={abouticon}
                              alt="about-icon"
                              className="img-fluid"
                            />
                            {/* text */}
                            <div className="ms-lg-4">
                              <h1 className="fs-2 mb-1">
                                Welcome to FreshCart
                              </h1>
                              <span>
                                Download the app get free food &amp;{" "}
                                <span className="text-primary">$30</span> off on
                                your first order.
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 mt-lg-0">
                            {/* btn */}
                            <Link to="#" className="btn btn-dark">
                              Download FreshCart App
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </section>
            </>
            <>
              {/* section */}
              <section className="mt-8">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 fade-in-left">
                      <Slide direction="left">
                        <div className=" banner mb-3">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner1}
                              alt="ad-banner"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              <h3 className="mb-0 fw-bold">
                                10% cashback on <br />
                                personal care{" "}
                              </h3>
                              <div className="mt-4 mb-5 fs-5">
                                <p className="mb-0">Max cashback: $12</p>
                                <span>
                                  Code:{" "}
                                  <span className="fw-bold text-dark">
                                    CARE12
                                  </span>
                                </span>
                              </div>
                              <Link to="#" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                            {/* Banner Content */}
                          </div>
                        </div>
                      </Slide>
                    </div>

                    <div className="col-lg-4 col-md-6  col-12 slide-in-top">
                      <Zoom>
                        <div className="banner mb-3 ">
                          {/* Banner Content */}
                          <div className="position-relative">
                            {/* Banner Image */}
                            <img
                              src={adbanner2}
                              alt="ad-banner-2"
                              className="img-fluid rounded-3 w-100"
                            />
                            <div className="banner-text">
                              {/* Banner Content */}
                              <h3 className=" fw-bold mb-2">
                                Say yes to <br />
                                season’s fresh{" "}
                              </h3>
                              <p className="fs-5">
                                Refresh your day <br />
                                the fruity way
                              </p>
                              <Link to="#" className="btn btn-dark mt-2">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-lg-4 col-12 fade-in-left ">
                      <Slide direction="right">
                        <div className="banner mb-3">
                          <div className="banner-img">
                            {/* Banner Image */}
                            <img
                              src={adbanner3}
                              alt="ad-banner-3"
                              className="img-fluid rounded-3 w-100"
                            />
                            {/* Banner Content */}
                            <div className="banner-text">
                              <h3 className="fs-2 fw-bold lh-1 mb-2">
                                When in doubt,
                                <br />
                                eat ice cream{" "}
                              </h3>
                              <p className="fs-5">
                                Enjoy a scoop of
                                <br />
                                summer today
                              </p>
                              <Link to="#" className="btn btn-dark">
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
              {/* section category */}
              <section className="my-lg-14 my-8">
                <div className="container ">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-6">
                        {/* heading    */}
                        <div className="section-head text-center mt-8">
                          <h3
                            className="h3style"
                            data-title="Shop Popular Categories"
                          >
                            Shop Popular Categories
                          </h3>
                          <div className="wt-separator bg-primarys"></div>
                          <div className="wt-separator2 bg-primarys"></div>
                          {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={dairybreadeggs}
                                alt="dairy-bread-eggs"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Dairy, Bread &amp; Eggs
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={fruitsvegetables}
                                alt="fruits-vegetables"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            <div className="mt-4">
                              {/* text */}
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Fruits &amp; Vegetables
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={snackmunchies}
                                alt="snack-munchies"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Snack &amp; Munchies
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={bakerybiscuits}
                                alt="bakery-biscuits"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Bakery &amp; Biscuits
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={instantfood}
                                alt="instant-food"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Instant Food
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={teacoffeedrinks}
                                alt="tea-coffee-drinks"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Tea, Coffee &amp; Drinks
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={colddrinksjuices}
                                alt="cold-drinks-juices"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Cold Drinks &amp; Juices
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={chickenmeatfish}
                                alt="chicken-meat-fish"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Chicken, Meat &amp; Fish
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        {/* text */}
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={babycare}
                                alt="baby-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Baby Care
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={cleaningessentials}
                                alt="cleaning-essentials"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* img */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Cleaning Essentials
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={petcare}
                                alt="pet-care"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                {" "}
                                <Link to="#" className="text-inherit">
                                  Pet Care
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                      {/* col */}
                      <div className="col-lg-2 col-md-4 col-6 fade-zoom">
                        <Zoom>
                          <div className="text-center mb-10">
                            {/* img */}
                            <Link to="#">
                              <img
                                src={attaricedal}
                                alt="atta-rice-dal"
                                className="card-image rounded-circle"
                              />
                            </Link>
                            {/* text */}
                            <div className="mt-4">
                              <h5 className="fs-6 mb-0">
                                <Link to="#" className="text-inherit">
                                  Atta, Rice &amp; Dal
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
          
            </>
            <>
              <ProductItem />
            </>
            <>
      
            </>
            <>
        
            </>
            <>
              <section className="my-lg-14 my-8">
                <div className="container" style={{ marginTop: 50 }}>
                  <div
                    className="row justify-content-center  g-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-md-3 col-sm-6 fade-zoom ">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={refresh} alt="refresh" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Easy Returns</h3>
                              <p>
                                Not satisfied with a product? Return it at the
                                doorstep &amp; get a refund within hours. No
                                questions asked
                                <Link to="#!">policy</Link>.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={package1} alt="package" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Wide Assortment</h3>
                              <p>
                                Choose from 5000+ products across food, personal
                                care, household, bakery, veg and non-veg &amp;
                                other categories.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                 
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={clock} alt="clock" />
                              </div>
                            </div>
                            <div className="icon-content">
                              {/* <h4 className="wt-tilte">Reports</h4> */}
                              <h3 className="h5 mb-3">10 minute grocery now</h3>
                              <p>
                                Get your order delivered to your doorstep at the
                                earliest from FreshCart pickup
                                <p> stores near you.</p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
          
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

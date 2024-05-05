import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience__img.jpg";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../Component/Featured-tour/FeaturedTourList";
import Testmonial from "../Component/Testmonial/Testmonial";
import Newsletter from "../shared/Newsletter";
import SeniorAdventureSection from "../Component/SeniorAdventureSections/SeniorAdventureSection";
import help from '../Component/help'


const Home = () => {
  return (
    <>
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Explore, Plan, Wander,  Amble."} />
                </div>
                <h2>
                  Your Personalized Passport to Perfect Days: <br />
                  <span className="highlight">Travel Simplified!</span>
                </h2>
                <p>
                  Amble is a cutting-edge travel activity planner poised to
                  revolutionize the way travelers explore new destinations.
                  Leveraging state-of-the-art generative AI technology, this
                  tool crafts personalized day itineraries tailored to each
                  user's unique preferences, interests, and
                  budgetary constraints.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero section end */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"WHAT WE SERVE"} />
            </Col>
          </Row>
          <Row>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Events</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* featured section end */}
      {/* Tailored support for senior adventurers section start */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Tailored Support for Senior Adventurers"} />
            </Col>
            <Col>
              <SeniorAdventureSection />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Tailored support for senior adventurers section end */}

      {/* experience section start */}
      <section className="bordered-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"EXPERIENCE"} />
                <h3>
                  Let our expertise create a memorable journey designed uniquely
                  for you.
                </h3>
                <p>
                  Embark on a journey tailored exclusively for you, meticulously
                  designed by our expert team to create lasting memories.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}

      {/* testimonial section start */}
      <section className="bordered-section">
        <Container>
          <Col lg="12">
            <Subtitle Subtitle={"SUPPORTERS ADMIRE"} />
            <h2 className="testimonial__title">
              Here's what our users have to say about their experience.{" "}
            </h2>
          </Col>
          <Col lg="12">
            <Testmonial />
          </Col>
        </Container>
      </section>
      {/* testimonial section end */}
      <Newsletter />

      {/* Floating Help Button */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999" }}>
          <button style={{ padding: "10px 20px", borderRadius: "10%", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>Help</button>
        <Link></Link>
       
      </div>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
import route from "./../routes/route.json";

const Home = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>Pallavi Wankhade</h1>
          <h2>I am a Fullstack Developer</h2>
          <Link to={route.ABOUT} className="btn-about">
            About Me
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home;

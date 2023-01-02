import "./HeroStyles.css";
import logo from "./assets/mainhero.jpg";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <>
      <div className="hero">
        <img alt="hero1img" src={logo}></img>
      </div>
      <div className="hello-text">
        <h1>I am Akram Ramoul , Welcome to my Homepage</h1>

        <Link to="#foot" className="show" smooth>
          Learn More
        </Link>
      </div>
    </>
  );
}

export default Home;

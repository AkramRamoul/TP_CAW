import "./bottompagestyle.css";

function Footer() {
  return (
    <div className="footer" id="foot">
      <div className="hello">
        <div>
          <h1>Hello</h1>
          <p>I am Akram Ramoul , Welcome to my Homepage</p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/killmeplz122/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a
            href="https://www.twitter.com/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a
            href="https://github.com/AkramRamoul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>

      <div className="socials">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

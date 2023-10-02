export default function Contact() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-muted">&copy; 2023 esbev</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a href="https://www.linkedin.com/in/esbev/">
            <img 
              className="contact-img" 
              src="https://ik.imagekit.io/z2zvp5n2o/linkedin.png?updatedAt=1695683630002">
            </img>
          </a>
        </li>
        <li className="ms-3">
          <a href="https://www.github.com/esbev">
            <img 
              className="contact-img2" 
              src="https://ik.imagekit.io/z2zvp5n2o/github.png?updatedAt=1695683629615">
            </img>
          </a>
        </li>
        <li className="ms-3">
          <a href="https://twitter.com/esbev716">
            <img 
              className="contact-img" 
              src="https://ik.imagekit.io/z2zvp5n2o/twitter.png?updatedAt=1695683815520">
            </img>
          </a>
        </li>
        </ul>
      </footer>
    </div>
  );
}
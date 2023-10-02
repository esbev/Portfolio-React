import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>
            <label className='custom-text'>About</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
            className={currentPage === '/Projects' ? 'nav-link-active' : 'nav-link'}>
            <label className='custom-text'>Projects</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}>
            <label><a>Resume</a></label>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}
          >
            <label className='custom-text'>Contact</label>
          </Link>
        </li>
      </ul>
        <div className="top-decor nav">
          <Link
            to="/Secret">
            <img src='https://ik.imagekit.io/z2zvp5n2o/esbev.jpg?updatedAt=1695683629316'></img>
          </Link>
        </div>
    </div>
  );
}

export default NavTabs;

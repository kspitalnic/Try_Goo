import { Link } from 'react-router-dom';

const TopNav = () => (
  <div className="nav bg-light d-flex justify-content-between">
    <Link className="nav-Link" to="/"> Home  </Link>
    <Link className="nav-Link" to="/login"> Login </Link>
    <Link className="nav-Link" to="/register"> Register </Link>
  </div>
)

export default TopNav;
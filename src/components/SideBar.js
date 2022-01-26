import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import DashBoardContext from "../utils/DashBoardContext"
import styles from "../style/SideBarStyle.css"

function SideBar() {
  const { logout } = useContext(DashBoardContext)
  return (
    <div class="nav-side-menu">
      <div class="brand">Admin</div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

      <div class="menu-list">
        <ul id="menu-content" class="menu-content collapse out">
          <li>
            <a href="#">Dashboard</a>
          </li>

          <li data-toggle="collapse" data-target="#products" class="collapsed active">
            <Link to="/users">
              <li>Users</li>
            </Link>{" "}
          </li>

          <li data-toggle="collapse" data-target="#service" class="collapsed">
            <Link to="/posts">
              <li>Posts</li>
            </Link>
          </li>

          <li data-toggle="collapse" data-target="#new" class="collapsed">
            <Link to="/tags">
              <li>Tags</li>
            </Link>{" "}
          </li>

          {localStorage.token ? (
            <div style={{ textAlign: "center", marginRight: 40 }}>
              <Link to="/login" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Link>
            </div>
          ) : (
            <li>
              <div style={{ textAlign: "center", marginRight: 40 }}>
                <Link to="/login">Login</Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default SideBar

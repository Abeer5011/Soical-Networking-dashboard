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

    /* <aside
        style={{
          backgroundColor: "#14213d",
          display: "flex",
          flexDirection: "column",
          height: 500,
          width: 200,
          marginTop: 50,
          position: "fixed",
        }}
      >
        <div style={{ backgroundColor: "#1d3557" }}>
          <h4 style={{ textAlign: "center", marginRight: 40, color: "white" }}>DashBoard</h4>
        </div>

        <ul style={{ fontSize: 20, listStyleType: "none", marginLeft: 20, marginTop: 100 }}>
          <Link to="/users" style={{ textDecoration: "none", color: "white" }}>
            <li>Users</li>
          </Link>
          <Link to="/posts" style={{ textDecoration: "none", color: "white" }}>
            <li>Posts</li>
          </Link>
          <Link to="/tags" style={{ textDecoration: "none", color: "white" }}>
            <li>Tags</li>
          </Link>
        </ul>
        {localStorage.token ? (
          <div style={{ textAlign: "center", marginRight: 40 }}>
            <Link to="/login" style={{ textDecoration: "none", color: "white" }} onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginRight: 40 }}>
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </div>
        )}
      </aside>  */
  )
}

export default SideBar

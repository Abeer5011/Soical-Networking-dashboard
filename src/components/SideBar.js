import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import DashBoardContext from "../utils/DashBoardContext"

function SideBar() {
  const { logout } = useContext(DashBoardContext)
  return (
    <>
      <aside
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
      </aside>
    </>
  )
}

export default SideBar

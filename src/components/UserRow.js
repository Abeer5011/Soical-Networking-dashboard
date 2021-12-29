import { faEye, faUserMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"

function UserRow(props) {
  const { user } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <img src={user.avatar} class="rounded-circle" style={{ height: "100px", width: "50%" }} />
      </td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>
        <Button variant="none" className="me-2" onClick={() => setViewShow(true)}>
          <FontAwesomeIcon icon={faEye} />
        </Button>

        <Button variant="none" onClick={() => setDeleteShow(true)}>
          <FontAwesomeIcon icon={faUserMinus} />
        </Button>
      </td>
      <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
      <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userId={user._id} />
    </tr>
  )
}

export default UserRow

import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button } from "react-bootstrap"
import TagDeleteModal from "./TagDeleteModal"
import TagsEditModal from "./TagsEditModal"
import TagViewModal from "./TagViewModal"

function TagRow(props) {
  const { interest } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{interest._id}</td>
      <td>{interest.interest}</td>

      <td>
        <img src={interest.photo} style={{ height: "100px", width: "50%", objectFit: "contain" }} />
      </td>

      <td>
        <Button variant="none" className="me-2" onClick={() => setViewShow(true)}>
          <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button variant="none" className="me-2" onClick={() => setEditShow(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="none" onClick={() => setDeleteShow(true)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
      <TagViewModal show={viewShow} setShow={setViewShow} interest={interest} />
      <TagDeleteModal show={deleteShow} setShow={setDeleteShow} interestId={interest._id} />
      <TagsEditModal show={editShow} setShow={setEditShow} interest={interest} interestId={interest._id} />
    </tr>
  )
}

export default TagRow

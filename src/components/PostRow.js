import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button } from "react-bootstrap"
import PostDeleteModal from "./PostDeleteModal"
import PostViewModal from "./PostViewModal"

function PostRow(props) {
  const { post } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{post._id}</td>
      <td>{post.caption}</td>

      <td>
        <img src={post.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{post.favorites.length}</td>
      <td>
        <Button variant="none" className="me-2" onClick={() => setViewShow(true)}>
          <FontAwesomeIcon icon={faEye} />
        </Button>

        <Button variant="none" onClick={() => setDeleteShow(true)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
      <PostViewModal show={viewShow} setShow={setViewShow} post={post} />
      <PostDeleteModal show={deleteShow} setShow={setDeleteShow} postId={post._id} />
    </tr>
  )
}

export default PostRow

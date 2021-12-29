import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import DashBoardContext from "../utils/DashBoardContext"

function PostDeleteModal(props) {
  const { postId, show, setShow } = props
  const { deletePost } = useContext(DashBoardContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Post ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deletePost(postId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostDeleteModal

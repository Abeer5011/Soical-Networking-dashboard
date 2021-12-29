import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import DashBoardContext from "../utils/DashBoardContext"
function TagDeleteModal(props) {
  const { interestId, show, setShow } = props
  const { deleteTag } = useContext(DashBoardContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Tag ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteTag(interestId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TagDeleteModal

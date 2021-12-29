import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import DashBoardContext from "../utils/DashBoardContext"

function UserDeleteModal(props) {
  const { userId, show, setShow } = props
  const { deleteUser } = useContext(DashBoardContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this User ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteUser(userId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserDeleteModal

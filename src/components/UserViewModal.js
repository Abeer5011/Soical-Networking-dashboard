import { Button, ListGroup, Modal } from "react-bootstrap"

function UserViewModal(props) {
  const { show, setShow, user } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>firstName:</strong> {user.firstName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>email:</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>avatar:</strong>{" "}
              <img src={user.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>gender:</strong> {user.gender}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserViewModal

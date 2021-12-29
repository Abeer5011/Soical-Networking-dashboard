import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ListGroup, Modal } from "react-bootstrap"

function TagViewModal(props) {
  const { interest, show, setShow } = props
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Tag:</strong> {interest.interest}
            </ListGroup.Item>
            {/*      
        <ListGroup.Item>
          <strong>photo:</strong>{" "}
          <img src={user.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
        </ListGroup.Item> */}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="none" onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TagViewModal

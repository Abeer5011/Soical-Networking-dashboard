import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import DashBoardContext from "../utils/DashBoardContext"

function AddTag(props) {
  const { show, setShow } = props
  const { addTag } = useContext(DashBoardContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addTag}>
        <Modal.Header closeButton>
          <Modal.Title>Add Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Tag
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="interest" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Done
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddTag

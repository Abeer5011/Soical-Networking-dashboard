import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import DashBoardContext from "../utils/DashBoardContext"

function TagsEditModal(props) {
  const { show, setShow, interest } = props
  const { editTag } = useContext(DashBoardContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => editTag(e, interest._id)}>
          <Modal.Header closeButton>
            <Modal.Title>edit tag</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Tag
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="interest" defaultValue={interest.interest} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                photo
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="photo" defaultValue={interest.photo} />
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
    </>
  )
}

export default TagsEditModal

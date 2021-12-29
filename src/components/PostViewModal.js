import { Button, ListGroup, Modal } from "react-bootstrap"

function PostViewModal(props) {
  const { post, show, setShow } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>caption:</strong> {post.caption}
            </ListGroup.Item>
            <ListGroup.Item>{/* <strong>Owner:</strong> {post.owner.firstName} */}</ListGroup.Item>
            <ListGroup.Item>
              <strong>photo:</strong>{" "}
              <img src={post.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>likes:</strong> {post.favorites.length}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>tags:</strong>
              <ListGroup>
                {post.tags.map(tag => (
                  <ListGroup.Item>{tag.tag}</ListGroup.Item>
                ))}
              </ListGroup>
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

export default PostViewModal

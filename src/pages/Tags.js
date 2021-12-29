import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import AddTag from "../components/AddTag"
import TagRow from "../components/TagRow"
import DashBoardContext from "../utils/DashBoardContext"

function Tags() {
  const { interests } = useContext(DashBoardContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          add
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Tags</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {interests.map(interest => (
            <TagRow key={interest._id} interest={interest} />
          ))}
        </tbody>
      </Table>
      <AddTag show={show} setShow={setShow} />
    </>
  )
}

export default Tags

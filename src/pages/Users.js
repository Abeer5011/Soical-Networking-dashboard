import { useContext } from "react"
import { Table } from "react-bootstrap"
import UserRow from "../components/UserRow"
import DashBoardContext from "../utils/DashBoardContext"

function Users() {
  const { users } = useContext(DashBoardContext)
  return (
    <>
      {" "}
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <Table bordered hover style={{ tableLayout: "fixed", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>first-Name</th>
            <th style={{ width: "18%" }}>last-Name</th>
            <th style={{ width: "18%" }}>avatar</th>
            <th style={{ width: "9%" }}>gender</th>
            <th style={{ width: "13%" }}>email</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Users

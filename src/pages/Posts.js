import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import PostRow from "../components/PostRow"
import DashBoardContext from "../utils/DashBoardContext"

function Posts() {
  const { posts } = useContext(DashBoardContext)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Posts</h1>

      <Table bordered hover style={{ tableLayout: "fixed", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Caption</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "9%" }}>Likes</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <PostRow key={post._id} post={post} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Posts

import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import SideBar from "./components/SideBar"
import Login from "./pages/Login"
import Posts from "./pages/Posts"
import Tags from "./pages/Tags"
import Users from "./pages/Users"
import DashBoardContext from "./utils/DashBoardContext"

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [interests, setTags] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getPosts()
    getUsers()
    getTags()
  }, [])
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const loginBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login/admin", loginBody)

      const token = response.data
      localStorage.token = token
      toast.success("login success")
      navigate("/posts")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts")
      setPosts(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/users")
      setUsers(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getTags = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/interests")
      setTags(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addTag = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const tagBody = {
        interest: form.elements.interest.value,
        photo: form.elements.photo.value,
      }

      await axios.post("http://localhost:5000/api/interests", tagBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getTags()
      toast.success("add tag success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deletePost = async postId => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getPosts()
      toast.success("delete post success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteTag = async tagId => {
    try {
      await axios.delete(`http://localhost:5000/api/interests/${tagId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getTags()
      toast.success("delete tag success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editTag = async (e, interestId) => {
    e.preventDefault()
    try {
      const form = e.target
      const tagBody = {
        interest: form.elements.interest.value,
        photo: form.elements.photo.value,
      }

      await axios.put(`http://localhost:5000/api/interests/${interestId}`, tagBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getTags()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/user/${userId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })

      getUsers()
      toast.success("delete user success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
  }

  const store = { login, posts, users, interests, addTag, deletePost, deleteTag, deleteUser, logout, editTag }
  return (
    <DashBoardContext.Provider value={store}>
      <SideBar />

      <Container style={{ width: 900, marginLeft: 350 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={localStorage.token ? <Posts /> : <Navigate to="/login" />} />
          <Route path="/users" element={localStorage.token ? <Users /> : <Navigate to="/login" />} />
          <Route path="/tags" element={localStorage.token ? <Tags /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
      <ToastContainer />
    </DashBoardContext.Provider>
  )
}

export default App

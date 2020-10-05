import React, { useEffect, useState } from "react"
import { Box, Stack } from "@rent_avail/layout"
import { Link, useHistory, useLocation } from "react-router-dom"
import { Button } from "@rent_avail/controls"

import { destroySession } from "../../api/sessions"
import { getMe } from "../../api/users"

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()
  const location = useLocation()

  const logout = async () => {
    await destroySession()
    history.push("/")
  }

  const fetchMe = async () => {
    const data = await getMe()
    if (data.error) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }

  useEffect(() => {
    fetchMe()
  }, [location])

  return (
    <Stack
      bg="blue_500"
      color="blue_100"
      direction={["column", "row"]}
      spacing="0"
      alignItems="center"
    >
      <Box p="2rem">
        <Link to="/">Home</Link>
      </Box>
      {!loggedIn ? (
        <>
          <Box p="2rem">
            <Link to="/login">Login</Link>
          </Box>
          <Box p="2rem">
            <Link to="/signup">Signup</Link>
          </Box>
        </>
      ) : (
        <>
          <Box p="2rem">
            <Link to="/users">Users</Link>
          </Box>
          <Box p="2rem">
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </Box>
        </>
      )}
    </Stack>
  )
}

export default Header

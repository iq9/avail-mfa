import Home from "./pages/Home"
import Login from "./pages/Login"
import Pin from "./pages/Pin"
import Signup from "./pages/Signup"
import Users from "./pages/Users"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/pin",
    component: Pin,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/users",
    component: Users,
  },
]

export default routes

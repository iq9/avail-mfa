import React from "react"
import { ThemeProvider } from "styled-components"
import { Base, theme } from "@rent_avail/base"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/header/Header"
import routes from "./routes"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Base />
      <Router>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

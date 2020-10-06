import React from "react"
import { Container } from "@rent_avail/layout"
import PinForm from "../components/pin/Form"

const Pin = (props) => {
  // let creds = props

  // if (
  //   props !== undefined &&
  //   props.location !== undefined &&
  //   props.location.props !== undefined
  // ) {
  //   // eslint-disable-next-line react/prop-types
  //   creds = props.location.props.creds
  // }

  // console.log("pages pin.js")
  // console.log(props)

  return (
    <Container pt={4}>
      <PinForm creds={props} />
    </Container>
  )
}

export default Pin

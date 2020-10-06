import React from "react"
import { useForm } from "react-hook-form"
import { Stack } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import Input from "@rent_avail/input"
import { useHistory } from "react-router-dom"
import { createSession } from "../../api/sessions"

const PinForm = (props) => {
  const history = useHistory()
  const { handleSubmit, register, errors, setError } = useForm()

  const onSubmit = async (values) => {
    if (values.pin === "1111") {
      // Hardcoded for now ^ per spec.
      try {
        const data = await createSession(props.creds.location.creds)

        if (data && data.error) {
          setError("password", {
            type: "manual",
            message: data.error,
          })
        } else {
          history.push("/users")
        }
      } catch (err) {
        console.error("Error:", err)
      }
    } else {
      setError("pin", {
        type: "manual",
        message: "Invalid PIN",
      })
    }
  }

  function onCancel(e) {
    e.preventDefault();
    history.push("/login")
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text pt={2}>
          Please enter the 1-time PIN we texted or emailed to you.
        </Text>
        {errors.pin && (
          <Text color="red" pt={2}>
            {errors.pin.message}
          </Text>
        )}

        <Input mt={2} label="PIN" name="pin" ref={register()} />

        <Button mt={2} mr={2} type="submit">
          Submit
        </Button>
        <Button mt={2} variant="danger" onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </Stack>
  )
}

export default PinForm

import React from "react"
import { useForm } from "react-hook-form"
import { Stack } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import Input from "@rent_avail/input"
import { useHistory } from "react-router-dom"
import { createUser } from "../../api/users"

const LoginForm = () => {
  const history = useHistory()
  const { handleSubmit, register, errors, setError, formState } = useForm()

  const onSubmit = async (values) => {
    try {
      const data = await createUser(values)
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
  }

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && (
          <Text color="red" pt={2}>
            {errors.email.message}
          </Text>
        )}

        <Input mt={2} label="Name" type="name" name="name" ref={register()} />
        {errors.password && (
          <Text color="red" pt={2}>
            {errors.password.message}
          </Text>
        )}

        <Input
          mt={2}
          label="Phone Number"
          type="phone"
          name="phone_number"
          ref={register()}
        />
        {errors.password && (
          <Text color="red" pt={2}>
            {errors.password.message}
          </Text>
        )}

        <Input
          mt={2}
          label="Password"
          type="password"
          name="password"
          ref={register()}
        />
        {errors.password && (
          <Text color="red" pt={2}>
            {errors.password.message}
          </Text>
        )}

        <Button mt={2} loading={formState.isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  )
}

export default LoginForm

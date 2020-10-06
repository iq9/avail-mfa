import React from "react"
import { useForm } from "react-hook-form"
import { Stack } from "@rent_avail/layout"
import { Button, Checkbox } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import Input from "@rent_avail/input"
import { useHistory } from "react-router-dom"
import { Cookies } from "react-cookie"
// import { cookie } from "cookie"
// ^ Tried to leverage existing dependency, as not to increase bundle
//   size. Could not get it to work, pasting exact examples from their docs.
// └─┬ react-scripts@3.4.3
//   └─┬ webpack-dev-server@3.11.0
//     └─┬ express@4.17.1
//       └── cookie@0.4.0
import { verifyCreds, createSession } from "../../api/sessions"

const LoginForm = () => {
  const history = useHistory()
  const { handleSubmit, register, errors, setError } = useForm()
  const cookie = new Cookies()
  const rememberMeChk = cookie.get("remember_device") !== undefined

  const onSubmit = async (values) => {
    try {
      const data = await verifyCreds(values)

      if (data && data.error) {
        setError("password", {
          type: "manual",
          message: data.error,
        })
      } else {
        if (rememberMeChk) {
          // "Remember Device" cookie detected. Skip the MFA. Log them in.
          const session = await createSession(values)

          if (session && session.error) {
            setError("password", {
              type: "manual",
              message: session.error,
            })
          } else {
            history.push("/users")
          }
        } else {
          // "Remember Device" cookie not detected. Get PIN.
          history.push({
            pathname: "/pin",
            creds: values,
          })
        }
      }
    } catch (err) {
      console.error("Error:", err)
    }
  }

  return (
    <Stack>
      <form id="frm-login" onSubmit={handleSubmit(onSubmit)}>
        {errors.password && (
          <Text color="red" pt={2}>
            {errors.password.message}
          </Text>
        )}

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

        <Input
          label="Password"
          type="password"
          name="password"
          ref={register()}
          mt={2}
        />

        <label
          htmlFor="remember_device"
          style={{
            clear: "right",
            display: "block",
            marginTop: "1.2em",
          }}
        >
          <Checkbox
            label="Remember this device"
            name="remember_device"
            defaultChecked={rememberMeChk}
            ref={register()}
            mt={2}
          />

          <span style={{ marginLeft: "1.1em" }}>Remember this device.</span>
        </label>

        <Button mt={2} type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  )
}

export default LoginForm

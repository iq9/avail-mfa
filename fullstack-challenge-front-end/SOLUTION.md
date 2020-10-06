# Solution

## Avail Candidate: Russell Brooks

me@russbrooks.com

### Approach: Client-Side

I felt like the MFA-entry page should be a separate React route. Displaying the MFA textbox on its own form felt more aligned with Web conventions. Use of convention improves UX. Plus, we have the luxury of React's History object, with Back-button support, etc.

### REST Calls

This required two XHR operations:

1. Verify their creds are valid but **not** log them in yet, because the MFA hasn't passed yet.
1. Verify their creds **and** log them in, after MFA has passed. To accomplish this, I used a Query String param called "nologin". When passed to the Rails endpt, it verifies their UN and PW without logging them in.

### Approach: "Remember Device"

If the "Remember Device" checkbox was checked, the Rails app creates a cookie to track that state. If the Login page detects the existence of the cookie, it skips the MFA step.

### Future Consideration

* **Cypress Tests**

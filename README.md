## Avail Full-Stack Engineer Coding Challenge

Your challenged is to implement two-factor authentication within an existing sign-in flow. In an effort to boost security we as a product team want to require all users to go through an SMS-based two-factor authentication flow on login. As a user I should be prompted to enter a 4-digit PIN code after login. When I enter the correct PIN I should be taken into my account. When I enter an incorrect PIN I should be notified of the error. Until a user has completed the two-factor authentication, they should not be able to do anything else within the application.

Please implement the functionality described above based on the requirements listed below. We've also included a list of conventions for you to consider. These are conventions our dev team lives by and following these will best equip you for working at Avail.

**Note:** There are no bugs or traps in this project. If you see opportunities to refactor, great, but if something isn't working please reach out early and often!

### Getting Started

- This project was set up using Rails 6.X on Ruby version 2.7.1
- To start the rails server for the first time, run:
```bash
bundle install
rake db:create
rake db:migrate
rails s
```
- To start the React project for the first time, run:
```bash
npm install
npm start
```
- React will be served on http://localhost:3002, Rails will be served on: http://localhost:3000
- Once the project is running, get started by creating an account in the app to ensure it is working properly.
- Please reach out with any issues getting this set up

### Requirements

- All users should be required to enter a PIN on login
- Entering "1111" should successfully pass and redirect me to my account home page
- Entering any other number should result in an error message and prevent me from accessing my account home page
- A user should be able to remember a device, and when that device is remembered, should not be prompted to go through 2FA
- The flow should work correctly on desktop Chrome so don’t worry about cross-browser or device compatibility
- You can modify all parts of the existing code, but you don't need to do that to provide a great solution
- The component should be reusable. It should be possible to have multiple instances of the component on the same page
- Document your component in `SOLUTION.md`

### Stretch goals:

- Integrate with a free 3rd party API (e.g. Twilio) to send and verify a PIN code via SMS
- End-to-end test coverage using Cypress.io
- Refactor existing code to be more re-usable

### Conventions:

- We believe in TDD and good unit test coverage
- We use Rails service objects when possible
- We prefer functional React components (with Hooks) over class-based ones
- We try to reduce the amount of logic within the render logic of a component
- We use AirBnb's linting configuration
- We have added our own UI library to get you started - it is documented here https://design.avail.co/packages

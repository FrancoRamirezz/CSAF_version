# CSAF E-commerce Website

An introduction to the CSAF design. The frontend will mostly consist of React and as for the backend, it will consist of Firebase.
## Table of Contents 🤖
- [Installation Frontend](#installation)
- [Installation Backend](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Acknowledgments](#Acknowledgments)
- [Support and Contact](#support-and-contact)

## Installation Frontend 🫡
To ensure installation is done correctly, you need to type "npx Create-react-app" in your terminal. If there is an error regarding "NPM" installation, downloading NodeJs on your local computer will solve this issue. Once, you run this command in the terminal you should see files that state Public, Src - which contains the file "App.js" and "App.css". Note: to ensure this runs smoothly, cd into the directory that you used to name the app. For example, I used "create-react-app csaf-app" and then cd into it to run it. Also, the node_moldues won't be present when downloading it, so run npm install and then npm run start.

## Installation Backend 🫡
As for the backend aspect of the project, type in the terminal "npm install firebase" and you should see it begin to download. If there is an error regarding "npm firebase", then that means you must download nodejs  on your local computer. Once that is done, you should be able to import Firebase and not get a yellow line depending on your chosen IDE. As for dependencies, for the react-router plz install "npm install react-router" and "npm install firebase and firebase-tools". Also, to ensure it runs correctly, make a firebase.js file, which contains the best method to authorize the app

## Features  🎮
- Feature 1: Use React to build a responsive website for the project
- Feature 2: Use Flask and build an API to connect React to the backend and Firebase
- Feature 3: Use Firebase infrastructure to help host the e-commerce website and provide all the resources needed for the project
- Feature 4: Issues: to fix the babel issue
npm install --save-dev @babel/plugin-proposal-private-property-in-object then try
then go into the package-lock JSON.
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object"
  ]
}
- Feature 5: To ensure that the dependencies are correct, inside the package-lock.json it should look like this
-  npm install react-router-dom, npm install react-icons, npm install firebase, npm react-bootstrap
   "name": "csaf-app",
      "version": "0.1.0",
      "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "bootstrap": "^5.3.1",
        "firebase": "^10.3.1",
        "react": "^18.2.0",
        "react-bootstrap": "^2.8.0",
        "react-dom": "^18.2.0",
        "react-icons": "^4.11.0",
        "react-router-dom": "^6.15.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
  
## Contributing
To ensure this project develops in a correct manner, it is essential for the frontend to connect well to the backend


## Acknowledgments 🥇
The entire CSAF team 

## Support and Contact

If there are any questions feel free to reach out to the CSAF team


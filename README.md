# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



--------------------------------------------------

1. Initializing
Navigate to a directory of your choosing (wherever you want your project to be) and run the command create-react-app myMusicApp.

A new folder called myMusicApp should have been created. Navigate into that folder and run npm start to see the default create-react-app code running.

Additionally, install Material UI in this folder: npm i @material-ui/core.

2. Login Screen
Next, you will want to get rid of the default contents inside of App.js of create-react-app and replace them with the login screen. From the examples, the first thing you are probably noticing is the navigation bar.

HINT: You can find the App Bar Component on the Material UI page. There are examples for integrating it.

You will likely also want the Button and TextField components from Material UI. Search the site to find examples of those. If you want to add additional styling to these components, simply add the CSS to the App.css file for now. You can add a className on Material UI components just like you can with any other component.

HINT: Add a property called loggedIn to your state that has a Boolean value. It should be set to false as the default. When you click the button to login, set that variable to true. You will probably want to do some conditional rendering here to show the login screen if the user is not logged in or show something else otherwise. As a refresher...conditional rendering with a ternary operator looks like this:

As a final note for the login session, you can make both the username and password fields required but don't worry about any other validation here. You can put whatever you want in those fields, click 'login' and it will work. We can learn more about true authentication in later weeks.

3. Components Folder
Make a folder called components inside your "src" folder to house any other components you wish to make. You will need at least one more for the dashboard page.

4. Dashboard Component
Make a component called Dashboard.js inside the components folder. You will probably want to create this component and then import it back into App.js to be conditionally rendered based on login like in the example above. For now feel free to render something simple in this component like <p>testing</p> to see if it's working.

HINT: If you noticed that you lost the nav bar when you navigated to this component then it makes sense because it was probably hardcoded in the App.js file. Find a way to break it out into its own component (maybe NavBar.js) and wrap App component with it so that it always shows up.

Inside Dashboard.js you will want to create three cards. The Cards component as well as its accompanying CardContent and CardActions can be found by looking in Material UI docs.

HINT: You might choose to use flexbox (or grid) to evenly space these three cards across the dashboard.

5. Card 1 - Online Mode
This card will need access to the Switch Component. Think about setting a variable in state called "online" and having it be a true or false value to represent the online status. When the switch is clicked, make sure the state gets updated.

6. Card 2 - Master Volume
This card will need access to the Slider Component. Think about setting a variable in state called "volume" and having it be a number like 20. When the slider is changed, update the state with the correct volume.

HINT: Set your volume on a scale of 0 to 100 with steps of 10 at a time.

7. Card 3 - Sound Quality
This card will need access to the Select Component. Think about setting a variable in state called "quality" and having it be a number of 1, 2 or 3, representing "Low", "Normal" or "High" quality. When the select box is changed make sure the state gets updated.

8. System Notifications
Create a state variable in the Dashboard component called notifications and make it an empty array. When any other piece of state changes (online, volume, quality) update the notifications array with the corresponding messages. Here are the rules to follow:

If the online status is "false" add the message Your application is offline. You won't be able to share or stream music to other devices.
If the volume exceeds 80, add the message Listening to music at a high volume could cause long-term hearing loss.
If the sound quality is changed to low, add the message Music quality is degraded. Increase quality if your connection allows it.
HINT: Consider using the componentDidUpdate lifecycle method so that you know whenever the component state has changed. You can access the previous state with the prevState variable. More information on this: React componentDidUpdate().

Make sure to map through these notifications and display them underneath a "System Notifications" heading.

Annotate
# Care

[Live Website](https://care-app.netlify.app)

[Live Rails API](https://heroku-care-api.herokuapp.com/insights)

<br />

- [Overview](#Overview)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

<br>

## Overview

**Care**

Care is a Full-Stack React & Rails crud app with authentication where the user can track his mood, symptoms, log food, track medications, and share insights with the community.
So far there are 10 tables all with full crud and associations

<br>

## MVP

- _*Care* will feature full-crud functionality for: moods, affirmations and insights, which will be managed by a user._ ✔️
- _Allow for user sign up, authentication, login, and verification._ ✔️
- _*Care* will feature mobile-first design, that follows some of the [material-design](https://en.wikipedia.org/wiki/Material_Design) principles._ ✔️
  <br>

### Goals

- _Restrict the app only for logged in users (unlogged in users will be redirected to register/login)._ ✔️
- _Insights page: user will be able to delete+edit his own insights, but not other users insights._ ✔️
- _Mobile-friendly design_ ✔️
- _*Care* will be user-friendly._ ✔️

<br>

### Challenges

- _thinking about a transition from mobile to desktop mode (Media query) that makes sense, since this is a heavily mobile focused app_ ✔️

### Libraries and Dependencies

|      Library      | Description                                                                                       |
| :---------------: | :------------------------------------------------------------------------------------------------ |
|       React       | _Front-end client server_                                                                         |
|   React Router    | _Front-end navigation between pages_                                                              |
|       Axios       | _NPM Package to help make API requests_                                                           |
| Styled-Components | _Front-end styling package_                                                                       |
|    Material-UI    | _Front-end styling package_                                                                       |
|   Ruby on Rails   | _Back-end server_                                                                                 |
|   React-Moment    | _React component for the moment date library._                                                    |
|     Rack-CORS     | _back-end support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications._ |
|        JWT        | _back-end authentication dependency_                                                              |
|    PostgreSQL     | _object-relational database system_                                                               |

<br>

### Client (Front End)

### Wireframes

> for the rest of the wireframes please visit this [link:](https://www.figma.com/file/w81a4kRRTnBui5JkqWn5ZN/Care-Wireframes)

### Mobile Login

![mobile login](https://i.imgur.com/plRRI3d.png)

> <div>Care logo made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
>  <br>

### Mobile Home

[Low-fi Code Sandbox](https://codesandbox.io/s/moods-test-87shf?file=/Home.jsx) <br>

![mobile home](https://i.imgur.com/C5il2wu.png)

<br>

### Mobile Community

![mobile community](https://i.imgur.com/CkX7VA5.png)

<br>

### Mobile More

![mobile more](https://i.imgur.com/Faj6lY9.png)

<br>

### Component Tree

> ![Component Tree Image](https://i.imgur.com/odu5aus.png) > [Component Tree Link (Whimsical)](https://whimsical.com/care-JWXTaZdt8XN5jBPYfiuagm)

<br>

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups

|__ components
     |__Context
      |__ CurrentUserContext.jsx
      |__ ThemeStateContext.jsx
   |__MoodComponents
      |__ Moods.jsx
      |__ MoodCard.jsx
   |__ AffirmationComponents/
       |__ Affirmations.jsx
       |__ AffirmationLetter.jsx
   |__ InsightComponents/
       |__ Insights.jsx
       |__ InsightCard.jsx
|__ layouts/
  |__Layout/
     |__ Layout.jsx
     |__ Header.jsx
     |__ Footer.jsx
|__ services/
   |__ apiConfig.js
   |__ moods.js
   |__ auth.js
   |__ affirmations.js
   |__ insights.js
|_ containers/
   |__ MoodsContainer.jsx
   |__ AffirmationsContainer.jsx
   |__ InsightsContainer.jsx
|_ screens/
 |__Main/
   |__ Home.jsx
   |__ Community.jsx
   |__ More.jsx
   |__ Login.jsx
   |__ Register.jsx
 |__ Error/
  |__ NotFound.jsx
 |__ AffirmationDialogs/
   |__ AffirmationDetail.jsx
   |__ AffirmationEdit.jsx
   |__ AffirmationCreate.jsx
|__ MoodDialogs/
   |__ MoodEdit.jsx
   |__ MoodCreate.jsx
|__ InsightScreens/
   |__ InsightEdit.jsx
   |__ InsightCreate.jsx
   |__ InsightDetail.jsx
|__ Modals/
  |__ DeleteInsight.jsx
|__ utils/
 |__ checkValidity.js
 |__ goBack.js
 |__ foodUtils.js
 |__ emojiLogic.js
 |__ getRating.js
```

<br/>

#### Time Estimates

| Task                                                                                                             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Insight, Affirmations, Moods, CRUD Actions in BE                                                          |    H     |     4 hrs      |     30min     |    30min    |
| Create Symptoms BE CRUD                                                                                          |    L     |      1hr       |     20min     |    20min    |
| Create Authentication in BE                                                                                      |    H     |      2hrs      |     10min     |    10min    |
| Create Layout                                                                                                    |    M     |      3hrs      |     30min     |    30min    |
| Create FE Authentication                                                                                         |    H     |      3hrs      |      1hr      |     1hr     |
| Create Insight FE-CRUD                                                                                           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Create Mood FE-CRUD                                                                                              |    H     |      3hrs      |     4hrs      |    4hrs     |
| Create Affirmation FE-CRUD                                                                                       |    M     |      3hrs      |     2hrs      |    2hrs     |
| Create Symptom FE-CRUD                                                                                           |    L     |      2hrs      |     2hrs      |    2hrs     |
| Create Home Page                                                                                                 |    H     |      2hrs      |     30min     |    30min    |
| Create Register Page                                                                                             |    H     |      2hrs      |     30min     |    30min    |
| Styling                                                                                                          |    M     |     15 hrs     |     15hrs     |    15hrs    |
| Create Sign-in Page                                                                                              |    H     |      2hrs      |    2.5hrs     |   2.5hrs    |
| Create Insights Page                                                                                             |    H     |      2hr       |     30min     |    30min    |
| Create Settings Page                                                                                             |    L     |      1hr       |     2hrs      |    2hrs     |
| Create, refactor and debug Dark Mode                                                                             |    L     |      1hr       |     6hrs      |    6hrs     |
| Create Food BE-CRUD                                                                                              |    L     |      1hr       |      1hr      |     1hr     |
| Create Food FE-CRUD                                                                                              |    L     |      2hr       |     2hrs      |    64hrs    |
| Create FoodRegex                                                                                                 |    L     |      4hrs      |     4hrs      |    6hrs     |
| Fetch Medications from a [3rd Party API](https://rxguide.netlify.app/about) and handle full crud on my BE AND FE |    L     |      7hrs      |     7hrs      |    7hrs     |
| ETC (styling, error handling, perfecting                                                                         |    L     |      6hrs      |     6hrs      |    6hrs     |
| Create likes for insights                                                                                        |    L     |      5hrs      |     10hrs     |    10hrs    |
| TOTAL                                                                                                            |          |     49hrs      |    74.5hrs    |   74.5hrs   |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD Model Link](https://drive.google.com/file/d/16G7t1UU_fHARCdY8dVpV2eJWvtP0pbsW/view?usp=sharing)

![ERD Model](https://i.imgur.com/zr2yx8W.png)
<br>

---

## Post-MVP

- dark mode, the user will be able to switch between light mode and dark mode. ✔️
- symptoms, the user will be able to get, add, edit and delete symtpoms. ✔️
- foods, the user will be able to get, add, edit, and delete foods. ✔️
- medicine, Fetch Medications from my [2nd project's 3rd Party air-table API](https://rxguide.netlify.app/about) and handle full crud on my BE AND FE. ✔️
- password confirm on register: you will need to confirm your password to create your account. ✔️
- likes, be able to like an insight. ✔️
- whitelist, if a user enters a link that is not in a whitelist, bring him to a "404 Not found" page ✔️

---

# Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## foodUtils.js

This file is responsible for getting the correct icon for the food based on the typing when you create/edit your food, it uses regex and allows case insensitivity, and all symbols and spaces

> The reason I call it food utils is because as you see, I'm exporting each thing, so I might want to import only one thing in that page for future use, that's why I call it foodUtils.

```
import RestaurantIcon from "@material-ui/icons/Restaurant";

export const foodRegex = /avocado|chicken|hamburger|burger(^cheese$)|pizza|cheeseburger|steak|meat|milk|bacon|rice|pork|soup|taco|apple|pasta|spaghetti|falafel/;

export const foodMap = {
  avocado: "🥑",
  chicken: "🍗",
  hamburger: "🍔",
  cheeseburger: "🍔",
  cheese: "🧀",
  pizza: "🍕",
  steak: "🥩",
  meat: "🍖",
  milk: "🥛",
  bacon: "🥓",
  rice: "🍚",
  pork: "🐖",
  soup: "🍲",
  taco: "🌮",
  apple: "🍎",
  pasta: "🍝",
  spaghetti: "🍝",
  falafel: "🧆",
};

export const foodNameJSX = (food) => {
  const result = food.name.toLowerCase().trim().match(foodRegex);
  if (result) {
    return (
      <>
  <span role="img" aria-label={food.name}>
          {foodMap[result[0]]}
        </span>
        &#8199;{food.name}
      </>
    );
  } else {
    return (
      <>
        <RestaurantIcon />
        &nbsp;{food.name}
      </>
    );
  }
};

```

It takes the result that the user entered, forces it to lowerCase, trims the empty spaces, and uses match on the foodRegex

if we have a result, meaning if the input that the user has entered matches one of the names on the foodRegex,
we return the first result of the foodMap, which is the icon, we surround it with a span tag and a role of "img" for accessability,
then we use #8199; to add a space, simillar to nbsp but a little bigger of space, and attach it next to the food name,
if the user's input DOESN"T match one of the names in the foodRegex, it will return an icon with a fork and a knife instead, which is material UI's <RestaurantIcon />, a user still deserves an icon for his food even if it doesnt match :), I'm planning on adding foods every day, so this foodMap and regex list will get bigger and will have more icons to match user's input over time.


## FAQ

- What is RXGuide?

> [RXGuide](https://rxguide.netlify.app/about) is my second ever project,
> it's a front-end react-app that uses an airtable back end to do full crud,
> I use my airtable API from RXGuide on this project to Create, read, update, and delete a medication and associate it to a user.

- What inspired you?

> Making a "utility belt/self tracking" app was my dream ever since I started programming, I personally have IBD, so I want to track my mood, symptoms, medicine, etc all the time. This app allows me to do that and also share posts with the community at the same time.
> Before Care I used an app called "Gali Health" to track my symptoms, however Gali didn't allow me to track food, and also it was specific to IBD, whereas this app allows you to track all kinds of symptoms and share all kinds of posts.

- Whats the next step?

> The next step would be to make a React Native version of this app, because this app's design is heavily "mobile" friendly, allowing the app to be downloadable on the app store would make sense, so that's the next step for sure.

## Code Issues & Resolutions

- logged in user unauthorized/unverified when refreshing

> resolution: the useEffect happens before the api get request, which means the logged in user is not verified because the api request didn't happen yet, to fix this, put the currentUser (logged-In-User) in the dependency array of the fetchData useEffect that is responsible for fetching the data that is associated with the logged-in-user.

## Changelog

<strong>Dec 9th, 2020:</strong>

- added the option to edit an authorized user on the settings page(you can't edit other people's users, only yours)
- registration and login email no longer forced to lower case as it is handeled differently.
- added more logic to taking the meds, so when the user takes the medicine it doesn't delete it, it just tells him he took and and then he can make the decision if he wanted to delete it.

<br />

<strong>Dec 15th, 2020:</strong>

- added password confirm.
- currentUser is now also handeled with useReducer.

<br/>

<strong>Dec 19th, 2020:</strong>

- users can now like and unlike an insight on the insights page.
- fixed an issue where unnecessary vertical scrolling was happening.
- fixed a zoom bug in the register and login page where white overflow was showing in dark mode.

 <br/>
 
 <strong>Dec 22nd, 2020:</strong>
 - You can now add an image when creating or editing an account, it's not required, so if an image isn't added, you get the default account circle icon.

<strong>Dec 25th, 2020:</strong>

- You can now add an image with actual file upload instead of pasting a link.

<strong>Jan 1st, 2021:</strong>

- You can now write a reason for how you felt when creating/editing a mood.

- fixed a bug where sometimes in Mood Creation or Edit it would return "Invalid Date" instead of the selected date.

- A User can now delete his account if wanting to in the settings page, he will be asked by a confirmation modal to confirm that he indeed wants to delete it.

<strong>Jan 6th, 2021:</strong>

- Fixed an exploit where users could keep 2 tabs open and like posts twice.
- Improved loading times for fetching posts in insights page
- When you select a time necessary to take a medicine, it will now rerender live instead of needing to manually cause a rerender or reload.

<strong>Feb 20th, 2021:</strong>

- Replaced pure white background color with eggshell white for light mode for eye comfort and style.
- Users can now comment, edit comments, and delete comments on insights.
- You can also now see a user's liked insights inside his profile page

<strong>Feb 21st, 2021:</strong>

- Fixed a bug where sometimes a taken medicine wouldn't get saved to the database.

<strong>March 4th, 2021:</strong>

- Created PrivateRoute.jsx, Created AllUsersContext and AllUsersReducer.js

<strong>June 20th, 2021:</strong>
- Updated the community page with likes and comments feed.

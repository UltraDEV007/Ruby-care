# Care

[Live Website](https://care-app.netlify.app)

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

**Care** is a therapy/self-care app where a user will be able to track his mood, create affirmations, and read/share educational insights with the community.
A post mvp feature will allow the user to track his symptoms.

<br>

## MVP

- _*Care* will feature full-crud (create-read-update-destroy) functionality for: moods, affirmations and insights, which will be managed by a user._
- _Allow for user sign up, authentication, login, and verification._
- _*Care* will feature mobile-first design, that follows some of the [material-design](https://en.wikipedia.org/wiki/Material_Design) principles._
  <br>

### Goals

- _Restrict the app only for logged in users (unlogged in users will be redirected to register/login)._
- _Insights page: user will be able to delete+edit his own insights, but not other users insights._
- _Mobile-friendly design_
- _*Care* will be user-friendly._

<br>

### Challenges

- _thinking about a transition from mobile to desktop mode (Media query) that makes sense, since this is a heavily mobile focused app_

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

> [Component Tree Link (Whimsical)](https://whimsical.com/care-JWXTaZdt8XN5jBPYfiuagm)

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
      |__ DarkModeContext.jsx
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
 |__ ratingLogic.js
```

#### Component Breakdown

|       Component       |    Type    | state | props | Description                                                                                                                                             |
| :-------------------: | :--------: | :---: | :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
|        Header         | functional |   y   |   y   | _The header will contain the page name, current time and current user name and logout_                                                                  |
|    MoodsContainer     | functional |   y   |   n   | _Moods container will have all axios requests and pass them as props to other Mood components_                                                          |
|       MoodCard        | functional |   y   |   y   | _The card will render the Mood info via props._                                                                                                         |
|       MoodEdit        | functional |   y   |   y   | _will contain the form to edit a mood_                                                                                                                  |
|      MoodCreate       | functional |   y   |   y   | _will contain the form to create a mood_                                                                                                                |
| AffirmationsContainer | functional |   y   |   n   | _Affirmations container will have all axios requests and pass them as props to other affirmation components_                                            |
|   AffirmationsCard    | functional |   y   |   y   | _The cards will render the affirmation info via props._                                                                                                 |
|   AffirmationDetail   | functional |   y   |   y   | _AffirmationDetail will render the affirmation content text and have links to edit or delete one_                                                       |
|   AffirmationCreate   | functional |   y   |   y   | _AffirmationCreate will have the form to submit text content and create an affirmation_                                                                 |
|    AffirmationEdit    | functional |   y   |   y   | _AffirmationEdit will have the input field to edit an affirmation and a submit button_                                                                  |
|   InsightsContainer   | functional |   y   |   n   | _Insights container will have all axios requests and pass them as props to other insight components_                                                    |
|     InsightsCard      | functional |   y   |   y   | _The cards will render the insight post info via props._                                                                                                |
|     InsightCreate     | functional |   y   |   y   | _InsightCreate will have the form with the input fields to create an insight_                                                                           |
|      InsightEdit      | functional |   y   |   y   | _InsightEdit will have the form with the input fields to edit an insight_                                                                               |
|     InsightDetail     | functional |   y   |   y   | _The InsightDetail screen will render the insight title, body and user name_                                                                            |
|  CurrentUserContext   | functional |   y   |   n   | _CurrentUserContext.jsx will contain the provider and context for current user to be used globally throughtout the app_                                 |
|         Home          | functional |   n   |   n   | _The Home screen will include all the logged moods and affirmations_                                                                                    |
|       Community       | functional |   n   |   n   | _The Community screen will include all insights made by users and the option to edit or delete an insight_                                              |
|         More          | functional |   y   |   y   | _The More page will comtain current user info such as name email and password (will be editable as postmvp feature, and will have a dark mode switcher_ |
|        Footer         | functional |   y   |   n   | _The footer will contain the links to the pages_                                                                                                        |      DarkModeContext     |     functional       |   y   |  y    | _DarkModeContext will contain the logic for changing the theme state from light mode to dark mode and saving it to local storage, then wrapping app.jsx with DarkModeProvider_ |
|        Header         | functional |   y   |   y   | _The header will contain the logged in user name, page name, and current time_                                                                          |        MedCreate      |  functional | y   |   y    | _MedCreate.jsx will fetch all the data from my [2nd project](https://rxguide.netlify.app/)'s API to fetch all medications and then save the medication |
|        MedEdit        | functional | y    |  y     | _MedEdit.jsx will get the medicine by id and allow us to edit it_ |
|  MedDetail            | functional | y    |  y     | _MedDetail will conditionally text render based on wether or not the selected time has passed or not, if it has passed, ask the user if he took his medication, if he says yes, delete the medicine, else, just have exit or delete buttons |


#### Time Estimates

| Task                                                    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Insight, Affirmations, Moods, CRUD Actions in BE |    H     |     4 hrs      |    30min     |     30min     |
| Create Symptoms BE CRUD                                 |    L     |      1hr       |     20min     |     20min     |
| Create Authentication in BE                             |    H     |      2hrs      |     10min     |     10min     |
| Create Layout                                           |    M     |      3hrs      |     30min     |     30min     |
| Create FE Authentication                                |    H     |      3hrs      |      1hr      |     1hr     |
| Create Insight FE-CRUD                                  |    H     |      3hrs      |     2hrs      |     2hrs     |
| Create Mood FE-CRUD                                     |    H     |      3hrs      |     4hrs      |     4hrs     |
| Create Affirmation FE-CRUD                              |    M     |      3hrs      |     2hrs      |     2hrs     |
| Create Symptom FE-CRUD                                  |    L     |      2hrs      |     2hrs      |      2hrs       |
| Create Home Page                                        |    H     |      2hrs      |     30min     |     30min     |
| Create Register Page                                    |    H     |      2hrs      |     30min     |     30min     |
| Styling                                                 |    M     |     15 hrs     |     15hrs      |     15hrs     |
| Create Sign-in Page                                     |    H     |      2hrs      |    2.5hrs     |     2.5hrs     |
| Create Insights Page                                    |    H     |      2hr       |     30min     |     30min     |
| Create Settings Page                                    |    L     |      1hr       |     2hrs      |     2hrs     |
| Create, refactor and debug Dark Mode                    |    L     |      1hr       |     6hrs      |     6hrs     |
| Create Food BE-CRUD | L | 1hr | 1hr | 1hr |
| Create Food FE-CRUD | L | 2hr | 2hrs | 64hrs |
| Create FoodRegex | L | 4hrs | 4hrs | 6hrs |
| Fetch Medications from a [3rd Party API](https://rxguide.netlify.app/about) and handle full crud on my BE AND FE | L | 7hrs | 7hrs | 7hrs |
| ETC (styling, error handling, perfecting | L | 6hrs | 6hrs | 6hrs |
| TOTAL                                                   |          |     44hrs      |     64.5     |     64.5     |





> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD Model Link](https://drive.google.com/file/d/16G7t1UU_fHARCdY8dVpV2eJWvtP0pbsW/view?usp=sharing)

![ERD Model](blob:https://imgur.com/2b635445-18d9-40c8-94a9-04c5c0eb80d6)
<br>

---

## Post-MVP

- dark mode, the user will be able to switch between light mode and dark mode. ✔️
- symptoms, the user will be able to get, add, edit and delete symtpoms. ✔️
- foods, the user will be able to get, add, ddit, and delete foods. ✔️
- medicine, Fetch Medications from my [2nd project's 3rd Party air-table API](https://rxguide.netlify.app/about) and handle full crud on my BE AND FE. ✔️
- password confirm on register: you will need to confirm your password to create your account.
- likes, be able to like an insight.
- whitelist, if a user enters a link that is not in a whitelist, bring him to a "404 Not found" page ✔️
---

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## ratingLogic.js

> this file is responsible for rendering the amount of rating icons depending the value of the rating from 1-5, (for example: when you rate your food in the app)

- We fill the array with icons and iconParam is one individual icon
- for example: console.log(Array(5).fill())

  > => [undefined, undefined, undefined, undefined, undefined]

- We are calling the map function to loop, we are not bothered about whats actually inside the array.
- for example: console.log(Array(5).fill().map(() => '⭐')) (in this case, the icon paramter is the star emoji.)

  > => ['⭐', '⭐', '⭐', '⭐', '⭐']

- "#8199;" just means space each one of the stars by a figure space, think nbsp, but a bit more to the margins of my liking, nbsp's spaces just didn't look right.

```
export default function ratingLogic(ratingParam, iconParam) {
  return Array(ratingParam)
    .fill()
    .map(() => (
      <span role="img" aria-label="rating">
        {iconParam}&#8199;
      </span>
    ));
}
```

- Then I import it into FoodCard.jsx(or any file I want to use it in the future) and use the paramaters like this:
- The reason I decided to give the icon a paramter is because maybe one time I want to do a different icon that isn't a star for something else

> This is how I export it and put it in the JSX

```
 <div className="rating">{ratingLogic(food.rating, "⭐")}</div>
```

## FAQ

> What is RXGuide?

- [RXGuide](https://rxguide.netlify.app/about) is my second ever project,
  it's a front-end react-app that uses an airtable back end to do full crud,
  I use my airtable API from RXGuide on this project to Create, read, update, and delete a medication and associate it to a user.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

>Can't find user id of undefined when refreshing
- resolution: the useEffect sometimes happens before the api request, which means user is not defined because the api request didn't happen yet, which means we don't have a user, to fix this, put the currentUser (logged-In-User) in the dependency array of the fetchData useEffects that are associated with a user.


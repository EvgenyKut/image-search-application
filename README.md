# Welcome to Image-Search-Application

## Available Scripts

In the project directory, you can run:

⚡ npm install /--/ yarn for installing libraries and dependencies.

🚀 npm start /--/ yarn start for launch

🦉 npm test /--/ yarn test - test runner

Happy hacking!

## 📌 Main features

### 1. Local-time greeting 
It is small feature, but really nice, when you can see something more, than just 'Hello'.

### 2. Theme provider
Users can work with our app with comfortable conditions.

### 3. You can change theme by press 'F' on keyboard. 
Easy way to turn on the flashlight!

### 4. Random pack of images before first searching
Get some random images before first search. Your pages always have something!

### 5. All images sorted by likes from API Data.
Get more juicy images first.

### 6. You can change pages by press ⬅️ and ➡️ on keyboard.
Easy and without useless actions.

### 7. Application preserve user-name, theme and authorization in the Local Storage. 
Refresh page without any troubles.

### 8. Accessibility
You can use this app with different theme on the phone and on the laptop as well. Use your keyboard for confirmation your actions.

### 9. PWA
You can use this not only in your mobile-browser, but you can save on phone-desctop and use Image searcher like an App!

## 🛠️ Technical features

### 1. Theme provider
Turning to the CSS Variables approach, you'll notice the only component that re-rendered was our ThemeToggler component responsible for updating the body.

### 2. RTK-query for communication with API
It is easy way to communicate with API and this lib inside redux-toolkit. 
We don't need remember about covering loading/error/update cases. Realy usefull!

### 3. Custom-hooks
All logic in one place. Components don't includes state-logic and any side-effects logic.

### 4. Type-Script
TS prevent us from type-mistakes, improve quality of refactoring, decrease quantity of the comments and really useful with team-work.

### 5. Unit-tests
Tests cover some logic in the app. If you or your co-workers will change something and woll broke previous logic, tests will show it. 
The tests will save our QA efforts for regression testing in the future.


## 💡 Technical ideas for App updating

### 1. More different tests (e2e)

### 2. Save some images in the store

### 3. Load imgages to the images-bank


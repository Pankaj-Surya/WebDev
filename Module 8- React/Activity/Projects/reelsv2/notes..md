# Reels

## pages
* Login
* Signup
* Home
* Profile
## Tech stack
* React 
* Styling : material UI
* Routing : React router dom
* Auth state management: Redux
* Backend : Auth ,db, storage : firebase : 8

## 30/08/2022
* SETUP
  * npx create-react-app reels
  * npm  i firebase@8.0.0  react-router-dom@5.2.0 redux react-redux redux-thunk
* Login Page : 
  * React : input form connect with firebase 
  * Firebase :
    * Firebase service used : Firebase auth : sign method -> login 
    *  auth enable , emailId ,password: enable
    *  Fields -> empty, 
    *  Login failed :error message  : Later  
  
  ### Pending 
    *  Routes  
    *  if login successfull  : Home Page 
  * Signup Page 
    * Input
      * email
      * Password
      * Name
      * Image 
    * Steps
      * signup -> auth function firebase : createUserWithEmailAndPassword 
      * user data store -> firestore -> Part-1
        * firestore enable : firebase console
      * image upload -> firebase storage  
      * user data store + image link store-> firestore -> Part-1


====================================
           FireBase
====================================

# Firebase -> we are using firebase 8 
## services 
*  Firebase Auth
*  FireStore
*  Storage
*  Hosting

##  Steps :
* Go to console 
* create project 
* Disable analytics
* on the home page click on web and a web app

## Firebase Integration
* Go to project settings
* copy firebase config
* npm i firebase 
* create firebase.js file in src folder 
* rewrite according firebase 8
* https://firebase.google.com/docs/auth/web/google-signin : follow this 
* and extract your firebase auth 
* paste your google login fn here 


* To study : 
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb
https://www.youtube.com/playlist?list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB



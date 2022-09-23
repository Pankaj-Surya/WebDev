import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//normal redux
import store from "./redux/store"
import { Provider } from 'react-redux';
// to integrate redux into firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase, { firebaseConfig } from "./firebase";
import { createFirestoreInstance } from 'redux-firestore';
// Routing
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

        <BrowserRouter>
            <ReactReduxFirebaseProvider
                firebase={firebase}

                config={firebaseConfig}

                dispatch={store.dispatch}

                createFirestoreInstance={createFirestoreInstance}
            >
                {/* // firebase lib link */}


                <App />
            </ReactReduxFirebaseProvider>
        </BrowserRouter>
    </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
// import App from './App';
// import Posts from './Posts';
import './templates/Home/PostsApi.css';
import PostsApi from './templates/Home/PostsApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Posts /> */}
    <PostsApi />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

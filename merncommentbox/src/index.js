//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
ReactDOM.render(
 <CommentBox
 url='https://my-mern-venturads.c9users.io/3000/api/comments' 
 pollInterval={2000} />,
 document.getElementById('root')
);
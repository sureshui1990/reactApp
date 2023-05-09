import React from 'react';
import './App.css';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;

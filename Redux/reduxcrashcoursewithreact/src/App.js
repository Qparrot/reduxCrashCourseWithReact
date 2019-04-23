import React from 'react';

import Posts from './components/Posts';
import AddPost from './components/addPost';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	</header>
		<AddPost />
		<Posts />
    </div>
  );
}

export default App;

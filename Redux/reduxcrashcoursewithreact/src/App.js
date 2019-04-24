import React from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import AddPost from './components/addPost';
import store from './store';

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<AddPost />
				<Posts />
			</div>
		</Provider>
	);
}

export default App;

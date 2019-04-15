import React from 'react';

class Posts extends React.Component
{
	componentWillMount()
	{
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
			.then(res => res.json())
			.then(data => console.log(data))
	}
	render()
	{
		return(
			<div>
				<h2>Posts</h2>
			</div>
		);
	}
}

export default Posts;


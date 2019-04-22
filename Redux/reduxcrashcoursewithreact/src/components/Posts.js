import React from 'react';

class Posts extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			posts: []
		};	
	}

	showPosts()
	{
		return this.state.posts.map((post) => 
				<div key={post.id}> 
					<h3>{post.title}</h3> 
				</div>
			
		);
	}

	render()
	{
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => this.setState({posts: data}));

		return (
		<div>
			<h2> Posts:</h2>
			{this.showPosts()}
			
		</div>
		);
	}
}

export default Posts;

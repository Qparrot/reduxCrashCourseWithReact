import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component
{
	componentWillMount()
	{
		this.props.fetchPosts();
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
		return (
		<div>
			<h2> Posts:</h2>
			{this.showPosts()}
			
		</div>
		);
	}
}

export default connect(null, { fetchPosts })(Posts);

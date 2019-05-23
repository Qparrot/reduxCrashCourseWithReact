import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';

class AddPost extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
				title: '',
				body: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => 
	{
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit = (e) =>
	{
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}
		this.props.createPost(post);
	}
		
	render()
	{
		return (
			<div>
				<h2> Add a Post:</h2>
				<form onSubmit={this.onSubmit}>
					<label> Title:
						<br />
						<input 
							type="text"
							placeholder="Add a title..."
							name="title"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</label>
					<br />
					<label> Description:
						<br />
						<textarea
							placeholder="Add a description..."
							name="body"
							value={this.state.body}
							onChange={this.onChange}
						/>
					</label>
					<input
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		);
	}
}

AddPost.propTypes = {
	createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost }) (AddPost);

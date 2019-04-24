import React from 'react';

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

		fetch('https://jsonplaceholder.typicode.com/posts',
		{
			method: 'POST',
			headers:
			{
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
			.then(res => res.json())
			.then(data => console.log(data));
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

export default AddPost;

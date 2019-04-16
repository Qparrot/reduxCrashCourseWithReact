import React from 'react';

class Postform extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			title: '',
			body: ''
		}
	}

	onChange = (e) => 
	{
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit = (e) =>
	{
		e.preventDefault();
		const newPost = {
			title: this.state.title,
			body: this.state.body
		}
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newPost)
		})
			.then(res => res.json())
			.then(data => console.log(data));
	}
	render()
	{
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<p> Title:</p>
					<input
						name="title"
						type="text"
						placeholder="Add your title here..."
						value={this.state.title}
						onChange={this.onChange}
					/>
					<br />
					<p> Description:</p>
					<textarea
						name="body"
						type="text"
						value={this.state.body}
						onChange={this.onChange}
						placeholder="Add your description..."
					/>
					<br />
					<input
						value="Submit"
						type="submit"
					/>
				</form>

			</div>
		);
	}
}

export default Postform;

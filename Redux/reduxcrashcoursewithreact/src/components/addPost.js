import React from 'react';

class AddPost extends React.Component
{
	render()
	{
		return (
			<div>
				<h2> Add a Post:</h2>
				<form>
					<label> Title:
						<br />
						<input 
							type="text"
							placeholder="Add a title..."
							name="title"
						/>
					</label>
					<br />
					<label> Description:
						<br />
						<textarea
							placeholder="Add a description..."
							name="body"
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

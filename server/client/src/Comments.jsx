import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Comments() {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState({ username: "", comment: "" });
	const handleChange = (evt) => {
		setComment((oldComment) => {
			return { ...oldComment, [evt.target.name]: evt.target.value };
		});
	};
	const handleSubmit = async (evt) => {
		try {
			const res = await axios.post(
				"http://localhost:3000/comments",
				comment
			);
			alert(res.data.message);
			setComment({ username: "", comment: "" });
		} catch (err) {
			console.error("Can not post comments", err);
			alert("Failed to add comment.");
		}
	};
	const fetchComments = async () => {
		try {
			const res = await axios.get("http://localhost:3000/comments");
			setComments(res.data);
		} catch (err) {
			console.error("Failed to fetch comments", err);
		}
	};
	useEffect(() => {
		fetchComments();
	}, []);

	return (
		<div>
			{comments.map((c, index) => (
				<p key={index}>
					<strong>{c.username}</strong>: {c.comment}
				</p>
			))}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="Your name"
					value={comment.username}
					onChange={handleChange}
				/>
				<br />
				<textarea
					name="comment"
					placeholder="Your comment"
					value={comment.comment}
					onChange={handleChange}
				/>
				<br />
				<button type="submit">Post Comment</button>
			</form>
		</div>
	);
}

export default Comments;

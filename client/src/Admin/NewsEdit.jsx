import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;



const StyledForm = styled.form`
	background-color: wheat;
	border-radius: 5px;
	padding: 17px;
`;

const StyledInput = styled.input`
	width: 90%;
	border-radius: 5px;
	border: 2px solid transparent;
	color: crimson;
	background-color: white;
	padding: 12px 16px;
	margin-bottom: 8px;
	outline: 0px;
	font-size: 1rem;
	&:focus {
		border-color: #00daff;
	}
`;

const Description = styled.textarea`
	width: 90%;
	border-radius: 5px;
	border: 2px solid transparent;
	color: crimson;
	background-color: white;
	padding: 12px 16px;
	margin-bottom: 8px;
	outline: 0px;
	font-size: 1rem;
	min-height: 100px;
	resize: none;
	&:focus {
		border-color: #00daff;
	}
`;

const StyledButton = styled.button`
	border: 3px solid crimson;
	color: crimson;
	background: none;
	padding: 12px 16px;
	border-radius: 5px;
	outline: 0px;
	cursor: pointer;
	font-weight: 700;
	text-transform: uppercase;
`;

function getCurrentDateTime() {
	return new Date().toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
}

export default function NewsEdit({ isEdit }) {
	const params = useParams();
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState(null);
	const { category, title, author, date, content, src } = formFields || {};
	const [searchParams] = useSearchParams();

	const updateForm = ({ name, value }) => {
		setFormFields({ ...formFields, [name]: value });
	};

	const createHandler = () => {
		async () => {
			try {
				const posted = await axios.post(
					`${BASE_URL}/post/new`,
					{ post: formFields }
				);
				alert("Post created!");
			} catch (e) {
				alert("Post can not be created!");
			}
		};
	};
	useEffect(() => {
		if (!isEdit) {
			setFormFields({
				category: "",
				title: "",
				author: "",
				src: "",
				date: getCurrentDateTime(),
				content: "",
			});
			return;
		}
		// (async () => {
		// 	try {
		// 		const response = await axios.get(
		// 			`http://localhost:3001/post/${params.id}`
		// 		);
		// 		setFormFields(response.data);
		// 	} catch (e) {
		// 		console.warn(e);
		// 		navigate("/", { replace: true });
		// 	}
		// })();
	}, []);

	return (
		<StyledForm>
			<StyledInput
				type="text"
				name="category"
				placeholder="Category"
				value={category}
				onChange={({ target }) => updateForm(target)}
			/>
			<StyledInput
				type="text"
				name="title"
				placeholder="Title"
				value={title}
				onChange={({ target }) => updateForm(target)}
			/>
			<StyledInput
				type="text"
				name="author"
				placeholder="Author"
				value={author}
				onChange={({ target }) => updateForm(target)}
			/>
			<StyledInput
				type="text"
				name="src"
				placeholder="Image src (e.g. /cat.jpg)"
				value={src}
				onChange={({ target }) => updateForm(target)}
			/>
			<StyledInput type="text" name="date" value={date} readOnly />
			<Description
				name="content"
				placeholder="What are your thoughts?"
				value={content}
				onChange={({ target }) => updateForm(target)}
			/>
			{!isEdit && (
				<StyledButton type="button" onClick={createHandler}>
					Create Post
				</StyledButton>
			)}
			{/* {isEdit && (
				<>
					<StyledButton type="button" onClick={saveHandler}>
						Save
					</StyledButton>
					<StyledButton type="button" onClick={deleteHandler}>
						Delete
					</StyledButton>
				</>
			)} */}
		</StyledForm>
	);
}

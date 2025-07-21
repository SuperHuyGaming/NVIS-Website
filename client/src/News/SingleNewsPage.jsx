import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
	max-width: 700px;
	margin: 2rem auto;
	margin-top: 10px;
	padding: 1rem;
`;

const Breadcrumb = styled.div`
	margin-bottom: 1rem;
	padding-bottom: 0.5rem;
	border-bottom: 2px solid #ddd;
	color: #555;
	font-size: 0.85rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.05em;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #c00;

	&:hover {
		text-decoration: underline;
	}
`;

const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

const Meta = styled.div`
	color: #666;
	font-size: 0.95rem;
	margin-bottom: 1.5rem;
`;

const MainImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Content = styled.p`
	font-size: 1.1rem;
	line-height: 1.8;
	color: #333;
	white-space: pre-line;
`;

function SingleNewsPage() {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`http://localhost:3003/news/${id}`
				);
				setPost(response.data);
			} catch (e) {
				console.error("Error fetching single news post", e);
			}
		})();
	}, [id]);

	if (!post) return <div>Loading...</div>;

	return (
		<Container>
			<Breadcrumb>
				<StyledLink to="/">Home</StyledLink> / {post.category}
			</Breadcrumb>

			<Title>{post.title}</Title>
			<Meta>
				By {post.author} | {dayjs(post.date).format("MMMM D, YYYY")}
			</Meta>

			<MainImage src={post.src} alt={post.title} />

			<Content>{post.content}</Content>
		</Container>
	);
}

export default SingleNewsPage;

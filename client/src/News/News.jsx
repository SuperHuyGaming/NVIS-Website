import * as React from "react";
import styled from "styled-components";

const NewsWrapper = styled.div`
	display: inline-block;
	width: 280px;
	margin: 12px;
	cursor: pointer;
	text-align: left;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	background-color: white;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 768px) {
		width: 90%;
		display: block;
		margin: 10px auto;
	}
`;

const Content = styled.div`
	padding: 0.75rem 1rem;
`;

const Badge = styled.span`
	display: inline-block;
	background-color: crimson;
	color: white;
	font-size: 0.65rem;
	font-weight: bold;
	padding: 0.2rem 0.5rem;
	border-radius: 4px;
	margin-bottom: 0.4rem;
`;

const Title = styled.h2`
	margin: 0.4rem 0 0.3rem 0;
	font-size: 1rem;
	font-weight: 600;
	color: #333;
`;

const Meta = styled.div`
	font-size: 0.75rem;
	opacity: 0.75;
	color: #555;
`;

const StyledImg = styled.img`
	width: 100%;
	height: 180px;
	object-fit: cover;
	display: block;
	border-top: 1px solid #ccc;
`;

function News({ src, title, category, author, date, onClick }) {
	return (
		<NewsWrapper onClick={onClick}>
			<Content>
				<Badge>{category}</Badge>
				<Title>{title}</Title>
				<Meta>
					by {author} • {date}
				</Meta>
			</Content>
			<StyledImg src={src} alt={title} />
		</NewsWrapper>
	);
}

export default News;

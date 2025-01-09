import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const Excerpt = styled.p`
  color: #777;
  font-size: 14px;
`;

const ArticleCard = ({ article }) => (
  <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <Image src={article.thumbnail} alt={article.title} />
      <Content>
        <Title>{article.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
      </Content>
    </Card>
  </Link>
);

export default ArticleCard;

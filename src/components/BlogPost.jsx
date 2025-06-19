import { Card } from "react-bootstrap";

export default function BlogPost({ post }) {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <hr />
        <Card.Text>{post.content}</Card.Text>
        <hr />
        <Card.Text>{new Date(post.createdAt)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

import { Card } from "react-bootstrap";
import { format, parseISO } from "date-fns";

export default function BlogPost({ post }) {
  const createdAt = format(parseISO(post.createdAt), "dd MMMM yyyy HH:mm:ss");
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <hr />
        <Card.Text>{post.content}</Card.Text>
        <hr />
        <Card.Text className="fst-italic text-end">
          <span className="text-muted">Created: </span>
          {createdAt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

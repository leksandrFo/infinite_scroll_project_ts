import { useNavigate, useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import CardButton from '../../shared/button';
import { useFetchPostByIdQuery } from '../../shared/api/index';
import styles from './styles.module.css';

export function PostPage() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading } = useFetchPostByIdQuery(Number(id));
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  if (isLoading)
    return (
      <Container>
        <h1>Loading...</h1>;
      </Container>
    );

  return (
    <Container>
      {post ? (
        <Card className={styles.card}>
          <Card.Header>№ {post.id}</Card.Header>
          <Card.Body className={styles.body}>
            <Card.Title>Title: {post.title}</Card.Title>
            <Card.Text>
              <div>Body: {post.body}</div>
            </Card.Text>
            <div className={styles.cardButton}>
              <CardButton onClick={clickHandler}>
                Back
              </CardButton>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <h1>Page is not available</h1>
      )}
    </Container>
  );
}

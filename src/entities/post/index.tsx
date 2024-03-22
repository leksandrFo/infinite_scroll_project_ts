import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostProps } from '../../shared/api/lib/interfaces/IPost.js';
import Card from 'react-bootstrap/Card';
import CardButton from '../../shared/button/index.js';
import styles from './styles.module.css';

const BODYLIMIT: number = 150;

const PostCard: FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const overload = post.body.length > BODYLIMIT;
  
  const clickHandler = () => {
    navigate(`/${post.id}`);
  };
  
  return (
    <Card>
      <Card.Header>№ {post.id}</Card.Header>
      <Card.Body className={styles.body}>
        <Card.Title>Title: {post.title}</Card.Title>
        <Card.Text>
          {overload
            ? `Body: ${post.body.substring(0, BODYLIMIT) + "..."}`
            : post.body}
        </Card.Text>
        {overload && (
          <div className={styles.cardButton}>
            <CardButton className={styles.cardButton} onClick={clickHandler}>
              View
            </CardButton>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PostCard;

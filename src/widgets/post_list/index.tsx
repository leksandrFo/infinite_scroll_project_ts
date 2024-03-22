import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IPost } from '../../shared/api/lib/interfaces/IPost';
import PostCard from '../../entities/post/index';
import { useFetchAllPostsQuery } from '../../shared/api/index';
import { Container } from 'react-bootstrap';
import styles from'./styles.module.css';


function PostsList() {
  const [page, setPage] = useState(0);
  const { data: posts, isLoading } = useFetchAllPostsQuery(page);
  
    const { ref: firstCard } = useInView({
      threshold: 0.5,
    });

    const { ref: lastCard, inView: inViewLastCard } = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inViewLastCard) {
        setPage(page + 1)
      }
    }, [inViewLastCard]);

  return (
    <Container>
      <ul className={styles.postsList}>
        {posts?.map((post: IPost, index: number, arr: number[]) =>
          index === 0 ? (
            <li className={styles.postItem} key={post.id} ref={firstCard}>
              <PostCard post={post} />
            </li>
          ) : index === arr.length - 1 ? (
            <li className={styles.postItem} key={post.id} ref={lastCard}>
              <PostCard post={post} />
            </li>
          ) : (
            <li className={styles.postItem} key={post.id}>
              <PostCard post={post} />
            </li>
          )
        )}
      </ul>
      {isLoading && <div>Loading...</div>}
    </Container>
  );
}

export default PostsList;

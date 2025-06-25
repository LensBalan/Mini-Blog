import { useParams } from 'react-router-dom';
import styles from './Post.module.css';

function Post() {

  const {id} = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  )
}

export default Post
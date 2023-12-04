import { FormEvent, useState } from 'react'
// import styles from './PostComments.module.css'
import PostStyle from './style'
import Comment from '../../models/Comment'

const Post = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [tempComment, setTempComment] = useState('')

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newComment = new Comment(comments.length, tempComment)
    setTempComment('')
    setComments([...comments, newComment])
  }

  return (
    <PostStyle>
      <ul>
        {comments.map(({ comment, id }) => (
          <li key={id}>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <textarea
          value={tempComment}
          onChange={(e) => setTempComment(e.target.value)}
          required
        />
        <button type="submit">Comentar</button>
      </form>
    </PostStyle>
  )
}

export default Post

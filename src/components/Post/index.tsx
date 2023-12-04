// import styles from './Post.module.css'
import Posts from './style'
import PostComments from '../PostComments'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  imageUrl: string
}

const Post = ({ children, imageUrl }: Props) => (
  <Posts>
    <img src={imageUrl} />
    <p> {children} </p>
    <PostComments />
  </Posts>
)

export default Post

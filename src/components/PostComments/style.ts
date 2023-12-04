import styled from 'styled-components'

const PostStyle = styled.div`
  ul {
  }

  li {
    color: #444;
    font-size: 12px;
    line-height: 20px;
    background-color: #ffff9f;
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  p {
    font-style: italic;
  }

  form {
    margin-top: 16px;
    text-align: right;
  }

  textarea {
    display: block;
    resize: none;
    width: 100%;
    margin-bottom: 8px;
    padding: 8px 4px;
  }

  button {
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    background-color: #27ae60;
    color: #eee;
    cursor: pointer;
  }
`

export default PostStyle

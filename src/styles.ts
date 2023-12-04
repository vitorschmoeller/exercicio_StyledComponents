import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: box;
    list-style:none;
    font-family: Roboto, Helvetica, sans-serif;
  }

  body {
    background-color: #eee;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 480px;
  margin: 120px auto;
`

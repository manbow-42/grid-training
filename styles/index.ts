import { css } from "@emotion/css"

export const emotionStyles = {
  main: css`
    width: 1000px;
    margin: auto;
  `,
  h1: css`
    text-align: center;
  `,
  container: css`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: repeat(7, 100px);
    justify-content: space-evenly;
    row-gap: 20px;
  `,
  div: css`
    border: 1px solid;
  `
}
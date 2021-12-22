import { css } from "@emotion/css"

export const emotionStyles = {
  main: css`
    width: 1000px;
    margin: auto;
  `,
  h1: css`
    text-align: center;
  `,
  home: css`
    text-align: center;
    display: block;
    margin: 0 auto;
  `,
  ul: css`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 100px);
    justify-content: space-evenly;
    row-gap: 20px;
    list-style: none;
  `,
  li: css`
    border: 1px solid;
    text-align: center;
  `,
  a: css`
    display: block;
    height: 100%;
    line-height: 100px;
    color: white;
    background-color: blueviolet;
  `
}
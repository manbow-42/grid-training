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
    grid-template-columns: 2fr 1fr 1fr;
    grid-auto-rows: 1fr;
    column-gap: 20px;
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
  `,
  box1: css`
    grid-column-start: 1;
    grid-column-end: 4;
  `,
  box2: css`
    grid-row-start: 2;
    grid-row-end: 4;
  `,
  box6: css`
    grid-column-start: 1;
  `
}
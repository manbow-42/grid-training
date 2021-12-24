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
    list-style: none;
    grid-template:
    "box6 ...  box3" 1fr
    "...  box2  ..." 200px
    "box4 box8 box8" 1fr
    "box4 ...  ... " 20px
    "box4 box5 box1" 2fr
    "...  ...  ... " 20px
    "box7 ...  box9" 1fr
    ;
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
    background-color: green;
  `,
  box1: css`
    grid-area: box1;
  `,
  box2: css`
    grid-area: box2;
  `,
  box3: css`
    grid-area: box3;
  `,
  box4: css`
    grid-area: box4;
  `,
  box5: css`
    grid-area: box5;
  `,
  box6: css`
    grid-area: box6;
  `,
  box7: css`
    grid-area: box7;
  `,
  box8: css`
    grid-area: box8;
  `,
  box9: css`
    grid-area: box9;
  `
}
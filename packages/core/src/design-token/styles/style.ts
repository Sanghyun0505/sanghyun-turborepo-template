import { css } from "@emotion/react";

export const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard-Regular" !important;
  }
`;

export const font = css`
  @font-face {
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
    font-family: "Pretendard-Regular";
  }

  @font-face {
    src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
    font-family: "Pretendard-Bold";
  }

  @font-face {
    src: url("/fonts/Pretendard-ExtraBold.woff2") format("woff2");
    font-family: "Pretendard-ExtraBold";
  }

  @font-face {
    src: url("/fonts/Pretendard-SemiBold.woff2") format("woff2");
    font-family: "Pretendard-SemiBold";
  }

  @font-face {
    src: url("/fonts/Pretendard-Medium.woff2") format("woff2");
    font-family: "Pretendard-Medium";
  }

  @font-face {
    src: url("/fonts/Pretendard-Black.woff2") format("woff2");
    font-family: "Pretendard-Black";
  }

  @font-face {
    src: url("/fonts/Pretendard-Light.woff2") format("woff2");
    font-family: "Pretendard-Light";
  }

  @font-face {
    src: url("/fonts/Pretendard-Variable.woff2") format("woff2");
    font-family: "Pretendard-Variable";
  }
`;

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  button {
    border: none;
    cursor: pointer;
    background-color: unset;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  svg,
  img {
    vertical-align: top;
  }
`;

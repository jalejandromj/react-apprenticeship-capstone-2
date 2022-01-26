import styled, { css } from 'styled-components';

const H2 = styled.h2`
  font-size: 20px;
  ${(props) =>
    props.mini &&
    css`
      font-size: 1.4rem;
    `};
`;

const Li = styled.li`
  position: relative;
  background-color: white;
  overflow-y: scroll;
  &.videoImg {
  }
  &.videoImg > img {
    width: 100%;
  }
  &.videoDescr {
    color: gray;
    font-size: 15px;
  }
  &.videoChannel {
    color: black;
    font-size: 15px;
    font-weight: bold;
  }
`;

const Span = styled.span``;

const Ul = styled.ul`
  display: grid;
  display: -ms-grid;
  grid-row-gap: 0px;

  grid-template-rows: auto 10% 23.5% 6.5%;
  -ms-grid-rows: auto 10% 23.5% 6.5%;

  grid-template-columns: 100%;
  -ms-grid-columns: 100%;

  height: 100%;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 9px 5px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 9px 5px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 9px 5px 0px rgba(0, 0, 0, 0.55);
  list-style-type: none;
  margin: 0;
  padding: 30px 30px;
  ${(props) =>
    props.mini &&
    css`
      grid-template-rows: auto 10%;
      -ms-grid-rows: auto 10%;
      height: 25vh;
      padding: 20px 30px;
    `};
`;

export { H2, Li, Span, Ul };
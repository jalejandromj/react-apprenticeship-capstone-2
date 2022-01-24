import React from 'react';

import { H2, Li, Span, Ul } from './ImageCard.styles';

function ImageCard(props) {
  return (
    <Ul
      onClick={props.onClick}
      mini={props.mini}
    >
      <Li className="videoImg">
        <img src={props.img} alt="" />
      </Li>
      <Li className="videoTitle">
        <H2 className="" mini>
          {props.title}
        </H2>
      </Li>
      {!props.mini ? (
        <>
          <Li className="videoDescr">
            <Span className="">{props.explanation}</Span>
          </Li>
          <Li className="videoChannel">
            <Span className="">{props.date}</Span>
          </Li>
        </>
      ) : null}
    </Ul>
  );
}

export default ImageCard;
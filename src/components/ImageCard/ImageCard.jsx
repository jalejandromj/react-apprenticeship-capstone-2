import React from 'react';

import { H2, Li, Span, Ul } from './ImageCard.styles';

function ImageCard(props) {
  const RenderMedia = () => {
    if(props.isVideo === "video"){
      return (
        <iframe
            id="ytplayer"
            title="watchVideoIframe"
            type="text/html"
            width="100%"
            height="100%"
            src={props.media}
            frameBorder="0"
            allowFullScreen
          />
      );
    }else{
       return (
        <img src={props.media} alt="" />
      );
    }
  }

  return (
    <Ul
      onClick={props.onClick}
      mini={props.mini}
    >
      <Li className="videoImg">
        <RenderMedia />
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
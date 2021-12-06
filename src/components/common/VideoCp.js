import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const Video = styled.img`
  width: ${(props) => props.width};
  max-width: ${(props) => (props.maxWidth ? '100%' : 'auto')};
`;

const VideoCp = ({ src, alt = 'banner', link, width = 'auto', maxWidth = false, className = '' }) => {
  return (
    <div className={className}>
      {link ? (
        <Link to={link}>
          <Video src={src} alt={alt} muted autoPlay />
        </Link>
      ) : (
        <Video src={src} alt={alt} width={width} muted autoPlay />
      )}
    </div>
  );
};

export default React.memo(VideoCp);

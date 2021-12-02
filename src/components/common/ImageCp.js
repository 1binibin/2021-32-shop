import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const Img = styled.img`
  width: ${(props) => props.width};
  max-width: ${(props) => (props.maxWidth ? '100%' : 'auto')};
`;

const ImageCp = ({ src, alt = 'banner', link, width = 'auto', maxWidth = false, className = '' }) => {
  return (
    <div className={className}>
      {link ? (
        <Link to={link}>
          <Img src={src} alt={alt} />
        </Link>
      ) : (
        <Img src={src} alt={alt} />
      )}
    </div>
  );
};

export default React.memo(ImageCp);

import styled from '../../style';
import React from 'react';
import { Link } from 'react-router-dom';

const VideoCp = ({ link, src, alt = '', width = 'auto', className = '' }) => {
  return (
    <div className={className}>
      {link ? (
        <Link to={link}>
          <video src={src} alt={alt} loop muted autoPlay width={width} />
        </Link>
      ) : (
        <video src={src} alt={alt} loop muted autoPlay width={width} />
      )}
    </div>
  );
};

export default React.memo(VideoCp);

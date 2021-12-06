import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const VideoCp = ({ src, alt = 'banner', link, width = 'auto', className = '' }) => {
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

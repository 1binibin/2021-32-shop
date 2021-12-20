import React, { useEffect, useState, useCallback } from 'react';
import styled, { font, color, css } from '../../style';
import FadeLoader from 'react-spinners/FadeLoader';

import { prdApi } from '../../modules/api';
import ButtonCp from '../common/ButtonCp';

const loaderCss = css`
  display: block;
  margin: 0 auto;
  height: 80px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  font-family: ${font.en};
  margin: 2em 0 1em 0;
  text-align: center;
`;

const Button = styled(ButtonCp)`
  display: block;
  width: 200px;
  margin: auto;
  padding: 1em 0;
`;

const withPrdWrapper = (OriginCompenent) => {
  const Component = (props) => {
    const [prd, setPrd] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      (async () => {
        setPrd(await prdApi({ page: 1 }));
      })();
    }, []);

    const onClick = useCallback(async () => {
      setIsLoading(true);
      setPage(page + 1);
      setPrd([...prd, ...(await prdApi({ page }))]);
      setIsLoading(false);
    }, [page, prd]);

    const combineProps = { ...props, prd };
    return (
      <div>
        <Title>{props.title}</Title>
        <OriginCompenent {...combineProps} />
        <FadeLoader
          color={color.primary}
          loading={isLoading}
          css={loaderCss}
          size={60}
        />
        {props.button ? (
          <Button
            txt={props.buttonName}
            colorHover={color.light}
            bgHover={color.dark}
            bold="bold"
            onClick={onClick}
          />
        ) : (
          ''
        )}
      </div>
    );
  };
  return Component;
};

export default withPrdWrapper;

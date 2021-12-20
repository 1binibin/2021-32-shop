import React from 'react';
import styled, { color } from '../../style';

let card = [];
for (let i = 1; i <= 7; i++) {
  card.push(require('../../assets/img/card' + i + '.png'));
}

const Wrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  max-width: 40px;
  margin-right: 0.5em;
`;

const CardCp = () => {
  return (
    <Wrapper>
      {card.map((v, i) => (
        <Card key={i}>
          <img src={v.default} alt={'cart' + i} className="w-100" />
        </Card>
      ))}
    </Wrapper>
  );
};

export default React.memo(CardCp);

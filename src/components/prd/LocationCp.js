import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { color, Underline } from '../../style';

const Location = styled(Underline)`
  color: ${color.lightBlack};
  font-size: 0.875em;
  line-height: 1.25em;
`;

const LocationCp = ({ cateId }) => {
  const [treeName, setTreeName] = useState('');
  const allTree = useSelector((state) => state.tree.allTree);
  /* useEffect(() => {
    const [{ title }] = allTree.filter((v) => v.id === cateId);
    setTreeName('Shop - ' + title);
  }, [allTree, cateId]); */
  return <Location color={color.lightBlack}>TreeName</Location>;
};

export default React.memo(LocationCp);

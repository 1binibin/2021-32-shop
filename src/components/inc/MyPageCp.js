import React from 'react';
import { Search, FavoriteBorder } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from '../../style';

const MyPageCp = () => {
  return (
    <div>
      <Search />
      <FavoriteBorder />
      <ShoppingCartOutlinedIcon />
    </div>
  );
};

export default React.memo(MyPageCp);

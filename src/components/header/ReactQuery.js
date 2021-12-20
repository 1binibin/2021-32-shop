import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const Wrapper = styled.div``;

const queryClient = new QueryClient();

const NaviCp = () => {
  const [tree, setTree] = useState([]);

  /* useEffect(() => {
    const init = async () => {
      const { data } = await axios.get('http://127.0.0.1:3100/api/tree');
      const tree = data[0].children.map((v) => {
        let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
        return { id: v.id, title: v.text, children };
      });
      console.log(tree);
      setTree(tree);
    };
    init();
    console.log('컴포넌트가 시작됨');
    return () => {
      console.log('화면에서 사라짐');
    };
  }, []); */

  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

function Example() {
  const { isLoading, error, data } = useQuery('repoData', async () => {
    const { data } = await axios.get('http://127.0.0.1:3100/api/tree');
    const tree = data[0].children.map((v) => {
      let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
      return { id: v.id, title: v.text, children };
    });
    return tree;
  });

  if (isLoading) console.log('Loading...');
  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <div>
      {/* <h1>{data.name}</h1> */}
      <h1>{data ? data.toString() : '아직...'}</h1>
    </div>
  );
}

export default React.memo(NaviCp);

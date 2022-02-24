import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const { Tmapv2 } = window;

const FullSearchBox = styled.div`
  position: fixed;
  z-index: 19;
  height: 100vh;
  width: 400px;
  background: #fff;
  padding: 20px;
`;

const SearchBar1 = styled.input`
  width: 100%;
  height: 30px;
  padding: 2px;
`;

const ListBox = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const SearchBox = ({ listInfo }) => {
  return (
    <>
      <FullSearchBox>
        <SearchBar1 />
        <ListBox>
          {listInfo.map((item) => {
            return <div>{item.title}</div>;
          })}
        </ListBox>
      </FullSearchBox>
    </>
  );
};

export default SearchBox;

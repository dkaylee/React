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

const SearchContainer = styled.div`
  display: flex;
`;

const SearchBtn = styled.button`
  width: 20%;
  margin-left: 10px;
`;

const SearchBar1 = styled.input`
  width: 100%;
  height: 30px;
  padding: 2px;
`;

const ListBox = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const ListChild = styled.li`
  background: #eaea;
  width: 100%;
  height: 50px;
  margin: 5px;
  cursor: pointer;
`;

const SearchBox = ({ listInfo }) => {
  const onClickRow = (url, state) => {
    console.log('onClickrow', url);

    // history.push({
    //   pathname: url,
    //   state: state
    // });
  };

  return (
    <>
      <FullSearchBox placeholder="건설현장 주소를 입력하세요">
        <SearchContainer>
          <SearchBar1 />
          <SearchBtn>검색</SearchBtn>
        </SearchContainer>
        <ListBox>
          {listInfo.map((item) => {
            return <ListChild>{item.title}</ListChild>;
          })}
        </ListBox>
      </FullSearchBox>
    </>
  );
};

export default SearchBox;

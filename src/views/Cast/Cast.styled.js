import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
  margin-right: 30px;

  &:nth-child(3n) {
    margin-right: 0;
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0px;
  }
`;

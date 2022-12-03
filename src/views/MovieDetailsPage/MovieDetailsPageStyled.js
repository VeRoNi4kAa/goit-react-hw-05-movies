import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  display: flex;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export const InfoBlock = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 20px;
`;

export const ImageBlock = styled.div`
  display: inline-block;
`;

export const InfoImageBlock = styled.div`
  display: flex;
`;

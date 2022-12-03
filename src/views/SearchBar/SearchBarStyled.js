import styled from 'styled-components';

export const List = styled.ul`
  font-size: 20px;
  list-style: none;
`;
export const Item = styled.li`
  margin-bottom: 10px;
`;

export const SearchForm = styled.div`
  margin-bottom: 1rem;
  margin-top: 8px;
  display: flex;
`;

export const Button = styled.button`
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background: transparent;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #000;
`;

export const Input = styled.input`
  width: 400px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #000;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: transparent;
  &:placeholder {
    color: #212529;
    opacity: 0.4;
    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
  }
`;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  margin-bottom: 1px;
  text-decoration: none;
  color: #010101;
  :hover {
    color: white;
  }
`;

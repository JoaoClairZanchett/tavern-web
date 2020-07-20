import styled from 'styled-components';
import { Whatshot } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 2;
  background: var(--secondary);
  border-bottom: 1px solid var(--gray);
  padding: 16px;
`;

export const Logo  = styled(Whatshot)`
  width: 32px;
  height: 32px;

  fill: var(--tavern);
  cursor: pointer;
`;

export const ProfileInfo  = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 8px;
`;

export const UserName = styled.div`
  
`;

import styled, { keyframes } from 'styled-components';
import { ImSpinner } from 'react-icons/im';

export const PendingWrapper = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = keyframes` 0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }`;

export const StyledImSpinner = styled(ImSpinner)`
  margin-right: 10px;
  animation-name: ${Animation};
  animation-duration: 2s;
  animation-iteration-count: infinite linear;
`;

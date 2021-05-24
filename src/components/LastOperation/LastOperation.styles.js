import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const LastOperationWrapper = styled.div`
  display: block;
  font-size: 40px;
  width: 100%;
  height: 40px;
  overflow: hidden;
  word-wrap: break-word;
  text-align: right;
  animation: 1s ${fadeInRight} ease;
`;

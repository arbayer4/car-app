import styled, { keyframes } from "styled-components";
//Learned this spinner from https://gist.github.com/adrianmcli/9fac3ff3c144c2805be90381eaa8d3d4
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #003049;
  border-right: 2px solid #003049;
  border-bottom: 2px solid #003049;
  border-left: 4px solid #ffb81f;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 10px;
`;

export default Spinner;

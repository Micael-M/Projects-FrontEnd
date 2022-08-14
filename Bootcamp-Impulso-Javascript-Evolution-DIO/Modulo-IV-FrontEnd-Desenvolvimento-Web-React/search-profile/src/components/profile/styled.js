import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
`;

export const WrapperInfoUser = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCounter = styled.div`
  align-items: center;
  display: flex;
  margin-top: 8px;
`;

export const WrapperUsername = styled.div`
  align-items: center;
  display: flex;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
    
  }

  a {
    color:blue;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

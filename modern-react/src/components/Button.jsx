import React from 'react';
import styled, { css } from 'styled-components';

const colorStyles = css`
  ${({ theme, color }) => {
        const seleceted = theme.palette[color];
        return css`
      background: ${seleceted};
  &:hover{
   background: #339af0;
  }
  &:active{
   background: #1c7ed6;
  }

    `;
    }
    }
`;

const StyledButton = styled.button`
  /*공통스타일*/
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left:1rem;
  padding-right:1rem;
  justify-content: center;
  align-items: center;
  /* 크기 */
  height : 2.25rem;
  font-size: 1rem;
  /* 색상 */
  background: #228be6;
  &:hover{
   background: #339af0;
  }
  &:active{
   background: #1c7ed6;
  }
  /* 기타 */
  &+&{
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
    return (
        <>
            <StyledButton color={color} {...rest}>{children}</StyledButton>
        </>
    );
}
Button.defaultProps = {
    color: 'blue'
}
export default Button;
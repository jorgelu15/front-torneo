import React, { FC } from 'react';


interface ButtonProps {
  children: String;
  height?: string;
  width?: string;
  padding?: string;
  display?: string;
  margin?: string;
}

const Button: FC<ButtonProps> = ({width,height,padding,display,margin, children}) => {
  const aStyle = {
    height: height !== "" ? height : undefined,
    width: width !== "" ? width : undefined,
    padding: padding !== "" ? padding : undefined,
    display: display !== "" ? display : undefined,
    margin: margin !== "" ? margin : undefined
  };
  return (
  <button style={aStyle}>
    <div className='button-blue jf-center text-bold'>
    <span>{children}</span>
    </div>
  </button>
)};

export default Button;

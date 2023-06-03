import React, { FC } from 'react';


interface ButtonProps {
  children: String;
  height?: string;
  width?: string;
  padding?: string;
}

const Button: FC<ButtonProps> = ({width,height,padding, children}) => {
  const aStyle = {
    height: height !== "" ? height : undefined,
    width: width !== "" ? width : undefined,
    padding: padding !== "" ? padding : undefined
  };
  return (
  <div style={aStyle}>
    <div className='button-blue jf-center text-bold'>
    <span>{children}</span>
    </div>
  </div>
)};

export default Button;

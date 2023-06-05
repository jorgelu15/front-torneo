import React, { FC } from 'react';


interface FormProps {
  signIn: () => {};
  tittle: String;
  description?: any;
  children: React.ReactNode;
  height?: string;
  width?: string;
}

const Form: FC<FormProps> = ({signIn, tittle, description,height,width, children}) => {
  const aStyle = {
    height: height !== "" ? height : undefined,
    width: width !== "" ? width : undefined
  };
  
  return (
  <form action="" className='form jf-sb fd-column ai-start' style={aStyle}>
    <h2 className='form-tittle text-bold'>{tittle}</h2>
    {description && <p className='text-gray' style={{"marginBottom":"12px"}}>{description}</p>}
    {children}
  </form>
)};

export default Form;

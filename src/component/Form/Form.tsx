import React, { FC } from 'react';

interface FormProps {
  tittle: String;
  description?: any;
  children: React.ReactNode;
  height?: string;
  width?: string;
  signIn?: (e:any) => void;
  email?: string;
  password?: string;
}

const Form: FC<FormProps> = ({tittle, description,height,width, children, signIn, email, password}) => {
  const aStyle = {
    height: height !== "" ? height : undefined,
    width: width !== "" ? width : undefined
  };
  
  return (
  <form onSubmit={signIn} className='form jf-sb fd-column ai-start' style={aStyle}>
    <h2 className='form-tittle text-bold'>{tittle}</h2>
    {description && <p className='text-gray' style={{"marginBottom":"12px"}}>{description}</p>}
    {children}
  </form>
)};

export default Form;

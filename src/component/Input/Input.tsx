import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: String|any;
  helperText?: String;
  height?: string;
  width?: string;
}

const Input: FC<InputProps> = ({label, helperText, height,width, ...rest}) => {
  const [selectedImage, setSelectedImage] = useState('');

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result?.toString() ?? '');
      };
      reader.readAsDataURL(file);
    }
  }

  const hanClick= ()=>{
    document.getElementById(rest?.id||"")?.click();
  }
  
  const aStyle = {
    height: height !== "" ? height : undefined,
    width: width !== "" ? width : undefined
  };
  return ( 
  
  <div className={"form-div w100 "+rest?.className}>
    {label && <p className='text-gray' style={{"marginBottom":"6px"}}>{label||""}</p>}
    {rest?.type==="file"&&<div className="custom-file-upload" onClick={hanClick}>
      {selectedImage!==''&&<img src={selectedImage} alt=""/>}
    </div>}
    <input {...rest} className={"input "} style={aStyle} onChange={rest?.type==="file" ? handleFileChange : rest?.onChange}/>
    <p className="helpertext">{helperText}</p>
  </div>
)};

export default Input;

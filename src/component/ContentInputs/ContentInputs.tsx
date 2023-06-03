import React, { FC, useEffect } from 'react';


interface ContentInputsProps {
    children: React.ReactNode;
    id:string;
    width?: string;
}

const ContentInputs: FC<ContentInputsProps> = ({id,width, children }) => {
    useEffect(()=>{
        let childrenNodes=Array.from(document.getElementById(id)?.childNodes||[]);
        let n= childrenNodes.length;
        if(n>1){
            let w= (100-4*(n-1))/n;
            childrenNodes.forEach((e)=>{
                if (e instanceof HTMLElement) {
                    e.setAttribute("style",`
                    width: ${w}% !important
                    `);
                  }
            })
        }
        console.log(childrenNodes);
    },[id]);

    const aStyle = {
        width: width !== "" ? width : undefined
    };
    console.log(id, width);
    return (
        <div id={id} className='contentInput jf-sb' style={aStyle}>
            {children}
        </div>
    )
};

export default ContentInputs;
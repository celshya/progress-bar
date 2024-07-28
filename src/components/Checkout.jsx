import React, { useEffect, useRef, useState } from 'react'

export const Checkout = ({stepperConfig=[]}) => {
    const [iscompleted,setIscompleted] = useState(false)
    const [step,setStep] = useState(1)
   

    useEffect(()=>{
     
        
        if(step>stepperConfig.length){
            console.log("here")
            setIscompleted(true)
            
        }
        else{
            setIscompleted(false)
        }

    },[step,stepperConfig.length])
    const calculatewidth = ()=>{
        return ((step-1)/(stepperConfig.length-1))*100
    }
    const buttonHandle = () =>{

        
        setStep((prev)=>{
            if(prev===stepperConfig.length){
                setIscompleted(true)
                return prev
            }
            else{
                return prev+1
            }
        })
    }

   const  ActiveComponent = stepperConfig[step-1].Component
  return (
    <div><h1>Checkout</h1>
    
    <div className='stepper'>
    {stepperConfig.map((ele,ind)=>{
       return <div className={`steps`} key={ind}>
       <div className={`index ${ind+1===step?"active":""} ${step>ind+1 || iscompleted ?"completed":""}`}>
       
       {step>ind+1 || iscompleted ?(<span className='tick'>&#10003;</span>):(<div>{ind+1}</div>)}
       </div>
       <div>{ele.name}</div>

      
        
       </div>
    })}

    </div>
    <div className='details'>
       <ActiveComponent/>
      {!iscompleted&& <button className='next-button' onClick={buttonHandle}>{step===stepperConfig.length?"Finish":"Next"}</button>}  

        </div>

        <div className='progress-bar'>
        <div className="progress" style={{width:`${calculatewidth()}%`}}></div>

        </div>
    
    </div>
  )
}

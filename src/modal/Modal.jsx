import React, { useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')


const Modals = () => {
  const[modal,setModal]=useState(false);
  return (
    <div >


        <button onClick={()=>setModal(true)}>Open Modal</button>
         <Modal className="modal" isOpen={modal} 
         
         style={{overlay:{
          color:'red',
          background:"blur",
          
         
         },
        content:{
          width:300,
          height:300,
          border:"2px red solid"
        
        }
      }}
         role={"dilog"}
         onRequestClose={()=>setModal(false)}>
          <h2>Hlooe</h2>
          <p>paragaraph</p>
          <button onClick={()=>setModal(false)}>Clsoe Modal</button>
          </Modal>

    </div>
  )
}

export default Modals
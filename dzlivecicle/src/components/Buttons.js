import * as React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Buttons(){

    const [form, setFomrm] = useState("login")
    
    function handler(){
       
    if(form ==="login"){
        setFomrm("logout")
    }else{
        setFomrm("login")
    }
    }
    
    

    return (
        <div className="container">
          <div class="row mx-md-n5 mt-5" >
              <div className="col-4 bg-warning border border-danger" style={{height:250, textAlign:'center', padding:40, borderRadius:15}}>
              <h3>функциональная компонента + UseState</h3>
                 <button  onClick={handler} type="button" className="btn btn-primary mt-2">{form}</button>
                 <div className="mt-2"><h3><span class="badge badge-secondary fs-6"> yuo are  {form}</span></h3></div>
              </div> 
           </div>
      </div>
    )
}

export default Buttons
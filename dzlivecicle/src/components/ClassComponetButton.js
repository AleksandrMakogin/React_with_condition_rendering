import *as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ButtonComponet extends React.Component{

    constructor(){
        super()
        this.state ={
            form : 'Login'
        }
    }

    handler =()=>{
        let carentForm = this.state.form
         
        if(this.state.form === 'Login'){
            carentForm = 'LogOut'
            this.setState({
               form:  carentForm 
            })
        }else {
            carentForm = 'Login'
            this.setState({
               form:  carentForm 
            })
        }
       
    }
   
    render(){
        return(
         <div className="container">
             <div className="row mx-md-n5 mt-5">
                <div className="col-4 bg-warning border border-danger" style={{height:200, textAlign:'center', padding:40, borderRadius:15}}>
                   <h3>класовая компонента</h3>
                       <div>
                          <button onClick={this.handler} type="button" className="btn btn-primary mt-2">{this.state.form}</button>
                      </div>
                    <div className="mt-2"><h3><span class="badge badge-secondary fs-6"> yuo are  {this.state.form}</span></h3></div>
                </div>
             </div>

         </div>
           
        )
    }

}

export default ButtonComponet
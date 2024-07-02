import {Component} from 'react'

class User extends Component{
   constructor (props){
      super (props)
      this.state = {
         counter:0,
         age: ""
      }
   }
     
   clickHendl = () =>{
      this.setState(prevf => ({
         counter: prevf.counter +1,
      }))
   }
   minus = () =>{
      this.setState(prevf => ({
         counter: prevf.counter -1,
      }))
   }
   restart = () =>{
      this.setState({
         counter:0,
      })
   }

   
   
   chenjHed = e =>{
     this.setState({
      age: e.target.value,
     })
   }
   render (){

      const {counter} = this.state
      return (
            <div className='w-30 mx-auto'>
                 <div className='border p-3 mt-5'>
                     <div className='box'>
                     <p className='text-center'>{counter}</p>
                       <button onClick={this.clickHendl} className='btn btn-success'>Click-pilu</button>
                       <button onClick={this.restart} className='btn btn-info mx-1'>Click-restart</button>
                       <button onClick={this.minus} className='btn btn-danger'>Click-minus</button>
                     </div>
                 
                 </div>
            </div>
      )
   } 
}

export default User;
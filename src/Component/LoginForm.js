import React,{Component} from 'react'
import Dashboard from './Dashboard'

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user:false,
            userInput:"",
            passInput:"",
            username: "jessa",
            password:"mae@17"
        }
    }
    loginHandler(e){
        e.preventDefault();
        const{userInput,passInput,username,password}=this.state;
        if(userInput===username && passInput === password){
            this.setState({user:true});
            console.log("success")
        }else{
            this.setState({user:false});
            console.log("error")
        }
        
    }
    
    


    render() {
        if(!this.state.user){
            return (
                <div> 
                    <form>
                        <div>
                        <input type = "text" placeholder = "username" onChange={e=>this.setState({userInput: e.target.value})}></input>
                        <input type = "password" placeholder = "password" onChange={e=>this.setState({passInput: e.target.value})}></input>
                        </div>
                        <button onClick={(e)=> this.loginHandler(e)}>Login</button>
                    </form>
                </div> 
            );
        }  
        if(this.state.user){
            return(
                <Dashboard/>
            );
        }  
    }
}
export default LoginForm;

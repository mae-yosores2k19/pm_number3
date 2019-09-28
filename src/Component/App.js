import React,{Component} from 'react'
import LoginForm from './LoginForm'


class App extends Component{
    render(){
        return(
            <div>
                <link
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                    />
                <LoginForm/>
            </div>
        )
    }
}
export default App;
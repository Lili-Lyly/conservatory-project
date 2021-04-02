import './App.css';
import Navbar from './composants/header/header';
import Main from './composants/main/main'
import Login from "./pages/login/login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"




function App() {
    return (
        <div>  
            
<Navbar/>
<Main/>

         <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/"/>
                </Route>
                <Route path={'/login'} component={Login}/>
                
                

            </Switch>
        </BrowserRouter>



        </div>
    )
}

export default App;
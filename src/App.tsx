import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import Create from './Create';
import BlogDetails from "./BlogDetails";
import Missing from "./Missing";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route exact path="/create"><Create/></Route>
                        <Route exact path="/blogs/:id"><BlogDetails/></Route>
                        <Route path="*"><Missing/></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

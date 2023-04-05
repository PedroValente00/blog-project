import { Link } from "react-router-dom";
const Missing = () => {
    return ( 
        <div className="missing-page">
            <h2>This page does not exist</h2>
            <p>Click </p><Link to="/">here</Link> to go back to the homepage.
        </div>
     );
}
 
export default Missing;
// import { Link } from "react-router-dom";

const Scan = (props) => {
    return (
        <div id="scanContainer">
            <img src={props.scan} alt={props.scan} id="scan-img" />
            {/* <img src={require(props.scan).default} alt={props.scan} id="scan-img" /> */}       
            {/* <img src={required(props.scan)} alt={props.scan} id="scan-img" /> */}
            <br />
            <br />
            {/* <Link to="/">Назад</Link> */}
        </div>
    );
};

export default Scan;

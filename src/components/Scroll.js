import React from "react";

const Scroll=(props) =>{
    return(
        <div style={{overflow:'hidden', overflowY:'scroll', border:'1px solid black', hieght:'500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
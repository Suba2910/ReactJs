export const GenerateExcuse = (props) => {
    return ( 
        <div>
            <h1> Generate Excuse </h1>
            <button onClick={() => {props.fetchExcuse("party")}}> Party </button>
            <button onClick={() => {props.fetchExcuse("family")}}> Family </button>
            <button onClick={() => {props.fetchExcuse("office")}}> Office </button>
            <p> Generated Excuse : {props.excuse} </p>
        </div>
    );
}
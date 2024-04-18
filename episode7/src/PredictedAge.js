// will access predictedAge only if it is not null using ? 
export const PredictedAge = (props) => {
    return (
    <div>
        <input placeholder='Ex. Suba...' onChange={(event) => {props.setName(event.target.value);}}></input>
        <button onClick={props.fetchPredictedAge}> Predict Age </button>
        <h1> Name : {props.predictedAge?.name}</h1>    
        <h1> Predicted Age : {props.predictedAge?.age}</h1>
        <h1> Count : {props.predictedAge?.count}</h1>
    </div> );
}
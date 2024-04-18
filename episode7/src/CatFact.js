export const CatFact = (props) => {
    return (
    <div>
      <button onClick={props.fetchCatFact}> Generate Cat Fact </button>
      <p>{props.catFact}</p>
    </div>
    );
}
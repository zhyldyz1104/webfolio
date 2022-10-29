const Numbers = (props) => {
  const arrow =
    props.num !== "3" ? (
      <section>
        <span>&gt; </span>
        <span>&gt; </span>
        <span>&gt; </span>
      </section>
    ) : null;
  return (
    <div className="num">
      <div>
        <h1>[{props.num}]</h1>
        {arrow}
      </div>

      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default Numbers;

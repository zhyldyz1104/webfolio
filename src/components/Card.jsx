const Card = (props) => {
  return (
    <div className="card">
      <section>
        <img src={props.img} alt="card" />
        <div>
          <h2>{props.date}</h2>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </section>

      <span>View post &rarr;</span>
    </div>
  );
};
export default Card;

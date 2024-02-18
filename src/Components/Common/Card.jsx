function Card({id, title}) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

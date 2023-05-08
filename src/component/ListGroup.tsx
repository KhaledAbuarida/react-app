function ListGroup() {
  let list = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>Hello React</h1>
      {list.length === 0 && <p>item not fount :(</p>}
      <ul className="list-group">
        {list.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

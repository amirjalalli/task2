const Color = ({ data, toggleSquer, ChangeColor }) => {
  return (
    <>
      {data.map((el) => {
        return (
          <div
            className="colorContent"
            style={{ backgroundColor: `rgba(${el.fill})` }}
            key={el.id}
            onClick={toggleSquer}
          >
            <div
              className="border-color"
              style={{ backgroundColor: `${el.color}` }}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default Color;

function IdCard(props) {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.picture} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title"><span style={{ fontWeight: "700" }}><bold>Last Name:</bold> </span>{props.lastName}</h5>
              <h5 className="card-title"><span style={{ fontWeight: "700" }}><bold>First Name:</bold> </span>{props.firstName} </h5>
              <h5 className="card-title"><span style={{ fontWeight: "700" }}><bold>Gender:</bold> </span>{props.gender} </h5>
              <h5 className="card-title"><span style={{ fontWeight: "700" }}><bold>Height:</bold> </span>{props.height} m </h5>
              <h5 className="card-title"><span style={{ fontWeight: "700" }}><bold>Birth:</bold> </span>{props.birth} </h5>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;

/*lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string*/

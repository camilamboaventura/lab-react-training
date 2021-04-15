const DriverCard = (props) => {
    const stars = Math.round(props.rating);
    const rating = (stars) => {
      if (stars == 0) {
        return '☆☆☆☆☆';
      } else if (stars == 1) {
        return '★☆☆☆☆';
      } else if (stars == 2) {
        return '★★☆☆☆';
      } else if (stars == 3) {
        return '★★★☆☆';
      } else if (stars == 4) {
        return '★★★★☆';
      } else if (stars == 5) {
        return '★★★★★';
      }
    };
    const driverCardBox = {
      width: '300px',
      backgroundColor: 'blue',
      margin: '20px',
      borderRadius: '20px',
      padding: '20px',
      textAlign: 'center',
      color: 'white',
    };
    const flexRow = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    };
    return (
      <div style={flexRow}>
          <div style={driverCardBox}>
        <div>
          <img style={driverCardBox} src={props.img} alt="" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h2>{rating(stars)}</h2>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  
  export default DriverCard;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
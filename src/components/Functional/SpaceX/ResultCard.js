const ResultCard = ({mission_name, flight_number}) => {

    return (
        <div>
            {`${flight_number} - ${mission_name}`}
        </div>
    )
}

export default ResultCard;
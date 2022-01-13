import './ResultCard.css';

const ResultCard = ({mission_name, flight_number}) => {

    return (
        <div className="imRed">
            {`${mission_name} - ${flight_number}`}
        </div>
    )
}

export default ResultCard;
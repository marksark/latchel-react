import './ResultCard.css';

const ResultCard = ({mission_name, flight_number}) => {

    return (
        <div className="imRed">
            {`${flight_number} - ${mission_name}`}
        </div>
    )
}

export default ResultCard;
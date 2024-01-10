import { CharacterCardDiv } from "./Styles";

interface CharacterCard {
    birth: string
    death: string
    gender: string;
    height: string;
    name: string;
    race: string;
    spouse: string;
    _id: string;
}

interface CharacterCardProps {
    details: CharacterCard
}

function CharacterCard({ details }: CharacterCardProps) {

    const { name, race, gender, height, birth, death, spouse, _id } = { ...details };

    // if isOpen is true, render the CharacterCard
    return (
        <CharacterCardDiv>
            <div className="character-details" data-id={_id}>
                <h2>{name}</h2>
                <ul className="character-details-list">
                    <li><span className="detail-category">Race:</span><span className="detail-value">{race}</span></li>
                    <li><span className="detail-category">Sex:</span><span className="detail-value">{gender}</span></li>
                    <li><span className="detail-category">Height:</span><span className="detail-value">{height}</span></li>
                    <li><span className="detail-category">Date of birth:</span><span className="detail-value">{birth}</span></li>
                    <li><span className="detail-category">Date of death:</span><span className="detail-value">{death}</span></li>
                    <li><span className="detail-category">Spouse:</span><span className="detail-value">{spouse}</span></li>
                </ul>
                <ul className="character-quotes">

                </ul>
            </div>
        </CharacterCardDiv>
    )
};

export default CharacterCard;
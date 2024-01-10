import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { Wrapper } from "./components/Styles";
import Modal from "./components/Modal";
import './App.css'

const LOTR_URL = 'https://the-one-api.dev/v2';
const BEARER_TOKEN = 'TigiHdW3vtzxISR94sm8';

function App() {
  const [characters, setCharacters] = useState([]);
  const [activeCharacter, setActiveCharacter] = useState<object | undefined>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [characterIndex, setCharacterIndex] = useState(10);

  // Fetch data from '/characters/' list
  const fetchData = async () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${BEARER_TOKEN}`
    }

    const page = characterIndex / 10;
    const offset = characterIndex > 10 ? (characterIndex - 9) : 1;

    const charactersList = await fetch(`${LOTR_URL}/character?limit=10&page=${page.toString()}&offset=${offset}`, { headers: headers });

    const characters = await charactersList.json();

    setCharacters(characters.docs)
    console.log(characterIndex, page)
  };

  function handleCardClick(id: string) {
    // Handle card is clicked and display modal with info
    const activeCharacter = characters.find((character: any) => {
      return character._id === id;
    })
    setActiveCharacter(activeCharacter)
    setIsModalOpen(true);
    console.log(activeCharacter)
  }

  function onModalCloseRequest() {
    setIsModalOpen(false);
    setActiveCharacter({});
  };

  function handlePagination(direction: number) {
    if (direction == -1 && characterIndex > 10) {
      setCharacterIndex(characterIndex - 10)
    } else if (direction == 1) {
      setCharacterIndex(characterIndex + 10)
    }
  }

  // Fetch our LOTR characters on mount
  useEffect(() => {
    fetchData();
  }, [characterIndex]);

  return (
    <Wrapper>
      <ul className="character-sheet">
        {characters.map((character: any, index: number) => (
          <li className="character-card" onClick={() => handleCardClick(character._id)} key={index}>{character.name}</li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={activeCharacter} />
      <nav className='pagination'>
        <button className='previous-btn' onClick={() => handlePagination(-1)}>Previous</button>
        <button className='next-btn' onClick={() => handlePagination(1)}>Next</button>
      </nav>
    </Wrapper>
  )
}

export default App

import React, { useState } from 'react';

import './App.css'
const FLASHCARDS = [
  { front: { hanzi: "不好意思", pinyin: "bù hǎo yì si" }, back: { english: "sorry; embarrassed; excuse me" } },
  { front: { hanzi: "疼吗？", pinyin: "téng ma?" }, back: { english: "Does it hurt?" } },
  { front: { hanzi: "不麻烦你了", pinyin: "bù má fan nǐ le" }, back: { english: "I won't trouble you (further)." } },
  { front: { hanzi: "还好了", pinyin: "hái hǎo le" }, back: { english: "It's alright; not too bad; passable" } },
  { front: { hanzi: "没事", pinyin: "méi shì" }, back: { english: "It's fine; no problem; I'm okay" } },
  { front: { hanzi: "就好", pinyin: "jiù hǎo" }, back: { english: "that's good then; just fine" } },
  { front: { hanzi: "不是小事", pinyin: "bù shì xiǎo shì" }, back: { english: "It's not a small matter; it's a big deal" } },
  { front: { hanzi: "是好是坏自己了", pinyin: "shì hǎo shì huài zì jǐ liǎo" }, back: { english: "Good or bad, you know it yourself." } },
  { front: { hanzi: "我的错", pinyin: "wǒ de cuò" }, back: { english: "My fault/mistake" } },
  { front: { hanzi: "翻译", pinyin: "fān yì" }, back: { english: "translate; translation" } },
];

const shuffleArray = (array) => {
  const newArray = [...array]; // Create a shallow copy
  let currentIndex = newArray.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
};

export default function App() {
  // Math.random() Math.floor()  numbers.map(x => x * 2)
  const numFlashcards = FLASHCARDS.length;
  const [frontSide, setFrontSide] = useState(true);
  const [playingGame, setPlayingGame] = useState(false);
  const [counter, setCounter] = useState(0);
  const [randomIndexList, setRandomIndexList] = useState([]);
  // console.log(randomIndexList);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex(randomIndexList[counter]);
    console.log(randomIndexList[counter], counter);
    setCounter(counter + 1);
    if (counter === FLASHCARDS.length) {
      setPlayingGame(false);
      console.log('setting to false');
    }
    setFrontSide(true);
  }

  const startGame = () => {
    let randomizedList = shuffleArray(FLASHCARDS.map((_, i) => i));
    setPlayingGame(true);
    setRandomIndexList(randomizedList);
    setCounter(1);
    setCurrentIndex(randomizedList[0]);
  }
  return (
    <div data-theme='dark' className='min-h-screen bg-base-200 flex flex-col items-center p-4 font-sans'>
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-primary">Mandarin Flashcards</h1>
        <p className="text-neutral-500 mt-2 text-secondary">Test your knowledge of common Mandarin phrases!</p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        {
          playingGame ? (
            <>
              <div>
                <div className='flex flex-col justify-center items-center w-full'>
                  {/* this is the flashcard, but to using button for onclick instead of div */}
                  <div onClick={()=>setFrontSide(!frontSide)} className='card w-144 h-96 bg-gray-700 card-lg shadow-sm'>
                    <div className='card-body justify-center items-center text-3xl'>
                      {/* {console.log(frontSide)} */}
                      {FLASHCARDS && <h2> {frontSide ? FLASHCARDS[currentIndex].front.hanzi : FLASHCARDS[currentIndex].back.english}</h2>}
                      {/* <div className='card-body justify-center items-center text-3xl absolute w-full h-full backface-hidden'>
                        <h2 className='text-5xl'>{FLASHCARDS[currentIndex].front.hanzi}</h2>
                        <p className='text-neutral-400 text-xl mt-4'>{FLASHCARDS[currentIndex].front.pinyin}</p>
                      </div>
                      <div 
                        className='card-body justify-center items-center text-3xl absolute w-full h-full backface-hidden'
                        style={{ transform: 'rotateY(180deg)' }}
                      >
                        <h2 className='text-primary'>{FLASHCARDS[currentIndex].back.english}</h2>
                      </div> */}
                    </div>
                  </div>
                  <button className="btn btn-primary btn-wide mt-8" onClick={handleNext}>
                    Next
                  </button>
                  <p className="text-sm text-neutral-500 mt-4">
                    Card {counter} of {numFlashcards}
                  </p>
                </div>
              </div>
            </> ) : (<>
              <div>
                <div className='flex justify-center items-center w-full'>
                  <div className='card w-144 h-96 bg-gray-700 card-lg shadow-sm flex justify-center'>
                    <div className='card-body'>
                      <p className='card-title justify-center'> Please press the button below to start! </p>
                      <button className='btn btn-primary' onClick={() => startGame()}> Begin Flashcards </button>
                      {/* <h2 className='front card-title justify-center min-h-screen'>Text</h2>
                      <h2 className='back card-title justify-center min-h-screen'>Text</h2> */}
                    </div>
                  </div>
                </div>
                
              </div>
            </>
          )
        }
      </main>
    </div>
    
    
  );
} 
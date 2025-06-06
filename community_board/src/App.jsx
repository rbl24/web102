import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'coffee');
  // }, []);

  
  let names = [
    'Anna Chen', 
    'Henry Wang', 
    'Adam	Reimer', 
    'Ryan	Liu', 
    'Maggie	Fan',
    'Vivek Yang',
    'Cathy Kuo',
    'Gabby Wang',
    'Kyle	Peng',
    'Alaina	Liu',
    'Sabrina Li'
  ]
  let positions = [
    'President', 
    'Vice President', 
    'Treasurer', 
    'Co-event', 
    'Co-event', 
    'Co-Media', 
    'Co-Media', 
    'Secretary', 
    'Outreach', 
    'Co-Membership', 
    'Co-Membership'
  ]
  let images = [
    'https://org.osu.edu/tasa/files/2024/05/Anna1.jpg',
    'https://org.osu.edu/tasa/files/2025/05/Henry1.jpg',
    'https://org.osu.edu/tasa/files/2024/05/13D41165-1CF5-4193-97B8-2BB46E4FCF1C.jpg',
    'https://org.osu.edu/tasa/files/2024/05/Ryan2.jpg',
    'https://org.osu.edu/tasa/files/2025/05/Maggie1.jpeg',
    'https://org.osu.edu/tasa/files/2025/05/Vivek1-e1748212268581.jpg',
    'https://org.osu.edu/tasa/files/2025/05/Cathy1.jpeg',
    'https://org.osu.edu/tasa/files/2025/05/Gabby1.jpg',
    'https://org.osu.edu/tasa/files/2025/05/Kyle1-1.jpg',
    'https://org.osu.edu/tasa/files/2025/05/Alaina1-1.jpeg',
    'https://org.osu.edu/tasa/files/2025/05/20250514_143320_17CC65.jpeg'
  ]
  let hobby1 = [
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back', 
    'Big Back'
  ]
  let hobby2 = [
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover', 
    'Boba Lover'
  ]
  const members = names.map((name, index) => ({
    name: name,
    position: positions[index],
    image: images[index],         // Replace with real image URLs later
    description: 'This is a placeholder description.',
    hobby1: hobby1[index],
    hobby2: hobby2[index],
  }));
  const badgeType = ['badge-primary', 'badge-secondary', 'badge-accent'];

  return (
    <div data-theme="cupcake" className='App bg-base-200 p-8'> 
      <div className='mx-auto w-lg rounded-box mb-4 p-4 bg-primary text-primary-content'>
        <h1 className="text-2xl text-center font-bold">TASA Eboard 2025-2026!</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            members.map((member, index) => (
              <div 
                key={index} 
                className="card w-72 bg-base-100 shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <figure>
                  <img src={member.image} alt={member.name} />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>
                    {member.name}
                    <div className={`badge ${badgeType[index % badgeType.length]}`}>{member.position}</div>
                  </h2>
                  <p>{member.description}</p>
                  <div className='card-actions justify-end'>
                    <div className={`badge ${badgeType[(index + 1) % badgeType.length]}`}>{member.hobby1}</div>
                    <div className={`badge ${badgeType[(index + 2) % badgeType.length]}`}>{member.hobby2}</div>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
  
}

export default App

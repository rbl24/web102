import { useState } from 'react'
import './App.css'

function App() {
  let names = [
    'Anna Chen', 
    'Henry Wang', 
    'Adam	Reimer', 
    'Ryan	Liu', 
    'Maggie	Fan',
    'Vivek	Yang',
    'Cathy	Kuo',
    'Gabby	Wang',
    'Kyle	Peng',
    'Alaina	Liu',
    'Sabrina	Li'
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
  let hobby1 = [
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
    image: 'placeholder.jpg',         // Replace with real image URLs later
    description: 'This is a placeholder description.',
    hobby1: hobby1[index],
    hobby2: hobby2[index],
  }));
  const badgeType = ['badge-primary', 'badge-secondary', 'badge-accent'];

  return (
    <div data-theme="cupcake" className='App'> 
      <h2>TASA Eboard 2025-2026!</h2>
      <button className="btn btn-primary">Submit</button>
      <div className="card">
        <h1 className="text-header">Device Info</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
          {
            members.map((member, index) => (
              <div className = 'card bg-base-100 w-96 shadow-sm'>
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

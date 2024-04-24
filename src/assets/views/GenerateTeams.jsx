import React from 'react'
import Participants from '../components/Atoms/Participants'
import ParticipantImput from '../components/Atoms/ParticipantImput'
import Banner_nav from '../components/Atoms/Banner_nav'
import Navbar from '../components/Navbar'

const GenerateTeams = () => {
  return (
    <div>
      <Navbar />
      <Banner_nav />
      <Participants />
      <ParticipantImput />
    </div>
  )
}

export default GenerateTeams

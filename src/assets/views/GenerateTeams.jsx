import React from 'react'
import Participants from '../components/Atoms/Participants'
import ParticipantImput from '../components/Atoms/ParticipantImput'
import Banner_nav from '../components/Atoms/Banner_nav'
import TeamList from '../components/Atoms/TeamList'

const GenerateTeams = () => {
  return (
    <div>
      <Banner_nav />
      <Participants />
      <ParticipantImput />
      <TeamList />
    </div>
  )
}

export default GenerateTeams

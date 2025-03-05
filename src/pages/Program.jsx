import React from 'react'
import ProgramBanner from '../components/program/ProgramBanner'
import Overview from '../components/program/Overview'
import Programs from '../components/program/Programs'
import ProgramObjectives from '../components/program/ProgramObjectives'

const Program = () => {
  return (
    <div>
      <div>
        <ProgramBanner />
        <div className='*:py-16 *:px-10'>
          <Overview />
          <Programs />
          <ProgramObjectives />
        </div>
      </div>
    </div>
  )
}

export default Program
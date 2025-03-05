import React from 'react'
import Overview from '../undergraduate/introduction/Overview'
import ProgramObjective from '../undergraduate/introduction/ProgramObjective'
import MastersPromotion from '../undergraduate/introduction/MastersPromotion'
import Scholarships from '../undergraduate/introduction/Scholarships'
import ContactAdmissions from '../undergraduate/introduction/ContactAdmissions'
import ScholarshipOpportunities from '../undergraduate/introduction/ScholarshipOpportunities'

const Introduction = () => {
  return (
    <div>
        <div>
            <Overview />
            <ProgramObjective />
            <MastersPromotion />
            <Scholarships />
            <ContactAdmissions />
            <ScholarshipOpportunities />
        </div>
    </div>
  )
}

export default Introduction;
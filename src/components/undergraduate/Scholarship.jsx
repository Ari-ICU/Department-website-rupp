import React from 'react'
import ScholarIntroduct from '../undergraduate/scholar/ScholarIntroduct'
import TypeScholarship from '../undergraduate/scholar/TypeScholarship'
import ContactAdmissions from '../undergraduate/introduction/ContactAdmissions'
import ScholarshipOpportunities from '../undergraduate/introduction/ScholarshipOpportunities'


const Introduction = () => {
  return (
    <div>
        <div>
            <ScholarIntroduct />
            <TypeScholarship />
            <ContactAdmissions />
            <ScholarshipOpportunities />
        </div>
    </div>
  )
}

export default Introduction;
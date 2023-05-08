import React from 'react'

const ResumePreview = ({ firstName, lastName, email, phoneNumber, key }) => {
  return <>
  <div>
    <div>
        {firstName}
    </div>
    <div>
        {lastName}
    </div>
    <div>
        {email}
    </div>
    <div>
        {phoneNumber}
    </div>
    <div>
        {key}
    </div>
  </div>

  </>;
};

export default ResumePreview

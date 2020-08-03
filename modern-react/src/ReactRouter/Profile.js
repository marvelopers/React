import React from 'react';

const profileData = {
  marveloper: {
    name: '김서현',
    description: 'Front-end Engineer '
  },
  velopert: {
    name: '김민준',
    description: 'Front-end Engineer @RIDI'
  }
}

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;

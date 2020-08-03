import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

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

      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink to="/profiles/marveloper" activeStyle={{ background: 'black', color: 'white' }}>marveloper</NavLink>
        </li>

        <li>
          <NavLink to="/profiles/velopert">velopert</NavLink>
        </li>
      </ul>

      <Route path='/profiles' exact render={() => <div>사용자를 선택해주세요.</div>} />
      <Route path='/profiles/:username' component={Profile} />
      <WithRouterSample />
    </div>
  );
}

export default Profile;

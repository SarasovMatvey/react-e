import React from 'react';
import Avatar from '../Avatar/Avatar';
import Link from '../Link/Link';
import './UserLink.sass';

export default function UserLink({ userName, link, avatar }) {
  return (
    <div className='user-link'>
      <Avatar img={avatar} />
      <Link to={link}>{userName}</Link>
    </div>
  );
}

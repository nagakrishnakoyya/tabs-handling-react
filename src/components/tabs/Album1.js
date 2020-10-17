import React from 'react';

function Album1({ albums }) {
  return (
    <div>
      <h3>Album One</h3>
      <div>
        <ul className="list-unstyled">
          {
            albums.map((album, index) => (
              <li key={album.id}>{index + 1}. {album.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Album1;

import React from 'react';

function Album3({albums}) {
  return (
    <div>
      <h3>Album Three</h3>
      <div>
        <ul className="list-unstyled">
          {
            albums.map((album, index) => (
              <li key={album.id}>{index + 51}. {album.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Album3;

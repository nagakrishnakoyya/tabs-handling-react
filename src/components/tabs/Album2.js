import React from 'react';

function Album2({albums}) {
  return (
    <div>
      <h3>Album Two</h3>
      <div>
        <ul className="list-unstyled">
          {
            albums.map((album, index) => (
              <li key={album.id}>{index + 26}. {album.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Album2;

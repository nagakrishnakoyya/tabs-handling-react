import React from 'react';

function Album4({albums}) {
  return (
    <div>
      <h3>Album Four</h3>
      <div>
        <ul className="list-unstyled">
          {
            albums.map((album, index) => (
              <li key={album.id}>{index + 76}. {album.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Album4;

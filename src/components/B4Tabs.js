import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../config.constants';
import Album1 from './tabs/Album1';
import Album2 from './tabs/Album2';
import Album3 from './tabs/Album3';
import Album4 from './tabs/Album4';
import Loader from './Loader';
// import { Album1, Album2, Album3, Album4 } from './tabs';

function B4Tabs() {

  const [albums, setAlbums] = useState([]);
  const [albums1, setAlbums1] = useState([]);
  const [albums2, setAlbums2] = useState([]);
  const [albums3, setAlbums3] = useState([]);
  const [albums4, setAlbums4] = useState([]);

  useEffect(() => {
    getAlbumsData();
  }, []);

  const getAlbumsData = () => {
    let apiEndpoint = "albums";
    axios.get(`${apiBaseUrl}/${apiEndpoint}`)
      .then(res => {
        let albumSet1 = res.data.slice(0, 25);
        let albumSet2 = res.data.slice(25, 50);
        let albumSet3 = res.data.slice(50, 75);
        let albumSet4 = res.data.slice(75, 100);
        setAlbums(res.data);
        setAlbums1(albumSet1);
        setAlbums2(albumSet2);
        setAlbums3(albumSet3);
        setAlbums4(albumSet4);
      })
      .catch(error => console.log(error))

  }

  return (
    <div className="container-fluid">
      <div className="text-center">
        <h2>Bootstrap Tabs</h2>
      </div>
      {
        albums.length > 0 ? (
          <div className="album-tabs">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#album1">Album 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#album2">Album 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#album3">Album 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#album4">Album 4</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="album1">
                <Album1 albums={albums1} />
              </div>
              <div className="tab-pane fade" id="album2">
                <Album2 albums={albums2} />
              </div>
              <div className="tab-pane fade" id="album3">
                <Album3 albums={albums3} />
              </div>
              <div className="tab-pane fade" id="album4">
                <Album4 albums={albums4} />
              </div>
            </div>
          </div>
        ) : (<Loader loaderText="Loading Albums" />)
      }

    </div>
  )
}

export default B4Tabs;

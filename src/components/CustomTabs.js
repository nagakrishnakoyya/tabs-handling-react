import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from '../config.constants';
import Album1 from './tabs/Album1';
import Album2 from './tabs/Album2';
import Album3 from './tabs/Album3';
import Album4 from './tabs/Album4';
import Loader from './Loader';

function CustomTabs() {
  const [albums, setAlbums] = useState([]);
  let albumSet1 = albums.slice(0, 25).map(album => ({ ...album, albumType: "album1" }));
  let albumSet2 = albums.slice(25, 50).map(album => ({ ...album, albumType: "album2" }));
  let albumSet3 = albums.slice(50, 75).map(album => ({ ...album, albumType: "album3" }));
  let albumSet4 = albums.slice(75, 100).map(album => ({ ...album, albumType: "album4" }));
  const [tab, setTab] = useState("album1");

  useEffect(() => {
    getAlbumsData();
  }, []);

  const getAlbumsData = () => {
    let apiEndpoint = "albums";
    axios.get(`${apiBaseUrl}/${apiEndpoint}`)
      .then(res => {
        setAlbums(res.data);
      })
      .catch(error => console.log(error))

  }

  const tabChangeHandler = (e, tab) => {
    e.preventDefault();
    if(tab){
      setTab(tab);
    }
  }

  return (
    <div className="container-fluid">
      <div className="text-center">
        <h2>Custom Tabs</h2>
      </div>

      {
        albums.length > 0 ? (
          <div className="album-tabs">
            <ul className="nav nav-tabs">
              <li className="nav-item" >
                <a className={tab ==="album1" ? "nav-link active" : "nav-link"} href="#album1" onClick={(e)=>tabChangeHandler(e,"album1")}>Album 1</a>
              </li>
              <li className="nav-item" >
                <a className={tab ==="album2" ? "nav-link active" : "nav-link"} href="#album2" onClick={(e)=>tabChangeHandler(e, "album2")}>Album 2</a>
              </li>
              <li className="nav-item" >
                <a className={tab ==="album3" ? "nav-link active" : "nav-link"} href="#album3" onClick={(e)=>tabChangeHandler(e, "album3")}>Album 3</a>
              </li>
              <li className="nav-item" >
                <a className={tab ==="album4" ? "nav-link active" : "nav-link"} href="#album4" onClick={(e)=>tabChangeHandler(e, "album4")}>Album 4</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className={tab ==="album1" ? "tab-pane active" : "tab-pane"} id="album1">
                <Album1 albums={albumSet1} />
              </div>
              <div className={tab ==="album2" ? "tab-pane active" : "tab-pane"} id="album2">
                <Album2 albums={albumSet2} />
              </div>
              <div className={tab ==="album3" ? "tab-pane active" : "tab-pane"} id="album3">
                <Album3 albums={albumSet3} />
              </div>
              <div className={tab ==="album4" ? "tab-pane active" : "tab-pane"} id="album4">
                <Album4 albums={albumSet4} />
              </div>
            </div>
          </div>
        ) : (<Loader loaderText="Loading Albums" />)
      }
    </div>
  )
}

export default CustomTabs;


import React from "react";
import "./Albums.css";
import { album } from "../album";

const Albums = () => {
  return (
    <div className="text">
      Your label: UMG
      {
        <div>
          {album.map((item) => (
            <div className="absolute-center">
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Album ID</th>
                    <th>Album Type</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Album Name</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Songs</th>
                    <th>Year of Release</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.album_id}</td>
                    <td>{item.alb_type}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td>{item.album_name}</td>
                    <td>{item.artist}</td>
                    <td>{item.genre}</td>
                    <td>{item.songs}</td>
                    <td>{item.yearofrelease}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Albums;

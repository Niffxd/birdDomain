import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";


export const plane = new Icon({
    iconUrl: 'Static/plane.png',
    iconSize: [25, 25],
    popupAnchor:  [-1, -20]
  });

  export const bins = new Icon({
    iconUrl: 'Static/bin.png',
    iconSize: [25, 25],
    popupAnchor:  [-1, -20]
  });


export const Mapa = (props) => {
const position = [-24.1847222,-65.299166]
const observation = [-23.67, -64.87]
    return (
        <MapContainer center={position} zoom={8}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        <Marker position={position} icon = {plane}> 
        <Popup>Punto de Retiro</Popup>
        </Marker>
        <Marker position={observation} icon = {bins}> 
        <Popup>Punto de observacion</Popup>
        </Marker>
        </MapContainer>
    )
}

export default Mapa;
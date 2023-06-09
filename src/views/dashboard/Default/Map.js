import React from 'react';
import { Grid } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  // const position = [latitude, longitude];
  const position2 = [6.670473801959922, 3.153438644180987];
  // function ChangeView({ center, zoom = 12 }) {
  //   const map = useMap();
  //   map.setView(center, zoom);
  //   return null;
  // }
  return (
    <Grid item lg={12} xs={12} md={8} bg="white" p="10" boxShadow="lg">
      <MapContainer center={position2} zoom={13} scrollWheelZoom={true} style={{ height: '500px' }}>
        {/* <ChangeView center={position2} /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position2}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};

Map.propTypes = {
  // latitude: PropTypes.float,
  // longitude: PropTypes.float,
  // center: PropTypes.number,
  // zoom: PropTypes.number
};

export default Map;
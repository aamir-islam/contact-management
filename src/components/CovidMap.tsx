import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCovidData } from "../hooks/useCovidData";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CovidMap: React.FC = () => {
  const { countryData } = useCovidData();

  if (countryData.isLoading) return <div>Loading...</div>;
  if (countryData.isError) return <div>Error loading data</div>;
  if (!countryData.data) return <div>No data available</div>;

  return (
    <div className="w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countryData.data.map((country) => {
          const key = country.countryInfo._id || country.country; // Use _id or country name as fallback

          return (
            <Marker
              key={key} // Ensure this key is unique
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CovidMap;

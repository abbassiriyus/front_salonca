import { YMaps, Map, Placemark } from 'react-yandex-maps';

function Map_page() {
  const placemarks = [
    { coordinates: [55.751574, 37.573856], hintContent: 'Placemark 1' },
    { coordinates: [55.751574, 37.583856], hintContent: 'Placemark 2' },
    { coordinates: [55.751574, 37.593856], hintContent: 'Placemark 3' }
  ];

  return (
    <YMaps>
      <div style={{position:'absolute',top:'0px',background:'red'}}>
        {/* <h1 bac >Yandex Map Example</h1> */}
        <Map  width={'100vw'} height={'100vh'} defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}>
          {placemarks.map((placemark, index) => (
            <Placemark key={index} geometry={placemark.coordinates} properties={{ hintContent: placemark.hintContent }} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
}

export default Map_page;
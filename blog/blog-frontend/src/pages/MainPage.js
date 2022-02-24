/* global Tmapv2 */
import React, { useEffect } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import SearchBox from '../commponent/common/SearchBox';

const { Tmapv2 } = window;

const mappers = [
  {
    title: '표주레미콘',
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    title: '희희레미콘',
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
  {
    title: '하하레미콘',
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  },
  {
    title: '캬캬레미콘',
    lat: 37.62456273069659,
    lng: 127.15211256646381,
  },
];

const mapContainer = () => {
  let container = document.getElementById('TMapApp');
  let options = {
    center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841), // 지도 초기 좌표
    width: '100%',
    height: '100%',
    zoom: 15,
  };
  const tMap = new window.Tmapv2.Map(container, options);

  mappers.forEach((item) => {
    new Tmapv2.Marker({
      title: item.title,
      position: new Tmapv2.LatLng(item.lat, item.lng),
      map: tMap,
    });
  });
};

const MainPage = () => {
  useEffect(() => {
    console.log('window:', window.Tmapv2);

    mapContainer();

    console.log('loading Tmap');
  }, []);

  return (
    <>
      <SearchBox listInfo={mappers} />
      <div id="TMapApp" style={{ position: 'fixed' }} />
    </>
  );
};

export default MainPage;

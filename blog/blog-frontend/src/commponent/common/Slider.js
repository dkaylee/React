import React from 'react';
import { Swiper, SwiperSlide } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import styled from 'styled-components';
import Responsive from '../common/Responsive';

SwiperCore.use([Navigation, Pagination]);

const SliderBlock = styled(Responsive)`
  margin-top: 3rem;
`;

function Slider() {
  return (
    <SliderBlock>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        Navigation
        Pagination={{ clickable: true }}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </SliderBlock>
  );
}

export default Slider;

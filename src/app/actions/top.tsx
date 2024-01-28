// import { data } from './_data';

import { SliderCard } from '@/components/Slider/slider_card';
import { AnimeProp } from '@/types';

export const fetchTopAnime = async () => {
  const response = await fetch('https://shikimori.one/api/animes/?page=1&limit=8&order=ranked');
  const data = await response.json();
  // console.log(data);
  return data.map((item: AnimeProp, index: number) => (
    <SliderCard key={item.id} anime={item} index={index} />
  ));
};

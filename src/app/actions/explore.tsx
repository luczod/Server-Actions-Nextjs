'use server';

import AnimeCard from '@/components/AnimeCard';
import { AnimeProp } from '@/types';

/* https://shikimori.one/api/doc/1.0/animes/  */
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/?page=${page}&limit=8&order=popularity`,
  );
  const data = await response.json();
  // console.log(data);
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

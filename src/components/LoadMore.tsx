'use client';

import { fetchAnime } from '@/app/actions/explore';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

let page = 2;
// export type TAnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [moreData, setData] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...moreData, ...res]);
        page++;
      });
    }
  }, [inView, moreData]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {moreData}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./svg/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;

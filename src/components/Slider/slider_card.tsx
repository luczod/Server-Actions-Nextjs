import Image from 'next/image';
import { AnimeProp } from '@/types';

interface IProps {
  anime: AnimeProp;
  index: number;
}

export function SliderCard({ anime, index }: IProps) {
  const cID = `c${index + 1}`;
  return (
    <>
      <input type="radio" name="slide" id={cID} defaultChecked={cID == 'c1'} />
      <label
        htmlFor={cID}
        className="card"
        style={{
          backgroundImage: `url(https://shikimori.one/${anime.image.original})`,
        }}
      >
        <div className="flex flex-col justify-between w-fit md:w-1/2">
          {/* description */}
          <div className="description max-sm:p-2 lg:pl-4 lg:pb-12 gap-2 text-white">
            <div className="flex justify-between items-center gap-1">
              <h2 className="font-bold  text-xl line-clamp-1 w-full">{anime.name}</h2>
              <div className="py-1 px-2 bg-[#161921] rounded-sm">
                <p className="text-sm font-bold capitalize">{anime.kind}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="./svg/episodes.svg"
                  alt="episodes"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-base font-bold">{anime.episodes || anime.episodes_aired}</p>
              </div>

              <div className="flex flex-row gap-2 items-center ">
                <Image
                  src="./svg/star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  className="object-contain "
                />
                <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
              </div>
            </div>
            <p className="font-semibold text-md ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem
              molestias ullam, quae, distinctio provident voluptatum laborum laboriosam recusandae
              magnam quidem.
            </p>
          </div>
          {/* Position */}
          <div
            id="ranking"
            className="flex justify-center items-center m-4 md:m-2 rounded-full text-white w-12 h-12 bg-[#161921]"
          >
            {index + 1}
          </div>
        </div>
      </label>
    </>
  );
}

function SliderWrap({ arrData }: { arrData: AnimeProp[] }) {
  return (
    <section className="flex flex-nowrap h-96 justify-start">
      {arrData.map((item: AnimeProp, index: number) => (
        <SliderCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
}

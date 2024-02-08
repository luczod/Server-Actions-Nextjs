import Hero from '@/components/Hero';
import LoadMore from '../components/LoadMore';
import Footer from '@/components/Footer';
import { fetchAnime } from './actions/explore';
import { fetchTopAnime } from './actions/top';

async function Home() {
  const data = await fetchAnime(1);
  const dataTop = await fetchTopAnime();
  return (
    <main className="max-w-7xl mx-auto bg-[#0F1117]">
      <Hero />
      <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Top Ranking</h2>
        <section className="flex flex-col max-sm:items-center gap-2 lg:gap-0 md:flex-row md:flex-nowrap md:h-96 md:justify-start">
          {dataTop}
        </section>
        <h2 className="text-3xl text-white font-bold">Popular Anime</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </div>
      <Footer />
    </main>
  );
}

export default Home;

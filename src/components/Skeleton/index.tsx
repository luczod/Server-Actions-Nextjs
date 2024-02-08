const loadingCard = ['card1', 'card2', 'card3', 'card4'];
export function SkeletonCard() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {loadingCard.map((e) => {
        return (
          <div
            key={e}
            role="status"
            className="max-w-sm relative w-full md:w-[16rem] animate-pulse"
          >
            <div className="flex items-center justify-center relative h-[45svh] w-4/5 mx-auto md:w-full md:mx-0 md:h-[37vh] rounded-xl bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex justify-between items-center gap-1">
                <div className="w-40 h-2 rounded-xl bg-gray-700"></div>
                <div className="h-6 w-8 ms-2 rounded-xl bg-gray-600 "></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-6 w-8 rounded-xl bg-gray-600 "></div>
                <div className="h-6 w-8 rounded-xl bg-gray-600 "></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        );
      })}
    </section>
  );
}

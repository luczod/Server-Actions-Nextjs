import Image from 'next/image';

export function SpinerLoad() {
  return (
    <section className="flex justify-center items-center w-full">
      <div>
        <Image
          src="./svg/spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  );
}

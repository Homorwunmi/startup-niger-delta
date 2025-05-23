'use client';

export default function NewHero() {
  return (
    <div className="w-full mx-auto">
      <div
        className="w-full flex flex-col  text-white relative"
        style={{
          backgroundImage: `url("/events/eventhero-bg.png")`,
          backgroundBlendMode: 'soft-light',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(21, 50, 48, 0.4)',
        }}
      >
        <div className="px-24 pt-[91px]">
          <h1 className="text-5xl font-bold tracking-wider pb-4  ">News & Blog.</h1>
          <span className="block border-b-8 border-custom-orange w-[115px] h-2 mb-5" />
          <p className="mt-5 text-lg w-[65%] pb-11">
           Keep up to date with the latest news and updates.
          </p>
        </div>
      </div>
    </div>
  );
}

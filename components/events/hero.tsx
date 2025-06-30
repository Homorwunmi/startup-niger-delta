'use client';

export default function EventHero() {
  return (
    <div className="w-full mx-auto">
      <div
        className="w-full flex flex-col text-white relative"
        style={{
          backgroundImage: `url("/events/eventhero-bg.png")`,
          backgroundBlendMode: 'soft-light',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(21, 50, 48, 0.4)',
        }}
      >
        <div className="px-6 pt-16 sm:px-10 md:px-16 lg:px-24 lg:pt-[91px]">
          <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold tracking-wide pb-4">
            Events
          </h1>
          <span className="block border-b-8 border-custom-orange w-24 sm:w-28 md:w-[115px] h-2 mb-5" />
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:w-3/4 xl:w-2/3 pb-5">
            Discover events, business conferences, trade shows, seminars,
            networking meets, and workshops. Additionally, a list of past events
            within the last 6 months.
          </p>
        </div>
      </div>
    </div>
  );
}

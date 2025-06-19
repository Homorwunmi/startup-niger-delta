'use client';

export default function NewHero() {
  return (
    <div className="w-full mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/events/eventhero-bg.png")`,
          backgroundBlendMode: 'soft-light',
          backgroundColor: 'rgba(21, 50, 48, 0.4)',
        }}
      >
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-16 md:pt-24 lg:pt-[91px] text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide pb-4">
            News & Blog.
          </h1>
          <span className="block border-b-8 border-custom-orange w-24 sm:w-28 md:w-[115px] h-2 mb-5" />
          <p className="mt-4 text-base sm:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[65%] pb-8 md:pb-11">
            Keep up to date with the latest news and updates.
          </p>
        </div>
      </div>
    </div>
  );
}

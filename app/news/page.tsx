export default function Page() {
  return (
    <main>
      <header className="h-[30vh] bg-[url('/images/news-bg.svg')] no-repeat bg-cover bg-top lg:px-20 flex flex-col items-start justify-center gap-4">
        <h1 className="text-5xl font-poppins font-semibold text-white flex flex-col justify-start gap-2">
          <span>News & Blog</span>
          <span className="w-1/3 h-1 bg-custom-orange" />
        </h1>
        <p className="text-2xl text-white">
          Keep up to date with the latest news and updates.
        </p>
      </header>
    </main>
  );
}

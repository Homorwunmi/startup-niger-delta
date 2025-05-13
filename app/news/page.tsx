import { Clock9 } from 'lucide-react';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'How collaboration makes us better business person',
    description:
      'Lorem ipsum dolor sit amet consectetur.  Ont Condimentum adipiscing at iaculis m wqwa adiscing convallis ut feugiat morbi. Indo...',
    author: 'By Admin, NDS',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    }),
    imageUrl: '/images/recent-1.svg',
  },
  {
    id: 2,
    title: 'How collaboration makes us better business person',
    description:
      'Lorem ipsum dolor sit amet consectetur.  Ont Condimentum adipiscing at iaculis m wqwa adiscing convallis ut feugiat morbi. Indo...',
    author: 'By Admin, NDS',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    }),
    imageUrl: '/images/recent-2.svg',
  },
  {
    id: 3,
    title: 'How collaboration makes us better business person',
    description:
      'Lorem ipsum dolor sit amet consectetur.  Ont Condimentum adipiscing at iaculis m wqwa adiscing convallis ut feugiat morbi. Indo...',
    author: 'By Admin, NDS',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    }),
    imageUrl: '/images/recent-3.svg',
  },
  {
    id: 4,
    title: 'How collaboration makes us better business person',
    description:
      'Lorem ipsum dolor sit amet consectetur.  Ont Condimentum adipiscing at iaculis m wqwa adiscing convallis ut feugiat morbi. Indo...',
    author: 'By Admin, NDS',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    }),
    imageUrl: '/images/recent-4.svg',
  },
  {
    id: 5,
    title: 'How collaboration makes us better business person',
    description:
      'Lorem ipsum dolor sit amet consectetur.  Ont Condimentum adipiscing at iaculis m wqwa adiscing convallis ut feugiat morbi. Indo...',
    author: 'By Admin, NDS',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
      day: 'numeric',
    }),
    imageUrl: '/images/recent-5.svg',
  },
];

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

      <section className="flex items-stretch gap-4 px-20 py-4">
        <div className="w-3/4">
          <div>
            <div>
              <h2>Recent News</h2>
            </div>

            <ul className="grid grid-cols-6 gap-4">
              {data.map((dta, i) =>
                i === 0 || i === 1 ? (
                  <li key={dta.id} className="col-span-3">
                    <h3>{dta.title}</h3>
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <div className="flex items-center justify-between">
                      <p>{dta.author}</p>
                      <p className="flex items-center gap-2">
                        <Clock9 />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </div>
                    <p>{dta.description}</p>
                  </li>
                ) : (
                  <li key={dta.id} className="col-span-2">
                    <h3>{dta.title}</h3>
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <div className="flex items-center justify-between">
                      <p>{dta.author}</p>
                      <p className="flex items-center gap-2">
                        <Clock9 />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </div>
                    <p>{dta.description}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div>Hello</div>
      </section>
    </main>
  );
}

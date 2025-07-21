import { Button } from 'components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import { cn } from 'lib/utils';
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

const mostViewedPosts = [
  {
    id: 4,
    category: 'Technology',
    title: 'Economic development in oil-rich regions',
    imageUrl: '/images/recent-4.svg',
  },
  {
    id: 5,
    category: 'Investment',
    title: 'Sustainable business practices in Nigeria',
    description: 'How companies are adapting to environmental challenges...',
    imageUrl: '/images/recent-5.svg',
  },
  {
    id: 6,
    category: 'Politics',
    title: 'Youth entrepreneurship opportunities',
    imageUrl: '/images/recent-1.svg',
  },
];

const popularPosts = [
  {
    id: 1,
    category: 'Technology',
    title: 'How collaboration makes us better business person',
    imageUrl: '/images/recent-1.svg',
  },
  {
    id: 2,
    category: 'Investment',
    title: 'Investment strategies for emerging markets',
    imageUrl: '/images/recent-2.svg',
  },
  {
    id: 3,
    category: 'Politics',
    title: 'Political reforms in the Niger Delta',
    imageUrl: '/images/recent-3.svg',
  },
];

function NewsTop({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-poppins uppercase font-medium">{title}</h2>
      <div className="w-full relative">
        <span className="block absolute -top-1 left-0 w-1/8 border-2 border-custom-orange" />
        <span className="w-full border border-light-custom-green block bg-custom-orange" />
      </div>
    </div>
  );
}

function NewSidebar() {
  return (
    <section className="flex-1 flex flex-col gap-4">
      <Tabs
        defaultValue="popular"
        className="bg-gray-100 flex flex-col gap-4 py-4 w-full"
      >
        <TabsList className="bg-transparent text-center w-full">
          <TabsTrigger
            value="popular"
            className="uppercase font-poppins font-light"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="most-viewed"
            className="uppercase font-poppins font-light"
          >
            Most viewed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular">
          <div className="flex flex-col items-stretch gap-4 px-4">
            {popularPosts.map((post) => (
              <article
                key={post.id}
                className="flex items-stretch gap-3 pb-4 border-b border-gray-200 last:border-b-0"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={80}
                  height={60}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <p
                    className={cn(
                      'uppercase w-32 text-center px-2 py-1 text-white font-medium text-xs text-custom-green leading-tight mb-2',
                      post.category === 'Technology' &&
                        'bg-custom-green text-white',
                      post.category === 'Investment' &&
                        'bg-custom-orange text-white',
                      post.category === 'Politics' &&
                        'bg-custom-green text-white'
                    )}
                  >
                    {post.category}
                  </p>
                  <p className="text-base text-gray-600 line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="most-viewed">
          <div className="flex flex-col items-stretch gap-4 px-4">
            {mostViewedPosts.map((post) => (
              <article
                key={post.id}
                className="flex items-stretch gap-3 pb-4 border-b border-gray-200 last:border-b-0"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={80}
                  height={60}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <p
                    className={cn(
                      'uppercase w-32 text-center px-2 py-1 text-white font-medium text-xs text-custom-green leading-tight mb-2',
                      post.category === 'Technology' &&
                        'bg-custom-green text-white',
                      post.category === 'Investment' &&
                        'bg-custom-orange text-white',
                      post.category === 'Politics' &&
                        'bg-custom-green text-white'
                    )}
                  >
                    {post.category}
                  </p>
                  <p className="text-base text-gray-600 line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="h-96 bg-gray-100 flex flex-col justify-end gap-4 px-5 py-10">
        <Button className="uppercase bg-custom-orange hover:bg-custom-orange rounded-full font-poppins text-lg">
          Place your ad
        </Button>
      </div>

      <div>
        <NewsTop title="Social Pixel" />

        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/images/fb-px.svg"
            alt="news"
            width={500}
            height={300}
            className="w-1/4 inline-block"
          />
          <Image
            src="/images/x-px.svg"
            alt="news"
            width={500}
            height={300}
            className="w-1/4 inline-block"
          />
          <Image
            src="/images/youtube-px.svg"
            alt="news"
            width={500}
            height={300}
            className="w-1/4 inline-block"
          />
          <Image
            src="/images/insta-px.svg"
            alt="news"
            width={500}
            height={300}
            className="w-1/4 inline-block"
          />
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <header className="h-[30vh] bg-[url('/images/news-bg.svg')] no-repeat bg-cover bg-top lg:px-20">
        <div className="flex flex-col items-start justify-center gap-4 h-full 2xl:container 2xl:mx-auto">
          <h1 className="text-5xl font-poppins font-semibold text-white flex flex-col justify-start gap-2">
            <span>News & Blog</span>
            <span className="w-1/3 h-1 bg-custom-orange" />
          </h1>
          <p className="text-2xl text-white">
            Keep up to date with the latest news and updates.
          </p>
        </div>
      </header>

      <section className="flex items-stretch gap-10 px-20 py-4 2xl:container 2xl:mx-auto">
        <div className="w-2/3 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <NewsTop title="Recent News" />

            <ul className="grid grid-cols-6 gap-8">
              {data.map((dta, i) =>
                i === 0 || i === 1 ? (
                  <li
                    key={dta.id}
                    className="col-span-3 flex flex-col gap-4 font-poppins"
                  >
                    <h3 className="text-custom-green text-2xl font-bold w-4/5">
                      {dta.title}
                    </h3>
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <div className="flex items-center justify-between text-sm">
                      <p>{dta.author}</p>
                      <p className="flex items-center gap-2">
                        <Clock9 size={16} />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </div>
                    <p className="text-lg">{dta.description}</p>
                  </li>
                ) : (
                  <li key={dta.id} className="col-span-2 font-poppins">
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <h3 className="font-bold text-lg leading-tight text-custom-green">
                      {dta.title}
                    </h3>
                    <p className="flex items-center gap-2 text-sm">
                      <Clock9 size={16} />
                      <span>{dta.date}</span>
                      <span>- 2 min read</span>
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <NewsTop title="Investment" />

            <div className="flex gap-4">
              <article className="w-1/2 flex flex-col gap-2 font-poppins">
                <h3 className="text-custom-green text-2xl font-bold w-4/5">
                  {data[0].title}
                </h3>
                <figure>
                  <Image
                    src={data[0].imageUrl}
                    alt="news"
                    width={500}
                    height={300}
                  />
                </figure>
                <div className="flex items-center justify-between text-base">
                  <p>{data[0].author}</p>
                  <p className="flex items-center gap-2">
                    <Clock9 size={16} />
                    <span>{data[0].date}</span>
                    <span>- 2 min read</span>
                  </p>
                </div>
                <p className="text-xl">{data[0].description}</p>
              </article>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
                {data.map((dta, i) =>
                  i > 0 ? (
                    <li
                      key={dta.id}
                      className="font-poppins flex flex-col gap-2 h-full"
                    >
                      <figure>
                        <Image
                          src={dta.imageUrl}
                          alt="news"
                          width={500}
                          height={300}
                        />
                      </figure>
                      <h3 className="font-bold text-base leading-tight text-custom-green">
                        {dta.title}
                      </h3>
                      <p className="flex items-center gap-2 text-sm">
                        <Clock9 size={16} />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </li>
                  ) : (
                    ''
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <NewSidebar />
      </section>

      <section className="flex items-stretch gap-8 px-20 py-4 2xl:container 2xl:mx-auto">
        <div className="w-1/2">
          <NewsTop title="Politics" />

          <ul className="grid grid-cols-2 gap-4 mt-4">
            {data.map(
              (dta, i) =>
                i > 0 && (
                  <li key={dta.id} className="flex flex-col gap-4 font-poppins">
                    <h3 className="text-custom-green text-lg font-bold leading-tight">
                      {dta.title}
                    </h3>
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <div className="flex items-center justify-between text-xs">
                      <p>{dta.author}</p>
                      <p className="flex items-center gap-1">
                        <Clock9 size={16} />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </div>
                    <p className="text-sm">{dta.description}</p>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="flex-1">
          <NewsTop title="Opinions" />

          <ul className="grid grid-cols-2 gap-4 mt-4">
            {data.map(
              (dta, i) =>
                i > 0 && (
                  <li key={dta.id} className="flex flex-col gap-4 font-poppins">
                    <h3 className="text-custom-green text-lg font-bold leading-tight">
                      {dta.title}
                    </h3>
                    <figure>
                      <Image
                        src={dta.imageUrl}
                        alt="news"
                        width={500}
                        height={300}
                      />
                    </figure>
                    <div className="flex items-center justify-between text-xs">
                      <p>{dta.author}</p>
                      <p className="flex items-center gap-1">
                        <Clock9 size={16} />
                        <span>{dta.date}</span>
                        <span>- 2 min read</span>
                      </p>
                    </div>
                    <p className="text-sm">{dta.description}</p>
                  </li>
                )
            )}
          </ul>
        </div>
      </section>

      <section className="2xl:container 2xl:mx-auto py-10 px-20">
        <div className="w-5/6 bg-gray-100 flex items-center justify-end px-16 py-8">
          <Button className="uppercase bg-custom-orange hover:bg-custom-orange rounded-full self-end font-poppins text-lg">
            Place your ad
          </Button>
        </div>
      </section>
    </main>
  );
}

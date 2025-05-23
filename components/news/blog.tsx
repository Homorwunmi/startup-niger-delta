// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'How collaboration makes us better business person',
      image: '/new/newOne.png', // Make sure this path is correct
      author: 'Admin, NDS',
      date: 'Jan 6, 2024',
      readTime: '2 min Read',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur. Ont Condimentum adipiscing at iaculis m wayva adiscing convallis ut feugiat morbi. Indo...',
    },
    {
      id: 2,
      title: 'How collaboration makes us better business person',
      author: 'Admin, NDS',
      image: '/new/newOne.png', // Make sure this path is correct
      date: 'Jan 6, 2024',
      readTime: '2 min Read',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur. Ont Condimentum adipiscing at iaculis m wayva adiscing convallis ut feugiat morbi. Indo...',
    },
  ];
  const moreBlogPosts = [
    {
      id: 1,
      image: '/new/computer.png',
      title: 'How collaboration makes us better business person',
      date: 'Jan 6, 2024',
      readTime: '2 min Read',
    },
    {
      id: 2,
      image: '/new/group.png',
      title: 'How collaboration makes us better business person',
      date: 'Jan 6, 2024',
      readTime: '2 min Read',
    },
    {
      id: 3,
      image: '/new/people.png',
      title: 'How collaboration makes us better business person',
      date: 'Jan 6, 2024',
      readTime: '2 min Read',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - NDS</title>
        <meta name="description" content="NDS Blog posts" />
      </Head>

      <main className="w-full mx-auto px-4  pt-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden">
              <h2 className="text-[25px] font-bold text-[#153230] mb-3 hover:!text-custom-orange">
                {post.title}
              </h2>

              {/* Improved Image Container */}
              <div className="relative w-full h-[251px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="">
                <div className="flex items-center text-sm mb-4 font-normal text-[#153230]">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <p className=" mb-5  text-base font-normal text-[#153230] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/*  */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="gap-7 grid grid-cols-3">
          {moreBlogPosts.map((post) => (
            <article key={post.id} className="rounded-lg">
              {/* Image */}
              <div className="relative w-full h-[163px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Title with tighter line height */}
              <h2 className="text-[17px] font-semibold text-[#153230] hover:text-custom-orange leading-tight">
                {post.title}
              </h2>

              {/* Metadata with slightly reduced line height */}
              <div className="flex py-1 flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 leading-snug">
                <div className="flex items-center">
                  <span>{post.date}</span>
                  <span className="mx-1">-</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

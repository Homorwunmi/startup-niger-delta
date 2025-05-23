'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'How collaboration makes us better business person',
      image: '/new/newOne.png',
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
      image: '/new/newOne.png',
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

      {/* Main Blog Posts */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden">
              <h2 className="text-xl sm:text-2xl font-bold text-[#153230] mb-3 hover:text-custom-orange">
                {post.title}
              </h2>

              <div className="relative w-full h-[220px] sm:h-[251px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap gap-2 text-sm text-[#153230] mb-4">
                  <span>By {post.author}</span>
                  <span className="mx-1">•</span>
                  <span>{post.date}</span>
                  <span className="mx-1">•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-base text-[#153230] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* More Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreBlogPosts.map((post) => (
            <article key={post.id} className="rounded-lg">
              <div className="relative w-full h-[180px] sm:h-[163px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h2 className="text-base sm:text-lg font-semibold text-[#153230] hover:text-custom-orange leading-tight">
                {post.title}
              </h2>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-1">
                <span>{post.date}</span>
                <span>-</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

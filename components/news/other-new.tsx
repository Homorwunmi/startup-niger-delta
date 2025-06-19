import Image from 'next/image';

type BlogPost = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className=" overflow-hidden ">
      <h3 className="text-base font-semibold text-[#153230] mb-3 leading-snug">
        {post.title}
      </h3>
      <div className="relative h-44 w-full">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-6 mb-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            📅 <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1">
            ⏱ <span>{post.readTime}</span>
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {post.excerpt}{' '}
          <span className="text-orange-500 font-medium cursor-pointer italic hover:text-orange-600 transition">
            Read more...
          </span>
        </p>
      </div>
    </article>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mt-7 pb-2 mb-6 relative">
      <div className="flex justify-between items-center">
        <div className="relative">
          <h2 className="font-semibold text-2xl text-[#153230] uppercase">
            {title}
          </h2>
          <div className="absolute -bottom-2 left-0 w-24 border-b-8 border-[#FFA500]" />
        </div>

        <div className="flex space-x-1">
          <button
            aria-label="Previous posts"
            className="w-6 h-7 flex items-center justify-center rounded-s-xl border border-[#153230] text-[#153230] hover:bg-[#153230] hover:text-white transition"
          >
            &lt;
          </button>
          <button
            aria-label="Next posts"
            className="w-6 h-7 flex items-center justify-center rounded-e-xl border border-[#153230] text-[#153230] hover:bg-[#153230] hover:text-white transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OtherNews() {
  const politicsPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How political collaboration shapes modern governance',
      date: 'Jan 6, 2024',
      readTime: '3 min read',
      excerpt:
        'Political discourse and bipartisan cooperation in modern times.',
      image: '/new/balls.png',
      imageAlt: 'Political meeting with collaboration',
    },
    {
      id: 2,
      title: 'Understanding electoral systems and democracy',
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt:
        'Exploring voting systems and how they influence democratic outcomes.',
      image: '/new/groups.png',
      imageAlt: 'Democratic voting process',
    },
    {
      id: 3,
      title: 'Understanding electoral systems and democracy',
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt:
        'Exploring voting systems and how they influence democratic outcomes.',
      image: '/new/plane.png',
      imageAlt: 'Democratic voting process',
    },
    {
      id: 4,
      title: 'Understanding electoral systems and democracy',
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt:
        'Exploring voting systems and how they influence democratic outcomes.',
      image: '/new/vr.png',
      imageAlt: 'Democratic voting process',
    },
  ];

  const opinionPosts: BlogPost[] = [
    {
      id: 3,
      title: 'How collaboration makes us better business people',
      date: 'Jan 6, 2024',
      readTime: '2 min read',
      excerpt:
        'Collaboration fosters innovation and leadership in the workplace.',
      image: '/new/table.png',
      imageAlt: 'Brain illustration with collaboration nodes',
    },
    {
      id: 4,
      title: 'The future of remote work and productivity',
      date: 'Jan 4, 2024',
      readTime: '5 min read',
      excerpt: 'Trends in remote work and their impact on business outcomes.',
      image: '/new/cicrle.png',
      imageAlt: 'Remote worker at desk',
    },
    {
      id: 3,
      title: 'Understanding electoral systems and democracy',
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt:
        'Exploring voting systems and how they influence democratic outcomes.',
      image: '/new/phone.png',
      imageAlt: 'Democratic voting process',
    },
    {
      id: 4,
      title: 'Understanding electoral systems and democracy',
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt:
        'Exploring voting systems and how they influence democratic outcomes.',
      image: '/new/mat.png',
      imageAlt: 'Democratic voting process',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 px-4 md:px-8 lg:px-20">
      <div>
        <SectionHeader title="Politics" />
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 ">
          {politicsPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Opinion" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {opinionPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

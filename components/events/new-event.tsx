'use client';

import Image from 'next/image';

export default function MoreUpcomingEvents() {
  const events = [
    {
      time: '10:30 am - 2:30 pm',
      title: 'Conference',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo aliquam pelle integer vehicula nulla aliquam. Lorem ipsum dolor sit amet consectetur. Commodo aliquam pellentesque.',
      image: '/events/conference.png',
    },
    {
      time: '10:30 am - 2:30 pm',
      title: 'TechPRO Workshop',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo aliquam pelle integer vehicula nulla sit amet contur commodo aliquam pellentesque.',
      image: '/events/conference.png',
    },
    {
      time: '10:30 am - 2:30 pm',
      title: 'Conference',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo aliquam pelle integer vehicula nulla sit amet code aliquam pellentesque.',
      image: '/events/conference.png',
    },
  ];

  return (
    <div className="bg-[#D9E8D2] py-8 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-lg sm:text-xl font-semibold text-[#153230] mb-1">
          MORE UPCOMING EVENTS
        </p>
        <div className="h-1 w-16 sm:w-20 bg-[#FF7A00] rounded" />
      </div>

      {/* Event Cards */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            {/* Time */}
            <div className="text-sm font-semibold text-[#153230] w-full sm:w-[90px]">
              {event.time.split('    ').map((part, i) => (
                <div key={i}>{part}</div>
              ))}
            </div>

            {/* Image */}
            <div className="relative w-full sm:w-[90px] h-[150px] sm:h-[70px] flex-shrink-0">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-[#153230] text-sm w-full">
              <p className="font-semibold mb-1">{event.title}</p>
              <p className="text-sm text-[#4A4A4A] leading-snug line-clamp-2">
                {event.description}
              </p>
            </div>

            {/* Action Button */}
            <div className="w-full sm:w-auto">
              <button className="bg-[#FF7A00] text-white text-sm font-medium px-4 py-1.5 rounded w-full sm:w-auto">
                Action
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

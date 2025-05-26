'use client';

import EventHero from '@/components/events/hero';
import Upcoming from '@/components/events/upcoming';

export default function Event() {
  return (
    <div className="font-poppins">
      <EventHero />
      <Upcoming />
    </div>
  );
}

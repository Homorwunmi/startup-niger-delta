"use client";

import React from "react";

export default function Events(): React.JSX.Element {
  return (
    <section>
      <div>
        <h2 className="text-2xl">
          <span>Events.</span>
          <span className="w-5/6 h-1 bg-custom-orange" />
        </h2>
        <p>
          Discover upcoming events, business conferences, trade shows, seminars,
          networking meets, and workshops. Additionally, a list of past events
          within the last 6 months.
        </p>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export default function Alert(): React.JSX.Element {
  return (
    <section className="p-20 bg-gray-200 flex flex-col items-center gap-8">
      <h2 className="text-5xl font-medium flex flex-col items-center gap-4">
        <span>Funding Alerts.</span>
        <span className="w-1/3 h-1 bg-light-custom-green" />
      </h2>

      <div className="flex items-center justify-between w-1/2 px-24 py-4 font-semibold bg-white shadow-md">
        <h3 className="uppercase underline underline-offset-4">Type</h3>
        <h3 className="uppercase underline underline-offset-4">Category</h3>
        <h3 className="uppercase underline underline-offset-4">Year</h3>
      </div>
    </section>
  );
}

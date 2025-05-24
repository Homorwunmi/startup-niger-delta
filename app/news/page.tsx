'use client';

import NewHero from '@/components/news/new-hero';
import NewUpcoming from '@/components/news/upcoming';
import NewOtherNew from '@/components/news/other-new';

export default function News() {
    return (
        <div className='font-poppins'>
            <NewHero />
            <NewUpcoming />
            <NewOtherNew />
        </div>
    )
    
}
import Image from 'next/image';
import Ad from '../news/ad';

export default function Details() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-[92%] md:w-[87%] mx-auto">
      {/* Main Content */}
      <div className="md:col-span-2">
        <div className="mt-5">
          <h1 className="text-[36px] text-[#153230] font-poppins font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur <br /> ortab porta ac aliquam
            suspendisse donec.
          </h1>

          {/* Meta info */}
          <div className="flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span>Jan 6, 2024</span>
              <span className="mx-2">-</span>
              <span>2 min Read</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-800">
              <Image
                src="/events/share.svg"
                alt="Share"
                width={20}
                height={20}
              />
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[220px] sm:h-[473px] mb-4 rounded-lg overflow-hidden mt-5">
          <Image
            src="/new/plane.png"
            alt="upcoming events"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Body Text */}
        <div>
          <p className="text-[15px] text-[#153230] font-poppins font-bold mt-5">
            Lorem ipsum dolor sit amet consectetur. Massa suspendisse tincidunt
            nunc in justo. Mollis quis ut purus dignissim lobortis at
            pellentesque dignissim mauris. Orci neque ipsum varius vitae sit
            fermentum. Lorem nibh lobortis faucibus lorem neque amet dolor et.
            Amet augue tortor enim pulvinar odio in ut nec tortor. A vulputate
            eget iaculis nulla. Diam vitae nisi neque volutpat sapien proin eu.
          </p>
          <p className="text-[15px] text-[#153230] font-poppins font-normal mt-5">
            Id id egestas lorem sollicitudin morbi aliquet. Feugiat id facilisis
            consectetur porttitor gravida volutpat vestibulum sed. Lacus
            scelerisque viverra gravida suspendisse in amet. Scelerisque mattis
            amet lacus suspendisse sagittis. A in aliquam euismod velit. Libero
            venenatis dapibus nunc non turpis porttitor. Netus ultrices cursus
            sit viverra fermentum quis. Tristique dolor velit vulputate id eu
            adipiscing. Faucibus nisl sit pretium netus massa eros. Eget tempor
            mattis id viverra sit velit duis aliquam.
          </p>
          <p className="text-[15px] text-[#153230] font-poppins font-normal mt-5">
            Pulvinar nisi fringilla vitae facilisi dictumst. Erat egestas
            aliquam sed aliquet dis. Nulla sed sociis maecenas felis. Vel eu
            enim lorem at pellentesque porttitor etiam semper tortor. Lorem
            netus massa morbi quam urna iaculis vitae. Leo egestas vitae at sem
            ut. Tortor sed libero urna at venenatis facilisi malesuada. Diam
            accumsan massa vel porta mauris sit. Pretium lacus nulla semper non
            sed cras faucibus volutpat. Elit suspendisse sed in quisque aliquam
            massa aliquam egestas sit. Risus volutpat ante faucibus sed eu.
            Turpis posuere sem viverra elementum quis. Cursus a tincidunt purus
            et. Vivamus viverra suspendisse pharetra consectetur facilisis
            pulvinar.
          </p>

          <h2 className="text-2xl font-semibold mt-5 text-[#153230]">
            TWO COLUMNS TEXT
          </h2>
          <p className="text-[15px] text-[#153230] font-poppins font-normal mt-5">
            Et integer vehicula amet enim vestibulum donec mauris. Nisi eget
            fames nam pharetra massa. Velit adipiscing nunc vitae iaculis
            maecenas volutpat. Adipiscing non odio sed sed massa et. Augue
            placerat congue aliquam pulvinar sed amet sapien nunc urna. Magna in
            ut ultrices lectus vitae sem dictum dignissim. Purus sit vestibulum
            aenean facilisis. Etiam semper netus id porta lectus. Mattis mattis
            pharetra lacus nam erat. Quis arcu tristique sociis lectus. Tempus
            at ut placerat purus. Bibendum orci vel enim sit. Elit velit mauris
            mattis pharetra sagittis nisi lacus volutpat lorem. Eu pretium odio
            ac duis amet lectus semper. In sed risus euismod eros quis. Lacinia
            sit eget non pretium egestas sed nunc pretium posuere. Ultrices sit
            ut ullamcorper fringilla. Adipiscing turpis viverra massa tellus
            enim a vitae egestas.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#153230] font-poppins mt-4 mb-3">
            UNORDERED LIST
          </h2>

          <p className="text-[15px] text-[#153230] font-poppins font-normal mb-4 leading-relaxed">
            Lorem Ipsum mattis amet lacus suspendisse sagittis. A in aliquam
            euismod velit. Libero venenatis dapibus nunc non turpis porttitor.
            Netus ultrices cursus sit viverra fermentum quis. Tristique dolor
            velit vulputate id eu adipiscing. Faucibus nisl sit pretium netus
            massa eros.
          </p>

          <ul className="list-disc pl-5 text-[15px] text-[#153230] font-poppins font-normal leading-relaxed space-y-1">
            <li>
              Mattis amet lacus suspendisse sagittis. A in aliquam euismod
              velit.
            </li>
            <li>
              Tristique dolor velit vulputate id eu adipiscing. Faucibus nisl
              sit pretium netus massa eros.
            </li>
            <li>Netus ultrices cursus sit viverra fermentum quis.</li>
            <li>
              Etiam semper netus id porta lectus. Mattis mattis pharetra lacus
              nam erat.
            </li>
            <li>Erat egestas aliquam sed aliquet dis.</li>
            <li>
              Faucibus nisl sit pretium netus massa eros. Eget tempor mattis id
              viverra sit velit duis aliquam.
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1">
        <Ad />
      </div>
    </div>
  );
}

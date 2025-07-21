import Image from 'next/image';
import Logo from 'public/images/Logo.svg';

export default function OnboardingNavbar() {
  return (
    <nav>
      <div
        className="flex items-center justify-between px-20 py-4 bg-custom-green-2"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: 'soft-light',
        }}
      >
        <figure className="w-40">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </figure>

        <p className="font-bold flex items-center justify-center gap-4">
          <span>Need Help</span>
          <span className="rounded-full block bg-black text-white w-4 h-4 p-3 flex items-center justify-center">
            ?
          </span>
        </p>
      </div>
    </nav>
  );
}

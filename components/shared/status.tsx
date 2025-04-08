// Status component
function Status() {
  return (
    <section
      className="bg-light-custom-green h-[57px] w-full px-20"
      style={{
        backgroundImage: `url("/home/ecosystem-bg.svg")`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "30%",
      }}
    >
      <div className="h-full flex flex-col items-start justify-center w-full py-2 text-[#153230]">
        <h3 className="font-semibold text-base leading-none font-poppins">
          Status of your application
        </h3>
        <p className="text-sm font-poppins font-normal">
          Your application completion level:{" "}
          <span className="font-semibold">60% </span>
        </p>
      </div>
    </section>
  );
}

export default Status;

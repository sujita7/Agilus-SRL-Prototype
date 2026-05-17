import React from "react";
import diabetes01 from "../../assets/icons/diabetes.svg";
import bone01 from "../../assets/icons/bones.svg";
import womenhealth01 from "../../assets/icons/Autoimmune.svg";
import heart01 from "../../assets/icons/heart.svg";
import liver01 from "../../assets/icons/liver.svg";
import fever02 from "../../assets/icons/fever.svg";
import kidney01 from "../../assets/icons/kidney.svg";
import cancer01 from "../../assets/icons/cancer.svg";
import thyroid01 from "../../assets/icons/thyroid01.svg";

export function HealthConcerns() {
  const concerns = [
    { icon: thyroid01, label: "Thyroid" },
    { icon: diabetes01, label: "Diabetes" },
    { icon: heart01, label: "Heart" },
    { icon: bone01, label: "Bone" },
    { icon: fever02, label: "Fever" },
    { icon: kidney01, label: "Kidney" },
    { icon: liver01, label: "Liver" },
    { icon: womenhealth01, label: "Women Health" },
    { icon: cancer01, label: "Cancer" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F3F7FB] py-10 md:bg-white md:py-24">
      {/* Desktop gradient only */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[110%] w-full bg-[linear-gradient(to_bottom,rgba(207,233,249,0)_0%,rgba(207,233,249,0.6)_20%,rgba(207,233,249,0.8)_50%,rgba(207,233,249,0.6)_80%,rgba(207,233,249,0)_100%)] md:block" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left */}
          <div className="mx-auto flex max-w-[540px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <h2 className="max-w-[280px] text-[24px] font-bold leading-[1.08] tracking-tight text-[#071D37] md:max-w-none md:text-[56px]">
              Explore by Health Concern
            </h2>

            <p className=" hidden sm:block mt-4 max-w-[320px] text-[15px] font-medium leading-7 text-[#6B7280] md:mt-6 md:max-w-[540px] md:text-[18px] md:text-gray-700">
              Select what you're experiencing or concerned about, and we'll
              guide you to the most relevant tests. And make it easier to
              understand your health and take the next step with confidence.
            </p>

            <p className=" block sm:hidden mt-4 text-[14px] font-medium leading-5 text-[#6B7280] sm:hidden md:mt-6 md:max-w-[540px] md:text-[18px] md:text-gray-700">
              Select what you're experiencing or concerned about, and we'll
              guide you to the most relevant tests
            </p>

            {/* Desktop / tablet button */}
            <button className="hover-blue-shadow mt-10 hidden touch-manipulation items-center gap-3 rounded-md bg-gradient-to-b from-[#0B0909] via-[#091120] to-[#1055A8] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] md:inline-flex">
              View All
            </button>
          </div>

          {/* Right Grid */}
          <div className="mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-3 place-items-center gap-x-4 gap-y-5 md:gap-x-4 md:gap-y-3">
              {concerns.map((concern, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={concern.label}
                  className="group flex touch-manipulation flex-col items-center justify-start bg-transparent p-0 text-center transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] focus-visible:scale-[1.04] focus-visible:outline-none"
                >
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-[18px] bg-white shadow-[0_8px_24px_rgba(15,55,95,0.08)] transition-all duration-300 group-hover:-translate-y-1.5 group-active:-translate-y-0.5 md:h-24 md:w-24 md:rounded-none md:bg-transparent md:shadow-none md:group-hover:-translate-y-2">
                    <img
                      src={concern.icon}
                      alt={concern.label}
                      className="h-8 w-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105 md:h-full md:w-full"
                    />
                  </div>

                  <span className="mt-2 max-w-[80px] text-center text-[11px] font-semibold leading-[1.25] text-[#4B5563] md:mt-1 md:max-w-none md:text-[14px] md:text-[#071D37] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                    {concern.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile button */}
            <div className="mt-8 flex justify-center md:hidden">
            <button className="inline-flex min-w-[120px] touch-manipulation items-center justify-center rounded-md bg-gradient-to-b from-[#0B0909] via-[#091120] to-[#1055A8] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_8px_20px_rgba(10,95,150,0.25)] transition-all duration-300 active:scale-[0.96]">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
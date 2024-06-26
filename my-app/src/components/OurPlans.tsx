import PlansSlide from "./ourPlans/PlansSlide";

export default function OurPlans() {
  return (
    <section id="OurPlans" className="flex justify-center items-center py-32">
      <div className="container m-auto px-4">
        <h2 className="text-white max-md:text-2xl text-3xl text-center font-semibold mb-14">
          Nossos Planos
        </h2>
        <PlansSlide />
      </div>
    </section>
  );
}

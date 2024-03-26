import AutoPlay from "./AutoPlay";
import DestinationCard from "./DestinationCard";
import NavCard from "./NavCard";
import WhyUs from "./WhyUs";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";
import data from "../assets/data.js";
import HeroCarousel from "./HeroCarousel.jsx";

export default function HomePage() {
  //   this list is same as navbar, can be reused
  const navList = ["Feb Trip", "March Trip", "Good Friday", "Holi"];

  const TripDetailsCard = (tripList) =>
    tripList.subType.map((destination) => (
      <DestinationCard
        key={destination.name}
        imgSrc={destination.image}
        name={destination.name}
        price={destination.startingPrice}
      />
    ));

  return (
    <div className="min-h-screen w-full items-center justify-center md:px-12 py-24 bg-slate-300">
      <SocialLinks />
      <HeroCarousel />
      {data.map((trip) => (
        <div key={trip.name} className=" items-center justify-start p-12 ">
          <h2 className="text-xl font-semibold ml-12">{trip.name}</h2>
          <div className="flex flex-col px-12 py-6 h-auto">
            <AutoPlay ComponentList={TripDetailsCard(trip)} />
          </div>
        </div>
      ))}

      <NavCard navList={navList} />
      <WhyUs />
      <Testimonials />

      <div className="pt-4">Reach out to us </div>
    </div>
  );
}

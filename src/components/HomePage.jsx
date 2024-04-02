import AutoPlay from "./AutoPlay";
import DestinationCard from "./DestinationCard";
import NavCard from "./NavCard";
import WhyUs from "./WhyUs";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";
import data from "../assets/data.js";
import pastTripData from "../assets/pastTripData.js";
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
        id={destination.id}
        price={destination.startingPrice}
        data={destination}
      />
    ));

  const pastTripsCard = (list) =>
    list.map((itemData) => (
      <a key={itemData.name} href={`/${itemData.name}/gallery`}>
        <div className="gap-4">
          <p className="text-white text-xl fixed ml-4 mt-4 py-1 px-2 rounded-lg font-semibold text-end ">
            {itemData.name}
          </p>
          <img
            src={itemData.imageSrcList[0]}
            className="h-52 w-[100%] rounded-lg object-cover"
          />
        </div>
      </a>
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

      <div className="px-12 py-6 h-auto">
        <AutoPlay ComponentList={pastTripsCard(pastTripData)} />
      </div>

      <NavCard navList={navList} />
      <WhyUs />
      <Testimonials />

      <div className="pt-4">Reach out to us </div>
    </div>
  );
}

import PropTypes from "prop-types";

export default function NavCard({ navList }) {
  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 px-12">
        {" "}
        {navList.map((navItem) => (
          <div
            className="py-6 md:px-8 shadow-md text-center text-white text-lg items-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg bg-cyan-600"
            key={navItem}
          >
            {navItem}
          </div>
        ))}
      </div>
    </>
  );
}

NavCard.propTypes = {
  navList: PropTypes.array.isRequired,
};

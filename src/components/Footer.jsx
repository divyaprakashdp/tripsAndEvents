import { useState } from "react";
import { SlCallOut } from "react-icons/sl";
import Modal from "./Modal";

function Footer1() {
  return (
    <div className="h-[10%] bg-gradient-to-l from-gray-700 via-slate-800 to-slate-950 p-12 flex flex-row gap-12 text-white">
      <div className="text-2xl font-extrabold ">tripsAndEvents</div>

      <div>
        <h2 className="font-bold">Contact Us</h2>
        <p>some address</p>
        <div className="flex flex-row items-center">
          <SlCallOut />
          <p className="ml-2">9898787656, 9898909878, 9098787656</p>
        </div>
      </div>
      <div>
        <p className="font-bold">Terms & Conditions</p>
        <p className="font-bold">Cancellation Policy</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const footerdata = [
    {
      title: "About Us",
      content: (
        <div className="bg-slate-900 text-White text-lg z-20 w-[70%] h-[90%] mt-12 object-cover rounded-3xl ">
          <h2 className="font-bold">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            possimus sunt reprehenderit enim omnis qui, quas iure quibusdam
            soluta unde fugiat. Explicabo totam unde nobis ratione voluptatibus
            sunt error temporibus. Fugiat dolorem numquam placeat praesentium
            dolor quam molestias ut quis, est error provident similique iure
            earum porro alias, ratione accusamus!
          </p>
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div className="bg-black text-White text-lg z-20 w-[70%] h-[90%] mt-12 object-cover items-center text-center justify-center rounded-3xl">
          <h2 className="font-bold">Contact Us</h2>
          <p>some address</p>
          <div className="flex flex-row items-center ">
            <SlCallOut />
            <p className="ml-2">9898787656, 9898909878, 9098787656</p>
          </div>
        </div>
      ),
    },
    {
      title: "T&C",
      content: (
        <div className="bg-slate-900 text-White text-lg z-20 w-[70%] h-[90%] mt-12 object-cover rounded-3xl ">
          <h2 className="font-bold">Terms and Conditions</h2>
          <p>
            Terms & Conditions Full Payment of the trip cost must be made before
            the trip begins. The IDs shall all be verified before boarding. No
            boarding shall be entertained without a valid Govt. ID. No refunds
            shall be made towards any inclusion(s) not availed by the Client.
            Travelers must take care of their luggage & belongings. The
            management shall not be accountable for missing items along the
            tour.
          </p>
        </div>
      ),
    },
    {
      title: "Cancellation Policy",
      content: (
        <div className="bg-slate-900 text-White text-lg z-20 w-[70%] h-[90%] mt-12 object-cover rounded-3xl ">
          <h2 className="font-bold">Cancellation Policy</h2>
          <p>
            Terms & Conditions Full Payment of the trip cost must be made before
            the trip begins. The IDs shall all be verified before boarding. No
            boarding shall be entertained without a valid Govt. ID. No refunds
            shall be made towards any inclusion(s) not availed by the Client.
            Travelers must take care of their luggage & belongings. The
            management shall not be accountable for missing items along the
            tour.
          </p>
        </div>
      ),
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (tab) => {
    setOpenModal(true);
    setSelectedTab(tab);
  };
  return (
    <footer className="bg-gray-900 text-white py-6 w-full bg-gradient-to-l from-gray-700 via-slate-800 to-slate-950 p-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; 2024 <em>tripsAndEvents</em>. All rights reserved.
        </p>
        <nav className="mt-4">
          <ul className="flex justify-center">
            {footerdata.map((footerItem) => (
              <li key={footerItem.title} className="mr-4">
                <p
                  className="text-white hover:text-gray-300"
                  onClick={() => handleClick(footerItem.title)}
                >
                  {footerItem.title}
                </p>
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                  {footerItem.title === selectedTab && footerItem.content}
                </Modal>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

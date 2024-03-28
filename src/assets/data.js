import ootyImg from "../assets/ooty.jpg";
import goaImg from "../assets/goa.jpg";
import manaliImg from "../assets/manali.jpg";

const data = [
  {
    name: "Weekend Trips",
    subType: [
      {
        id: "ooty_weekend",
        name: "Ooty",
        image: ootyImg,
        startingPrice: 4999,
        price: 5999,
        roomSelection: true,
        roomPrices: {
          quadShare: 7999,
          tripleShare: 8999,
          doubleShare: 9999,
          single: 15000,
        },
        tag: "Weekend Trip",
        datesAvailable: ["March 18-20", "March 20-27", "March 29-30"],
        description: {
          about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim id, voluptate repellat odio deserunt culpa sunt expedita, incidunt iure accusantium minus necessitatibus labore qui aliquid dolorem aspernatur doloribus possimus. Libero, sunt ipsam! Odio libero quo perferendis adipisci suscipit nam asperiores deserunt officia voluptates aperiam. Illo enim sint beatae soluta dolore ipsam consectetur, vero aspernatur repellat rerum, odio hic cumque minima modi ducimus, deleniti quisquam autem sequi quas illum laborum. Vitae quod expedita obcaecati facere. Eveniet debitis deserunt aliquam vero labore, laboriosam, sit commodi praesentium quibusdam fugit, in eius quis repellendus? Deserunt ea adipisci id ad ducimus aliquam velit fugiat harum ullam! Placeat error maxime vero modi iure aperiam, architecto est nihil voluptatem nulla reprehenderit culpa quaerat provident nam corporis, alias sint suscipit harum nisi minima asperiores blanditiis? Laborum omnis laboriosam blanditiis, quaerat voluptas deserunt a dolore quae facilis nam, quia ab sequi? Labore temporibus facere voluptatibus dolorum omnis libero quam, obcaecati quisquam soluta enim laudantium? Similique commodi odio quam non quia, saepe autem consectetur vel quaerat blanditiis molestiae laboriosam magnam doloremque temporibus praesentium deleniti odit vero. Quasi ex iure nisi id, voluptates dolorem nam molestiae temporibus laborum, accusamus dicta maiores harum blanditiis ducimus neque tempore unde a alias sequi?",
          itenarary: [
            {
              topic: "Day 0: Okay Tadaa Byee Delhi!",

              detailArray: [
                "We will leave Delhi around 6 pm in a luxury tempo traveler/Volvo Bus/Car.",

                "Refreshments like water bottles and eatables will be provided at the start of the journey.",

                "Our first major stop will be for dinner.",

                "Antakshri, Damsharas, Dancing sessions, and many interactive games throughout the journey.",
              ],
            },
            {
              topic: "Day 1: Reach Tirthan Valley",

              detailArray: [
                "We will wish each other by “Subahh Hogyii Yaar! Ab To Sojao xD, Kitni Der Mein Pahuchenge “ instead of Good morning.",

                "Will reach Tirthan around 11 in the morning.",
                "Check-in into camps/hotel and relax in the lap of nature for a while",
                "Click riverside photos and then leave for Choiee waterfall.",
                "Explore market and back to campsite",
                "Come back to hotel and enjoy Bonfire and music",
                "Dinner and overnight stay at hotel",
              ],
            },
            {
              topic: "Day 2: Reach Some Valley",

              detailArray: [
                "We will wish each other Good morning.",

                "Will reach Some around 11:30 in the morning.",
                "Check-in into camps/hotel and relax in the lap of nature for a while",
                "Click riverside photos and then leave for Choiee waterfall.",
                "Explore market and back to campsite",
                "Come back to hotel and enjoy Bonfire and music",
                "Dinner and overnight stay at hotel",
              ],
            },
          ],
          policy: [
            {
              topic: "Inclusions",

              detailArray: [
                "Travel by luxury tempo traveler/Volvo bus",

                "Refreshments during the journey",
                "Meals: 2 Breakfasts 2 Dinners",
                "Accommodation ( Quad Basis )",
                "Guides charges and all other permits",
              ],
            },
            {
              topic: "Exclusions",

              detailArray: [
                "Travel Insurance",
                "Hard drinks and any other snacks",
                "Expenses of personal nature",
                "Anything not mentioned in inclusions",
              ],
            },
            {
              topic: "Cancellation Policy",

              detailArray: [
                "These are non-refundable amounts as per the current components attached. In the case of component change/modifications, the policy will change accordingly.",

                "Please check the exact cancellation and date change policy on the review page before proceeding further.",

                "Please note, TCS once collected cannot be refunded in case of any cancellation / modification. You can claim the TCS amount as adjustment against Income Tax payable at the time of filing the return of income.",

                "Cancellation charges shown is exclusive of all taxes and taxes will be added as per applicable.",
              ],
            },
            {
              topic: "Package Date Change Policy",

              detailArray: [
                "These are non-refundable amounts as per the current components attached. In the case of component change/modifications, the policy will change accordingly.",

                "Please check the exact cancellation and date change policy on the review page before proceeding further.",
              ],
            },
          ],
        },
      },
      {
        name: "Goa",
        image: goaImg,
        startingPrice: 5499,
        price: 5999,
        tag: "Weekend Trip",
        datesAvailable: ["March 18-20", "March 20-27", "March 29-30"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim id, voluptate repellat odio deserunt culpa sunt expedita, incidunt iure accusantium minus necessitatibus labore qui aliquid dolorem aspernatur doloribus possimus. Libero, sunt ipsam! Odio libero quo perferendis adipisci suscipit nam asperiores deserunt officia voluptates aperiam. Illo enim sint beatae soluta dolore ipsam consectetur, vero aspernatur repellat rerum, odio hic cumque minima modi ducimus, deleniti quisquam autem sequi quas illum laborum. Vitae quod expedita obcaecati facere.",
      },
      {
        name: "Manali",
        image: manaliImg,
        startingPrice: 7499,
        price: 5999,
        tag: "Weekend Trip",
        datesAvailable: ["March 18-20", "March 20-27", "March 29-30"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim id, voluptate repellat odio deserunt culpa sunt expedita, incidunt iure accusantium minus necessitatibus labore qui aliquid dolorem aspernatur doloribus possimus. Libero, sunt ipsam! Odio libero quo perferendis adipisci suscipit nam asperiores deserunt officia voluptates aperiam. Illo enim sint beatae soluta dolore ipsam consectetur, vero aspernatur repellat rerum, odio hic cumque minima modi ducimus, deleniti quisquam autem sequi quas illum laborum. Vitae quod expedita obcaecati facere.",
      },
      {
        name: "Ooty1",
        image: ootyImg,
        price: 5999,
        tag: "Weekend Trip",
        datesAvailable: ["March 18-20", "March 20-27", "March 29-30"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim id, voluptate repellat odio deserunt culpa sunt expedita, incidunt iure accusantium minus necessitatibus labore qui aliquid dolorem aspernatur doloribus possimus. Libero, sunt ipsam! Odio libero quo perferendis adipisci suscipit nam asperiores deserunt officia voluptates aperiam. Illo enim sint beatae soluta dolore ipsam consectetur, vero aspernatur repellat rerum, odio hic cumque minima modi ducimus, deleniti quisquam autem sequi quas illum laborum. Vitae quod expedita obcaecati facere.",
        startingPrice: 4999,
      },
      {
        name: "Goa1",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali1",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
      {
        name: "Ooty2",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa2",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali2",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
    ],
  },
  {
    name: "Upcoming Trips",
    subType: [
      {
        name: "Ooty",
        image: ootyImg,
        startingPrice: 4999,
        description: "Some description1",
      },
      {
        name: "Goa",
        image: goaImg,
        startingPrice: 5499,
        description: "Some description2",
      },
      {
        name: "Manali",
        image: manaliImg,
        startingPrice: 7499,
        description: "Some description3",
      },
      {
        name: "Ooty1",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa1",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali1",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
      {
        name: "Ooty2",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa2",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali2",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
    ],
  },
  {
    name: "Backpacking Trips",
    subType: [
      {
        name: "Ooty",
        image: ootyImg,
        startingPrice: 4999,
        description: "Some description1",
      },
      {
        name: "Goa",
        image: goaImg,
        startingPrice: 5499,
        description: "Some description2",
      },
      {
        name: "Manali",
        image: manaliImg,
        startingPrice: 7499,
        description: "Some description3",
      },
      {
        name: "Ooty1",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa1",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali1",
        image: manaliImg,
        description: "Some description3",
      },
      {
        name: "Ooty2",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa2",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali2",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
    ],
  },
  {
    name: "Customized Trips",
    subType: [
      {
        name: "Ooty",
        image: ootyImg,
        startingPrice: 4999,
        description: "Some description1",
      },
      {
        name: "Goa",
        image: goaImg,
        startingPrice: 5499,
        description: "Some description2",
      },
      {
        name: "Manali",
        image: manaliImg,
        startingPrice: 7499,
        description: "Some description3",
      },
      {
        name: "Ooty1",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      {
        name: "Goa1",
        image: goaImg,
        description: "Some description2",
        startingPrice: 4999,
      },
      {
        name: "Manali1",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
      {
        name: "Ooty2",
        image: ootyImg,
        description: "Some description1",
        startingPrice: 4999,
      },
      { name: "Goa2", image: goaImg, description: "Some description2" },
      {
        name: "Manali2",
        image: manaliImg,
        description: "Some description3",
        startingPrice: 4999,
      },
    ],
  },
];

export default data;

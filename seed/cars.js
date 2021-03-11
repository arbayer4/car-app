const db = require("../db/connection");
const User = require("../models/user");
const Car = require("../models/car");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const user1 = new User({
    username: "person5",
    email: "person5@gmail.com",
    phone: "2604220123",
    password_digest:
      "$2b$11$zd3.fNsMpXFPVKUwxDyCR.JVkzFwGUZiF1HrbQh5ir8u9q1UqNhfS",
  });
  const cars = [
    {
      imgURL: [
        "https://images.unsplash.com/photo-1521462627888-de71aacd558b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1521657215744-34dc4f384a17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2722&q=80",
        "https://images.unsplash.com/photo-1521657286746-db1bebb1900a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      ],
      year: "1957",
      make: "Cheverlot",
      model: "Bel Air",
      description:
        " A two-door hard top sedan version of the 1957 Chevrolet. The 1957 Chevrolet is a car that was introduced by Chevrolet in September 1956 for the 1957 model year. It was available in three series models: the upscale Bel Air, the mid-range Two-Ten, and the One-Fifty. A two-door station wagon, the Nomad, was produced as a Bel Air model.",
      price: "120,000",
      vin: "--",
      mileage: "110,000",
      engine: "",
      zipcode: "37201",
      exteriorColor: "baby blue",
      interiorColor: "baby blue and creme",
      doors: "two-door",
      transmission: "3-speed manual",
      owner: user1,
    },
    {
      imgURL: ["https://i.imgur.com/1fKboPc.jpg"],
      year: "1959",
      make: "Cheverlot",
      model: "Bel Air",
      description:
        " A two-door hard top sedan version of the 1959 Chevrolet. It was available in three series models: the upscale Bel Air, the mid-range Two-Ten, and the One-Fifty. A two-door station wagon, the Nomad, was produced as a Bel Air model.",
      price: "120,000",
      vin: "--",
      mileage: "65,000",
      engine: "I6",
      zipcode: "90210",
      exteriorColor: "blue",
      interiorColor: "baby blue and creme",
      doors: "two-door",
      transmission: "2-speed powerglide auto",
      owner: user1,
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1613933432556-b13effb47984?ixid=MXwxMjA3fDB8MHxwaG90[…]VufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      year: "1925",
      make: "Ford",
      model: "Model T",
      description:
        "-1942-vintage 274 cu. in. Mercury flathead V8 engine with triple carburetors -1939 Lincoln-Zephyr three-speed manual transmission -Dropped tubular front axle with transverse leaf spring -1934 Ford rear end housing with Halibrand quick-change center section and transverse leaf spring, -1939 Ford four-wheel hydraulic drum brakes -Wheelbase: 100- Best Early Altered T Roadster at 2008 Grand National Roadster Show- A multiple award winner in period shows, beginning in 1957- First built in 1952 and featured in Hot Rod in 1954- Featured in many more period and recent magazine articles Wally Olson first transformed this 1927 T-Roadster into a show-stopping hot rod in 1952, intended as a family project with his sons. In September 1954, it made its magazine debut in a Hot Rod article entitled Lil Beau T. Bill Scott purchased the car in 1954-1955, adding the fenders, headlights, windshield and other items required for street legality. The first evidence of its Black Widow moniker dates to the August 1957 issue of Rodding and Re-styling, with an inventory of Bill Scott s mods, including a new full house flathead V8 and front suspension modifications including a tubular axle and shocks. Dean Jeffries applied the pinstriping and graphics. At the 1957 Sacramento Automata, the T won the award for Best Roadster, and by the time the 1959 Hot Rod Annual was published, the name Black Widow stuck. Bill Scott passed away around 1987, and for several years, his Black Widow deteriorated. In 2005, Richard Riddell, who bravely commenced its complete restoration, found the car. Riddell s work was extensive, with careful attention paid to reliability and safety of operation. The doors of the original steel body were welded shut, with the body and paint by Showtime Customs, the frame restored and powder-coated by Capps Powder Coat, the upholstery fitted by Brent s and brightwork handled by Ace Plating. The hot V8 engine, a circa-1942 Mercury 274-cubic inch flathead, was built by RPM Machine and equipped with Edelbrock finned aluminum heads and triple carburetors. The drivetrain comprises a 1939 Lincoln-Zephyr tranny, a 1934 Ford rear end, a Halibrand quick-change center, an enclosed drive shaft and a 1937 Ford tube axle. Braking is by 1939 Ford hydraulic drums all around, while 16-inch wheels and V8 hubcaps form the rolling stock. In July 2008, the Hot Rod Deluxe article entitled Tangled Web described how Richard Riddell discovered and restored the Black Widow over 3,400 hours to its 1950s glory. In 2008, it won Best Early Altered T Roadster at the Grand National Roadster Show. Sadly, Richard passed away shortly after finishing the project, but happily, he was able to see the car s return to prominence.",
      price: "$21,000",
      vin: "--",
      mileage: "456 miles",
      engine: "4 cylinder",
      doors: "2",
      transmission: "manual",
      interiorColor: "tan",
      exteriorColor: "blue",
      owner: user1,
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1554697713-4e7256fbc82e?ixid=MXwxMjA3fDB8MHxwaG90by1[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      year: "1927",
      make: "Ford",
      model: "Model T",
      description: `Gateway Classic Cars of Atlanta is proud to present a clean and custom 1925 Ford T-bucket. This little beauty is a hot rodders dream, Lightweight, V8, automatic, and a roadster! Powering this little 25 Ford sale is a 348 cubic inch V8 engine with 3 deuces. With only 1,000 miles since rebuild this V8 is hot to trot. Backing the peppy healthy block is a TH350 3-speed automatic transmission. With a dana rear end and 3.40 rear gears, hooking up is no problem. The exterior is a great looking matte black. The frame itself is painted Black, adding a touch of old school hot rod to the mix. Simple and clean-cut, this hot rod Ford has subtle customizations that make it stand out in a crowd. The interior is just as simple and cool, with a comfortable Black vinyl interior. The bench begs to be sat in, as they shifter begs to be grabbed and played with. Nows your chance to own that hot rod you always wished you'd had, without the costly expense of having to build it yourself! Ready to show and go, this Ford roadster for sale is one fun topless cruiser!`,
      price: "$35,000",
      vin: "--",
      mileage: "44 miles",
      engine: "4 cylinder",
      doors: "2",
      transmission: "manual",
      interiorColor: "tan",
      exteriorColor: "green",
      own,
    },
    {
      imgURL: [
        "https://images.unsplash.com/photo-1594055218605-87dfde0777e5?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80",
        "https://images.unsplash.com/photo-1594055227781-acac5da4764d?ixid=MXwxMjA3fDB8MHxwaG90[…]VufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        "https://images.unsplash.com/photo-1594055232666-262e338bb407?ixlib=rb-1.2.1&ixid=MXwxM[…]0by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80",
      ],
      year: "1969",
      make: "Cheverlot",
      model: "Camaro SS",
      description:
        "Mint condition Camaro SS. Meticulously maintained, with complete engine overhaul last year. This baby purrs. White racing stripes add a nice pop. Original interior. Straight 6 engine.",
      price: "45,000",
      vin: "--",
      mileage: "65,000",
      engine: "Straight 6",
      zipcode: "32789",
      exteriorColor: "Blue",
      interiorColor: "black",
      doors: "two-door",
      transmission: "4-speed manual",
    },
    {
      imgURL: [
        "https://images.unsplash.com/photo-1564435147636-8ca0966b0275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80",
        "https://images.unsplash.com/photo-1553511489-bec025f04710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80",
        "https://images.unsplash.com/photo-1579192700240-ffa29752a615?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      ],
      year: "1965",
      make: "Ford",
      model: "Mustang",
      description:
        "1965 brought few changes for the Mustang. The biggest change was the availability of a new fastback model, which was to become the basis for Carroll Shelby’s G.T. 350. The 120 horsepower, 200 cid 6 cylinder engine replaced the 170 cid 6 cylinder, the 289-2V, 200 horsepower V-8 replaced the 260-2V, the 289-4V was upgraded to 225 horsepower, and the 289-4V hi-po remained unchanged. Other changes for 1965 included: an alternator instead of a generator, relocation of the oil filler, integral power steering pump and reservoir (most 64½’s had a remote mounted reservoir), a wire retaining ring was added to the gas cap, the horns were smaller and relocated, and the interior carpet was continued up the sides of the rocker panel and under the sill plate. A new interior option was added, the interior decor group (known as the pony interior), which featured special seat covers with running horses across the back, special interior door panes with integral arm rests and pistol grip door handles, five gauge instrument panel, woodgrain steering wheel, and woodgrain appliques on the instrument cluster, glovebox, and optionally on the center console. Another option introduced in April of 1965 was the GT equipment group. Available only with one of the two four barrel engines, the GT group included five-dial instrumentation, disc brakes, larger sway bars, quicker steering ratio, dual exhaust which exited through the rear valance panel, grill mounted fog lights, and special lower body side stripes. A total of 559,451 Mustangs were produced for the 1965 model year.",
      price: "55,000",
      vin: "--",
      mileage: "79,000",
      engine: "8 Cylinder",
      zipcode: "37201",
      exteriorColor: "Red",
      interiorColor: "Black",
      doors: "two-door",
      transmission: "4-speed manual",
    },
  ];
  await Car.insertMany(cars);
  console.log("Created Cars!");
};
const run = async () => {
  await main();
  db.close();
};

run();

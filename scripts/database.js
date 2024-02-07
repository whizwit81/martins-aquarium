const database = {
    fish: [
    {
       
      id: 1,
      image: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/04/coelacanth-side-view-blue-featured.jpg",
      name: "Coelacanth",
      species: "Genus Latimeria",
      length: 9,
      location: "Deep Sea",
      description: "Ancient fish species once thought to be extinct, with lobed pectoral fins.",
      foodType: "Various marine organisms"
      
    },
    {
      id: 2,
      image: "https://c02.purpledshub.com/uploads/sites/41/2020/05/Axolotl-salamander-a244f13.jpg",
      name: "Axolotl Fish",
      species: "Ambystomatidae",
      length: 10,
      location: "Cave Systems",
      description: "Unusual fish with external gills and the ability to regenerate body parts.",
      foodType: "Small invertebrates"
    },
    {
        id: 3,
        image: "https://crittersresearch.files.wordpress.com/2015/09/best-of-dauin_ornateghostpipe_redwhitepair1.jpg",
        name: "Ghost Pipefish",
        species: "Solenostomus",
        length: 50,
        location: "Tropical Reefs",
        description: "Delicate and camouflaged fish resembling a piece of drifting seaweed.",
        foodType: "Small crustaceans"
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Synchiropus_splendidus_2_Luc_Viatour_cropped.png",
        name: "Mandarinfish",
        species: "Synchiropus splendidus",
        length: 27,
        location: "Coral Reefs",
        description: "Colorful fish with psychedelic patterns and a slow, hovering swimming style.",
        foodType: "Small invertebrates and zooplankton"
    },
    {
        id: 5,
        image: "https://www.neaq.org/wp-content/uploads/2023/05/exhibit-seadragon-1260x678-1.jpg",
        name: "Leafy Sea Dragon",
        species: "Phycodurus eques",
        length: 18,
        location: "Southern and Western Australia",
        description: "Seahorse relative with leaf-like appendages for camouflage.",
        foodType: "Small crustaceans and plankton"
    },
    {
        id: 6,
        image: "https://i.ytimg.com/vi/GSx4AwN2sdU/hqdefault.jpg",
        name: "Rhinochimera",
        species: "Africana Compagno",
        length: 48,
        location: "Deep Sea",
        description: "Deep-sea fish with a distinctive, elongated snout resembling a rhinoceros horn.",
        foodType: "Small fish and squid"
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu19NVvkoFQW_pl_WKYneIuTqTUYAFk7WIGXzP-kg8fpydIY1369GiIO4qneFqvCEgsvY&usqp=CAU",
        name: "Sapphire Goby",
        species: "Goby",
        length: 7,
        location: "Underwater Caverns",
        description: "A striking blue fish with iridescent patterns, dwelling in the depths of underwater caverns, rarely spotted by divers.",
        foodType: "Tiny marine organisms and larvae"
    },
    {
        id: 8,
        image: "https://pbs.twimg.com/media/F4yHJbtWAAEmIAW.jpg:large",
        name: "Barreleye Fish",
        species: "Opisthoproctidae",
        length: 22,
        location: "Deep Sea",
        description: "Deep-sea fish with a transparent head and tubular eyes that can rotate.",
        foodType: "Small fish and jellyfish"
    },
    {
        id: 9,
        image: "https://oceananimals.org/wp-content/uploads/2021/05/Royal-Angelfish.jpg",
        name: "Regal Angelfish",
        species: "Pygoplites diacanthus",
        length: 6,
        location: "Indo-Pacific Oceans",
        description: "The Regal Angelfish is a beautiful species with vibrant blue and yellow coloration and distinctive stripes. It is commonly found in coral-rich areas of the Indo-Pacific oceans.",
        foodType: "Sponges, small invertebrates, and algae"
    },
    {
        id: 10,
        image: "https://www.cousteau.org/wp-content/uploads/2019/07/parrotfish.jpg",
        name: "Rainbow Parrotfish",
        species: "Scarus guacamaia",
        length: 27,
        location: "Tropical Coral Reefs",
        description: "Vibrantly colored fish with a beak-like mouth, known for its crucial role in maintaining coral reef health by consuming algae.",
        foodType: "Algae and small invertebrates"
      }
],
        tips: [
        {
          id: 1,
          tip: "Perform regular water tests to monitor water quality (pH, ammonia, nitrite, nitrate).",
        },
        {
          id: 2,
          tip: "Maintain a consistent water temperature suitable for your fish species.",
        },
        {
          id: 3,
          tip: "Clean the fishtank regularly by removing debris and performing partial water changes.",
        },
        {
          id: 4,
          tip: "Provide appropriate filtration to keep the water clean and clear.",
        },
        {
          id: 5,
          tip: "Feed your fish a balanced and species-appropriate diet.",
        },
        {
          id: 6,
          tip: "Decorate the tank with suitable ornaments and hiding spots for fish to feel secure.",
        },
        {
          id: 7,
          tip: "Avoid overstocking the tank; consider the size and compatibility of fish.",
        },
        {
          id: 8,
          tip: "Quarantine new fish before introducing them to the main tank to prevent diseases.",
        },
        {
          id: 9,
          tip: "Monitor fish behavior for signs of illness or stress.",
        },
        {
          id: 10,
          tip: "Educate yourself on the specific care requirements of your fish species.",
        }
    ],
      travel: [
      {
        image: "https://media.nomadicmatt.com/2021/ozreef.jpg",
        place: "Great Barrier Reef",
        quote: "Dive into the colors of the Great Barrier Reef and discover a world of marine wonders.",
        
      },
      {
        image: "https://www.scidev.net/asia-pacific/wp-content/uploads/sites/4/2019/08/Coral_reefs_flickr_NOAA_Ocean_Explorer_1_1024x768.jpg",
        place: "Palau",
        quote: "Explore the pristine waters of Palau, where biodiversity meets the beauty of the underwater landscape.",
        
      },
      {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/e4/f2/vivanta-by-taj-coral.jpg?w=700&h=-1&s=1",
        place: "Maldives",
        quote: "Descend into the crystal-clear waters of the Maldives and witness the magic beneath the surface.",
        
      },
      {
        image: "https://i0.wp.com/wildcoast.org/wp-content/uploads/2018/06/BAJA_MG_2226Damisela-y-gorgonaceos.jpg?fit=1000%2C660&ssl=1",
        place: "Baja California, Mexico",
        quote: "Dive in Baja California and experience the thrill of harvesting seafood in the Sea of Cortez.",
        
      },
      {
        image: "https://www.zubludiving.com/images/Indonesia/West-Papua/Raja-Ampat/Raja-Ampat-Wayag-Diving.jpg",
        place: "Raja Ampat, Indonesia",
        quote: "Immerse yourself in the breathtaking diversity of Raja Ampat, a paradise for underwater enthusiasts.",
        
      }
    ]
    
}





export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
 }

 export const getTravel = () => {
    return database.travel.map(travel => ({...travel}))
}
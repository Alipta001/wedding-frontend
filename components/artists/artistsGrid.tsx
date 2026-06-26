// import ArtistCard from "./artitsCard";

// const artists = [
//   {
//     name: "Debendra Nath",
//     craft: "Weavers of Shantipur",
//     image: "/images/artists/artist1.png",
//   },
//   {
//     name: "Amal Karmakar",
//     craft: "Brasssmiths of Bishnupur",
//     image: "/images/artists/artist2.png",
//   },
//   {
//     name: "Mala Pal",
//     craft: "Potters of Kumartuli",
//     image: "/images/artists/artist3.png",
//   },
// ];

// export default function ArtistsGrid() {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-5">

//         <h2 className="text-4xl font-serif text-[#7A1D22] mb-12">
//           Meet Our Artisans
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {artists.map((artist) => (
//             <ArtistCard key={artist.name} artist={artist} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import ArtistCard from "./artitsCard";

// const artists = [
//   {
//     name: "Debendra Nath",
//     craft: "Weavers",
//     image: "/images/artists/artist1.png",
//   },
//   {
//     name: "Amal Karmakar",
//     craft: "Brasssmiths",
//     image: "/images/artists/artist2.png",
//   },
//   {
//     name: "Mala Pal",
//     craft: "Potters",
//     image: "/images/artists/artist3.png",
//   },
//   {
//     name: "Shyamlal Sutradhar",
//     craft: "Woodcraft",
//     image: "/images/artists/artist3.png",
//   },
//   {
//     name: "Rupa Sen",
//     craft: "Jewelry",
//     image: "/images/artists/artist2.png",
//   },
//   {
//     name: "Anirban Das",
//     craft: "Weavers",
//     image: "/images/artists/artist1.png",
//   },
// ];

// const filters = [
//   "All",
//   "Weavers",
//   "Brasssmiths",
//   "Potters",
//   "Woodcraft",
//   "Jewelry",
// ];

// export default function ArtistsGrid() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [visible, setVisible] = useState(6);

//   const filteredArtists = artists.filter((artist) => {
//     const matchesFilter =
//       activeFilter === "All" ||
//       artist.craft === activeFilter;

//     const matchesSearch =
//       artist.name
//         .toLowerCase()
//         .includes(search.toLowerCase()) ||
//       artist.craft
//         .toLowerCase()
//         .includes(search.toLowerCase());

//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <section className="py-20 bg-[#F6F1EA]">
//       <div className="max-w-7xl mx-auto px-5">
//         {/* Heading */}

//         <div className="text-center mb-12">
//           <span className="uppercase tracking-[4px] text-[#A57C33] text-sm">
//             MASTER CRAFTSMEN
//           </span>

//           <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-[#7A1D22]">
//             Meet Our Artisans
//           </h2>

//           <p className="mt-4 text-[#564240] max-w-2xl mx-auto">
//             Discover skilled craftsmen preserving
//             centuries-old traditions through handmade
//             creations.
//           </p>
//         </div>

//         {/* Search */}

//         <div className="max-w-lg mx-auto mb-8">
//           <div className="relative">
//             <Search
//               size={18}
//               className="
//                 absolute
//                 left-4
//                 top-1/2
//                 -translate-y-1/2
//                 text-gray-400
//               "
//             />

//             <input
//               type="text"
//               placeholder="Search artisans..."
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//               className="
//                 w-full
//                 pl-12
//                 pr-4
//                 py-4
//                 rounded-2xl
//                 bg-white
//                 border
//                 border-[#E5D9CB]
//                 outline-none
//                 focus:border-[#A57C33]
//               "
//             />
//           </div>
//         </div>

//         {/* Filters */}

//         <div
//           className="
//             flex
//             flex-wrap
//             justify-center
//             gap-3
//             mb-10
//           "
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() =>
//                 setActiveFilter(filter)
//               }
//               className={`
//                 px-5 py-3
//                 rounded-full
//                 text-sm
//                 transition-all

//                 ${
//                   activeFilter === filter
//                     ? "bg-[#7A1D22] text-white"
//                     : "bg-white text-[#564240] hover:bg-[#EEE4D8]"
//                 }
//               `}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Results Count */}

//         <div className="mb-8 text-center text-[#564240]">
//           {filteredArtists.length} artisans found
//         </div>

//         {/* Grid */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredArtists
//             .slice(0, visible)
//             .map((artist) => (
//               <ArtistCard
//                 key={artist.name}
//                 artist={artist}
//               />
//             ))}
//         </div>

//         {/* Empty State */}

//         {filteredArtists.length === 0 && (
//           <div className="text-center py-20">
//             <h3 className="text-2xl font-serif text-[#7A1D22]">
//               No artisans found
//             </h3>

//             <p className="mt-3 text-[#564240]">
//               Try changing filters or search terms.
//             </p>
//           </div>
//         )}

//         {/* Load More */}

//         {visible < filteredArtists.length && (
//           <div className="flex justify-center mt-14">
//             <button
//               onClick={() =>
//                 setVisible((prev) => prev + 3)
//               }
//               className="
//                 px-8
//                 py-4
//                 rounded-xl
//                 bg-[#7A1D22]
//                 text-white
//                 hover:bg-[#65171B]
//                 transition
//               "
//             >
//               View More Artisans
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import ArtistCard from "./artitsCard";

// const artists = [
//   {
//     name: "Debendra Nath",
//     craft: "Weavers",
//     image: "/images/artists/artist1.png",
//   },
//   {
//     name: "Amal Karmakar",
//     craft: "Brasssmiths",
//     image: "/images/artists/artist2.png",
//   },
//   {
//     name: "Mala Pal",
//     craft: "Potters",
//     image: "/images/artists/artist3.png",
//   },
//   {
//     name: "Shyamlal Sutradhar",
//     craft: "Woodcraft",
//     image: "/images/artists/artist3.png",
//   },
//   {
//     name: "Rupa Sen",
//     craft: "Jewelry",
//     image: "/images/artists/artist2.png",
//   },
//   {
//     name: "Anirban Das",
//     craft: "Weavers",
//     image: "/images/artists/artist1.png",
//   },
// ];

// const filters = [
//   "All",
//   "Weavers",
//   "Brasssmiths",
//   "Potters",
//   "Woodcraft",
//   "Jewelry",
// ];

// export default function ArtistsGrid() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [visible, setVisible] = useState(6);

//   const filteredArtists = artists.filter((artist) => {
//     const matchesFilter =
//       activeFilter === "All" ||
//       artist.craft === activeFilter;

//     const matchesSearch =
//       artist.name
//         .toLowerCase()
//         .includes(search.toLowerCase()) ||
//       artist.craft
//         .toLowerCase()
//         .includes(search.toLowerCase());

//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <section className="py-16 lg:py-20 bg-[#F6F1EA]">
//       <div className="max-w-7xl mx-auto px-4 lg:px-5">
        
//         {/* Heading */}
//         <div className="text-center mb-10 lg:mb-12">
//           <span className="uppercase tracking-[4px] text-[#A57C33] text-sm">
//             MASTER CRAFTSMEN
//           </span>

//           <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif text-[#7A1D22]">
//             Meet Our Artisans
//           </h2>

//           <p className="mt-4 text-[#564240] max-w-2xl mx-auto">
//             Discover skilled craftsmen preserving centuries-old traditions
//             through handmade creations.
//           </p>
//         </div>

//         {/* Search */}
//         <div className="max-w-lg mx-auto mb-8">
//           <div className="relative">
//             <Search
//               size={18}
//               className="
//                 absolute
//                 left-4
//                 top-1/2
//                 -translate-y-1/2
//                 text-gray-400
//               "
//             />

//             <input
//               type="text"
//               placeholder="Search artisans..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="
//                 w-full
//                 pl-12
//                 pr-4
//                 py-4
//                 rounded-2xl
//                 bg-white
//                 border
//                 border-[#E5D9CB]
//                 outline-none
//                 focus:border-[#A57C33]
//               "
//             />
//           </div>
//         </div>

//         {/* Mobile Scrollable Filters */}
//         <div className="mb-10">
//           <div
//             className="
//               flex
//               lg:flex-wrap
//               lg:justify-center
//               gap-3

//               overflow-x-auto
//               lg:overflow-visible

//               pb-2
//               px-1

//               snap-x
//               scrollbar-hide
//               whitespace-nowrap
//             "
//           >
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`
//                   flex-shrink-0
//                   snap-start

//                   px-5
//                   py-3
//                   rounded-full
//                   text-sm
//                   font-medium
//                   transition-all

//                   ${
//                     activeFilter === filter
//                       ? "bg-[#7A1D22] text-white shadow-md"
//                       : "bg-white text-[#564240] hover:bg-[#EEE4D8]"
//                   }
//                 `}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-8 text-center text-[#564240]">
//           {filteredArtists.length} artisans found
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredArtists
//             .slice(0, visible)
//             .map((artist) => (
//               <ArtistCard
//                 key={artist.name}
//                 artist={artist}
//               />
//             ))}
//         </div>

//         {/* Empty State */}
//         {filteredArtists.length === 0 && (
//           <div className="text-center py-20">
//             <h3 className="text-2xl font-serif text-[#7A1D22]">
//               No artisans found
//             </h3>

//             <p className="mt-3 text-[#564240]">
//               Try changing filters or search terms.
//             </p>
//           </div>
//         )}

//         {/* View More */}
//         {visible < filteredArtists.length && (
//           <div className="flex justify-center mt-14">
//             <button
//               onClick={() => setVisible((prev) => prev + 3)}
//               className="
//                 px-8
//                 py-4
//                 rounded-xl
//                 bg-[#7A1D22]
//                 text-white
//                 hover:bg-[#65171B]
//                 transition
//                 shadow-lg
//               "
//             >
//               View More Artisans
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ArtistCard from "./artitsCard";
import Pagination from "@/components/common/pagination";

const artists = [
  {
    name: "Debendra Nath",
    craft: "Weavers",
    image: "/images/artists/artist1.png",
  },
  {
    name: "Amal Karmakar",
    craft: "Brasssmiths",
    image: "/images/artists/artist2.png",
  },
  {
    name: "Mala Pal",
    craft: "Potters",
    image: "/images/artists/artist3.png",
  },
  {
    name: "Shyamlal Sutradhar",
    craft: "Woodcraft",
    image: "/images/artists/artist3.png",
  },
  {
    name: "Rupa Sen",
    craft: "Jewelry",
    image: "/images/artists/artist2.png",
  },
  {
    name: "Anirban Das",
    craft: "Weavers",
    image: "/images/artists/artist1.png",
  },
];

const filters = [
  "All",
  "Weavers",
  "Brasssmiths",
  "Potters",
  "Woodcraft",
  "Jewelry",
];

const ITEMS_PER_PAGE = 3;

export default function ArtistsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArtists = artists.filter((artist) => {
    const matchesFilter =
      activeFilter === "All" ||
      artist.craft === activeFilter;

    const matchesSearch =
      artist.name.toLowerCase().includes(search.toLowerCase()) ||
      artist.craft.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArtists.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedArtists = filteredArtists.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-16 lg:py-20 bg-[#F6F1EA]">
      <div className="max-w-7xl mx-auto px-4 lg:px-5">
        
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="uppercase tracking-[4px] text-[#A57C33] text-sm">
            MASTER CRAFTSMEN
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif text-[#7A1D22]">
            Meet Our Artisans
          </h2>

          <p className="mt-4 text-[#564240] max-w-2xl mx-auto">
            Discover skilled craftsmen preserving centuries-old traditions
            through handmade creations.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search artisans..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // reset page
              }}
              className="
                w-full pl-12 pr-4 py-4 rounded-2xl
                bg-white border border-[#E5D9CB]
                outline-none focus:border-[#A57C33]
              "
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <div className="flex lg:flex-wrap lg:justify-center gap-3 overflow-x-auto lg:overflow-visible pb-2 px-1 whitespace-nowrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1); // reset page
                }}
                className={`
                  flex-shrink-0 px-5 py-3 rounded-full text-sm font-medium
                  transition-all

                  ${
                    activeFilter === filter
                      ? "bg-[#7A1D22] text-white shadow-md"
                      : "bg-white text-[#564240] hover:bg-[#EEE4D8]"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center text-[#564240]">
          {filteredArtists.length} artisans found
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
  {paginatedArtists.map((artist, index) => {
    const isLastItem =
      paginatedArtists.length % 2 !== 0 &&
      index === paginatedArtists.length - 1;

    return (
      <div
        key={artist.name}
        className={`
          ${isLastItem ? "col-span-2 flex justify-center" : ""}
        `}
      >
        <div className="w-full max-w-[260px] sm:max-w-none">
          <ArtistCard artist={artist} />
        </div>
      </div>
    );
  })}
</div>

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-[#7A1D22]">
              No artisans found
            </h3>
            <p className="mt-3 text-[#564240]">
              Try changing filters or search terms.
            </p>
          </div>
        )}

        {/* ✅ GLOBAL PAGINATION */}
        {filteredArtists.length > ITEMS_PER_PAGE && (
          <div className="mt-14">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
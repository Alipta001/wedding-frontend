// import Image from "next/image";

// export default function ArtistCard({ artist }: any) {
//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

//       <Image
//         src={artist.image}
//         alt=""
//         width={500}
//         height={500}
//         className="w-full h-[320px] object-cover"
//       />

//       <div className="p-6">

//         <span className="text-xs uppercase tracking-[2px] text-[#A57C33]">
//           Master Artisan
//         </span>

//         <h3 className="mt-3 text-3xl font-serif text-[#7A1D22]">
//           {artist.name}
//         </h3>

//         <p className="mt-2 text-[#564240]">
//           {artist.craft}
//         </p>

//         <button className="mt-6 border border-[#A57C33] px-5 py-2 rounded-lg">
//           View Shop
//         </button>

//       </div>
//     </div>
//   );
// }


import Image from "next/image";

export default function ArtistCard({ artist }: any) {
  return (
    <div
      className="
        bg-white
        rounded-2xl md:rounded-3xl
        overflow-hidden

        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1

        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[320px]">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-6">
        <span className="text-[10px] md:text-xs uppercase tracking-[2px] text-[#A57C33]">
          Master Artisan
        </span>

        <h3
          className="
            mt-2 md:mt-3

            text-base sm:text-lg md:text-3xl

            font-serif
            text-[#7A1D22]

            leading-tight
          "
        >
          {artist.name}
        </h3>

        <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base text-[#564240]">
          {artist.craft}
        </p>

        <button
          className="
            mt-3 md:mt-6

            text-xs sm:text-sm

            border border-[#A57C33]

            px-3 md:px-5
            py-1.5 md:py-2

            rounded-md md:rounded-lg

            hover:bg-[#F6F1EA]

            transition
          "
        >
          View Shop
        </button>
      </div>
    </div>
  );
}
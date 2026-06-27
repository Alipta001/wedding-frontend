// import AddressBanner from "@/components/addresses/addressBanner";
// import AddressWorkspace from "@/components/addresses/addressWorkspace";

// export default function AddressPage() {
//   return (
//     <>
//       <section>
//         <AddressBanner />

//         <AddressWorkspace />
//       </section>
//     </>
//   );
// }

import AddressHeader from "@/components/addresses/addressHeader";
import AddressWorkspace from "@/components/addresses/addressWorkspace";

export default function AddressPage() {
  return (
    <section className="bg-[#F6F1EC] min-h-screen py-12">
      <div className="max-w-[1320px] mx-auto px-5">
        
        {/* HEADER */}
        <div className="mb-8">
          <AddressHeader />
        </div>

        {/* WORKSPACE */}
        <AddressWorkspace />
      </div>
    </section>
  );
}
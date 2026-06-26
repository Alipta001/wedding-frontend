import AddAddressCard from "./addAddressCard";
import AddressCard from "./addressCard";


const addresses: Address[] = [
  {
    id: 1,
    type: "Home",
    name: "Ananya Chatterjee",
    address: [
      "12/A Park Mansions",
      "Park Street, Kolkata",
      "West Bengal, 700016",
      "India",
    ],
    phone: "+91 98300 12345",
  },
  {
    id: 2,
    type: "Office",
    name: "Ananya Chatterjee",
    address: [
      "Rituo Artisans Hub, Studio 4",
      "Sector V, Salt Lake",
      "Kolkata, West Bengal 700091",
      "India",
    ],
    phone: "+91 98300 54321",
  },
];

export default function AddressGrid() {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
      "
    >
      <AddAddressCard />

      {addresses.map((address) => (
        <AddressCard 
          key={address.id}
          address={address}
        />
      ))}
    </div>
  );
}
import AccountSidebar from "../layout/accountSidebar";
import AddressGrid from "./addressGrid";

export default function AddressWorkspace() {
  return (
    <section className="bg-[#FFF8F2] py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[260px_1fr] gap-10">

          <AccountSidebar />

          <AddressGrid />

        </div>

      </div>

    </section>
  );
}
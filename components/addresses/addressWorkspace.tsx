import AccountSidebar from "../layout/accountSidebar";
import AddressGrid from "./addressGrid";

export default function AddressWorkspace() {
  return (
    <section className="bg-[#FFF8F2] py-10 md:py-14">
      <div className="max-w-[1320px] mx-auto px-5">
        
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-10">
          
          {/* Sidebar (safe, no overflow) */}
          <div className="w-full min-w-0">
            <AccountSidebar />
          </div>

          {/* Content */}
          <div className="min-w-0">
            <AddressGrid />
          </div>

        </div>
      </div>
    </section>
  );
}
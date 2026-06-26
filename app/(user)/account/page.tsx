// import AccountBanner from "@/components/account/accountBanner";
// import AccountBannerHeader from "@/components/account/accountBannerHeader";
// import AccountOrders from "@/components/account/accountOrders";
// import AccountSidebar from "@/components/layout/accountSidebar";
// import AccountStatsCards from "@/components/account/accountStatsCards";
// import AccountHeader from "@/components/account/accountHeader";

// export default function AccountPage() {
//   return (
//     <section className="bg-[#F6F1EC] min-h-screen py-12">
//       <div className="max-w-[1320px] mx-auto px-5">
//         <AccountHeader />
//         <div className="grid grid-cols-[260px_1fr] gap-10">
//           <AccountSidebar />

//           <div className="bg-white p-10 rounded-none">
//             <AccountBannerHeader />

//             <AccountStatsCards />

//             <AccountOrders />

//             <AccountBanner />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import AccountBanner from "@/components/account/accountBanner";
import AccountBannerHeader from "@/components/account/accountBannerHeader";
import AccountOrders from "@/components/account/accountOrders";
import AccountSidebar from "@/components/layout/accountSidebar";
import AccountStatsCards from "@/components/account/accountStatsCards";
import AccountHeader from "@/components/account/accountHeader";

export default function AccountPage() {
  return (
    <section className="bg-[#F6F1EC] min-h-screen py-12">
      <div className="max-w-[1320px] mx-auto px-5">
        
        {/* Page Header */}
        <div className="mb-8">
          <AccountHeader />
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          
          {/* Sidebar */}
          <div>
            <AccountSidebar />
          </div>

          {/* Content */}
          <div className="bg-white p-10">
            <AccountBannerHeader />

            <div className="mt-8">
              <AccountStatsCards />
            </div>

            <div className="mt-10">
              <AccountOrders />
            </div>

            <div className="mt-10">
              <AccountBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
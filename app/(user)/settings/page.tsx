// import AccountSidebar from "@/components/layout/accountSidebar";
// import MembershipCard from "@/components/settings/membershipCard";
// import MilestoneCard from "@/components/settings/milestoneCard";
// import PersonalInfoCard from "@/components/settings/personalInfoCard";
// import SettingsBanner from "@/components/settings/settingsBanner";


// export default function SettingsPage() {
//   return (
//     <div className="bg-[#FAF6F0] min-h-screen">
//       <div className="max-w-[1320px] mx-auto px-5 py-10">
//         <SettingsBanner />

//         <div
//           className="
//             mt-10

//             grid
//             lg:grid-cols-[280px_1fr]

//             gap-8
//           "
//         >
//           <AccountSidebar />

//           <div>
//             <PersonalInfoCard />

//             <div
//               className="
//                 mt-8

//                 grid
//                 md:grid-cols-2

//                 gap-6
//               "
//             >
//               <MilestoneCard />

//               <MembershipCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import AccountHeader from "@/components/account/accountHeader";
import AccountSidebar from "@/components/layout/accountSidebar";

import MembershipCard from "@/components/settings/membershipCard";
import MilestoneCard from "@/components/settings/milestoneCard";
import PersonalInfoCard from "@/components/settings/personalInfoCard";
import SettingsBanner from "@/components/settings/settingsBanner";

export default function SettingsPage() {
  return (
    <section className="bg-[#F6F1EC] min-h-screen py-12">
      <div className="max-w-[1320px] mx-auto px-5">
        {/* Same as Account Page */}
        <div className="mb-8">
          <SettingsBanner />
        </div>

        {/* Same as Account Page */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <div>
            <AccountSidebar />
          </div>

          {/* Content */}
          <div className="bg-white p-5">
            <div className="mt-8">
              <PersonalInfoCard />
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <MilestoneCard />
              <MembershipCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import AccountSidebar from "@/components/layout/accountSidebar";

import AssetCard from "@/components/downloads/assetCard";
import ExpertCTA from "@/components/downloads/expertCTA";
import DownloadHeader from "@/components/downloads/downloadHeader";

export default function DownloadPage() {
  return (
    <section className="bg-[#F6F1EC] min-h-screen py-12 overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        
        {/* Page Header */}
        <div className="mb-8">
          <DownloadHeader />
        </div>

        {/* Dashboard Layout (FIXED GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10">
          
          {/* Sidebar */}
          <div className="min-w-0">
            <AccountSidebar />
          </div>

          {/* Content */}
          <div className="bg-white p-6 md:p-10 min-w-0">
            
            {/* OPTIONAL SECTION TITLE */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#5B060C]">
                Your Downloads
              </h2>
              <p className="text-sm text-[#5c544e] mt-1">
                Manage and access your purchased digital assets.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <AssetCard
                icon="fa-book-open"
                badge="MANUAL"
                title="The Ultimate Bengali Wedding Ritual Guide"
                description="A 50-page comprehensive cultural and ritual handbook."
                meta={[
                  { icon: "fa-regular fa-file-pdf", text: "PDF" },
                  { icon: "fa-solid fa-hard-drive", text: "12.4 MB" },
                ]}
                buttonText="Download Guide"
              />

              <AssetCard
                icon="fa-palette"
                badge="CREATIVE"
                title="Digital Invitation Template"
                description="Editable PSD/AI templates with heritage motifs."
                meta={[
                  { icon: "fa-regular fa-image", text: "PSD / AI" },
                  { icon: "fa-solid fa-hard-drive", text: "85 MB" },
                ]}
                buttonText="Download Assets"
              />

              <AssetCard
                icon="fa-award"
                badge="SECURITY"
                title="Jamdani Certificate of Authenticity"
                description="Official artisan certification with traceable origin."
                variant="secondary"
                meta={[
                  { icon: "fa-regular fa-file-pdf", text: "PDF" },
                  { icon: "fa-solid fa-hard-drive", text: "2.1 MB" },
                ]}
                buttonText="Print Certificate"
              />

              <AssetCard
                icon="fa-list-check"
                badge="UTILITY"
                title="Puja Samagri Checklist"
                description="Printable checklist with Sanskrit naming conventions."
                meta={[
                  { icon: "fa-regular fa-image", text: "JPG" },
                  { icon: "fa-solid fa-hard-drive", text: "4.8 MB" },
                ]}
                buttonText="Download Checklist"
              />

            </div>

            {/* CTA */}
            <div className="mt-10">
              <ExpertCTA />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
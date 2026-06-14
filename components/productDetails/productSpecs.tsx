"use client";

import { useState } from "react";
import ProductTabs from "./productTabs";
import ProductDetails from "./productDetails";
import ProductReviews from "./productReviews";
import ProductDescription from "./productDescription";

export default function ProductSpecs() {
  const [activeTab, setActiveTab] =
    useState("Description");

  return (
    <section className="bg-[#FAF6F0] py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        <ProductTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "Description" && (
          <ProductDescription />
        )}

        {activeTab === "Details" && (
          <ProductDetails />
        )}

        {activeTab === "Reviews" && (
          <ProductReviews />
        )}
      </div>
    </section>
  );
}
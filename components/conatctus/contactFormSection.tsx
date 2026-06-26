// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
// } from "lucide-react";

// export default function ContactFormSection() {
//   return (
//     <section className="pb-24">
//       <div className="max-w-[1320px] mx-auto px-5">

//         <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">

//           {/* FORM */}

//           <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">

//             <h2 className="font-serif text-[#5B060C] text-4xl mb-8">
//               Send a Message
//             </h2>

//             <form className="space-y-6">

//               <div className="grid md:grid-cols-2 gap-5">

//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full rounded-xl border border-[#E5D8CA] px-5 py-4 outline-none focus:border-[#A68445]"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full rounded-xl border border-[#E5D8CA] px-5 py-4 outline-none focus:border-[#A68445]"
//                 />

//               </div>

//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full rounded-xl border border-[#E5D8CA] px-5 py-4 outline-none focus:border-[#A68445]"
//               />

//               <textarea
//                 rows={6}
//                 placeholder="Tell us how we can help..."
//                 className="w-full rounded-xl border border-[#E5D8CA] px-5 py-4 outline-none resize-none focus:border-[#A68445]"
//               />

//               <button
//                 type="submit"
//                 className="
//                   bg-[#5B060C]
//                   text-white
//                   px-8
//                   py-4
//                   rounded-xl
//                   hover:bg-[#701118]
//                   transition
//                 "
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//           {/* INFO */}

//           <div className="space-y-5">

//             <div className="bg-white rounded-[28px] p-8">
//               <Mail className="text-[#A68445]" />
//               <h3 className="mt-4 text-[#5B060C] font-semibold">
//                 Email
//               </h3>
//               <p className="mt-2 text-[#564240]">
//                 hello@rituo.com
//               </p>
//             </div>

//             <div className="bg-white rounded-[28px] p-8">
//               <Phone className="text-[#A68445]" />
//               <h3 className="mt-4 text-[#5B060C] font-semibold">
//                 Phone
//               </h3>
//               <p className="mt-2 text-[#564240]">
//                 +91 98765 43210
//               </p>
//             </div>

//             <div className="bg-white rounded-[28px] p-8">
//               <MapPin className="text-[#A68445]" />
//               <h3 className="mt-4 text-[#5B060C] font-semibold">
//                 Office
//               </h3>
//               <p className="mt-2 text-[#564240]">
//                 Kolkata, West Bengal
//               </p>
//             </div>

//             <div className="bg-white rounded-[28px] p-8">
//               <Clock className="text-[#A68445]" />
//               <h3 className="mt-4 text-[#5B060C] font-semibold">
//                 Support Hours
//               </h3>
//               <p className="mt-2 text-[#564240]">
//                 Mon – Sat · 10 AM – 7 PM
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useForm } from "react-hook-form";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
// } from "lucide-react";

// type ContactFormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// export default function ContactFormSection() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ContactFormData>();

//   const onSubmit = (data: ContactFormData) => {
//     console.log(data);

//     // call API here
//   };

//   return (
//     <section className="pb-24">
//       <div className="max-w-[1320px] mx-auto px-5">

//         <div className="grid lg:grid-cols-[2fr_1fr] gap-6">

//           {/* FORM CARD */}

//           <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">

//             <div className="mb-10">
//               <h2 className="font-serif text-[#5B060C] text-4xl">
//                 Let's Start A Conversation
//               </h2>

//               <p className="mt-3 text-[#564240] max-w-xl">
//                 Whether you need wedding planning assistance,
//                 ritual guidance, artisan recommendations,
//                 or product support, we're here to help.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="space-y-6"
//             >
//               <div className="grid md:grid-cols-2 gap-5">

//                 <div>
//                   <input
//                     {...register("name", {
//                       required: "Name is required",
//                     })}
//                     placeholder="Your Name"
//                     className="
//                       w-full
//                       rounded-2xl
//                       border
//                       border-[#E8DDD1]
//                       bg-[#FAF7F2]
//                       px-5
//                       py-4
//                       outline-none
//                       focus:border-[#A68445]
//                     "
//                   />

//                   {errors.name && (
//                     <p className="mt-2 text-sm text-red-500">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <input
//                     {...register("email", {
//                       required: "Email is required",
//                     })}
//                     placeholder="Email Address"
//                     className="
//                       w-full
//                       rounded-2xl
//                       border
//                       border-[#E8DDD1]
//                       bg-[#FAF7F2]
//                       px-5
//                       py-4
//                       outline-none
//                       focus:border-[#A68445]
//                     "
//                   />

//                   {errors.email && (
//                     <p className="mt-2 text-sm text-red-500">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//               </div>

//               <input
//                 {...register("subject")}
//                 placeholder="Subject"
//                 className="
//                   w-full
//                   rounded-2xl
//                   border
//                   border-[#E8DDD1]
//                   bg-[#FAF7F2]
//                   px-5
//                   py-4
//                   outline-none
//                   focus:border-[#A68445]
//                 "
//               />

//               <textarea
//                 rows={7}
//                 {...register("message", {
//                   required: "Message is required",
//                 })}
//                 placeholder="Tell us about your wedding, rituals, requirements or questions..."
//                 className="
//                   w-full
//                   rounded-2xl
//                   border
//                   border-[#E8DDD1]
//                   bg-[#FAF7F2]
//                   px-5
//                   py-4
//                   outline-none
//                   resize-none
//                   focus:border-[#A68445]
//                 "
//               />

//               <button
//                 type="submit"
//                 className="
//                   bg-[#5B060C]
//                   text-white
//                   px-8
//                   py-4
//                   rounded-xl
//                   font-medium
//                   transition-all
//                   hover:bg-[#701118]
//                 "
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* SIDE COLUMN */}

//           <div className="flex flex-col gap-6">

//             {/* CONTACT INFO */}

//             <div className="bg-[#5B060C] rounded-[32px] p-8 text-white">

//               <h3 className="font-serif text-3xl mb-8">
//                 Contact Details
//               </h3>

//               <div className="space-y-6">

//                 <div className="flex gap-4">
//                   <Mail className="text-[#D5B06B]" />
//                   <div>
//                     <p className="text-white/60 text-sm">
//                       Email
//                     </p>
//                     <p>hello@rituo.com</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <Phone className="text-[#D5B06B]" />
//                   <div>
//                     <p className="text-white/60 text-sm">
//                       Phone
//                     </p>
//                     <p>+91 98765 43210</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <MapPin className="text-[#D5B06B]" />
//                   <div>
//                     <p className="text-white/60 text-sm">
//                       Studio
//                     </p>
//                     <p>Kolkata, West Bengal</p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* SUPPORT CARD */}

//             <div className="bg-[#F3EEE7] rounded-[32px] p-8">

//               <Clock
//                 size={36}
//                 className="text-[#A68445]"
//               />

//               <h3 className="mt-5 font-serif text-[#5B060C] text-2xl">
//                 Planning Support
//               </h3>

//               <p className="mt-3 text-[#564240] leading-7">
//                 Our wedding specialists are available
//                 Monday to Saturday from 10 AM to 7 PM.
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useForm } from "react-hook-form";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

type WeddingInquiryFormData = {
  fullName: string;
  weddingDate: string;
  ceremonyLocation: string;
  service: string;
  message: string;
};

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WeddingInquiryFormData>();

  const [openFaq, setOpenFaq] = useState(0);

  const onSubmit = async (data: WeddingInquiryFormData) => {
    console.log(data);

    // API call here
  };

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "For complete ritual curation and custom artisan works, we recommend reaching out at least 6 months prior to your wedding date.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes. We work with trusted logistics partners to deliver handcrafted ceremonial collections worldwide.",
    },
    {
      question: "Can rituals be customized?",
      answer:
        "Absolutely. We personalize every ceremony according to your family traditions and regional customs.",
    },
  ];

  return (
    <section className="pb-24">
      <div className="max-w-[1320px] mx-auto px-5">

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8">

          {/* LEFT FORM */}

          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">

            <h2 className="font-serif text-[#5B060C] text-4xl">
              Wedding Inquiry
            </h2>

            <div className="h-px bg-[#E7DCD0] my-8" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* ROW 1 */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm mb-2 text-[#564240]">
                    Full Name
                  </label>

                  <input
                    {...register("fullName", {
                      required: "Name is required",
                    })}
                    placeholder="Arjun Das"
                    className="w-full rounded-xl border border-[#E7DCD0] px-5 py-4 outline-none focus:border-[#A68445]"
                  />

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#564240]">
                    Ceremony Date
                  </label>

                  <input
                    type="date"
                    {...register("weddingDate", {
                      required: "Wedding date required",
                    })}
                    className="w-full rounded-xl border border-[#E7DCD0] px-5 py-4 outline-none focus:border-[#A68445]"
                  />
                </div>

              </div>

              {/* ROW 2 */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm mb-2 text-[#564240]">
                    Ceremony Location
                  </label>

                  <input
                    {...register("ceremonyLocation", {
                      required: true,
                    })}
                    placeholder="Kolkata, India"
                    className="w-full rounded-xl border border-[#E7DCD0] px-5 py-4 outline-none focus:border-[#A68445]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#564240]">
                    Services Needed
                  </label>

                  <select
                    {...register("service")}
                    className="w-full rounded-xl border border-[#E7DCD0] px-5 py-4 outline-none focus:border-[#A68445]"
                  >
                    <option>Full Ritual Curation</option>
                    <option>Partial Decor & Styling</option>
                    <option>Artisanal Consultation</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}

              <div>
                <label className="block text-sm mb-2 text-[#564240]">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  {...register("message")}
                  placeholder="Tell us about your vision..."
                  className="w-full rounded-xl border border-[#E7DCD0] px-5 py-4 resize-none outline-none focus:border-[#A68445]"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="
                  bg-[#5B060C]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  hover:bg-[#701118]
                  transition
                "
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDEBAR */}

          <div className="space-y-6">

            {/* SUPPORT */}

            <div className="bg-[#5B060C] rounded-[28px] p-8 text-white">

              <h3 className="font-serif text-3xl mb-8">
                Ritual Support
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs tracking-[2px] text-white/60">
                      CONCIERGE DESK
                    </p>

                    <p className="mt-1">
                      +91 (33) 4022-8100
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs tracking-[2px] text-white/60">
                      EMAIL INQUIRY
                    </p>

                    <p className="mt-1">
                      concierge@rituo.luxury
                    </p>
                  </div>
                </div>

              </div>

              <button
                className="
                  mt-8
                  w-full
                  bg-[#25D366]
                  text-white
                  py-4
                  rounded-full
                  font-medium
                "
              >
                WhatsApp Chat
              </button>
            </div>

            {/* FAQ */}

            <div className="bg-white rounded-[28px] p-8">

              <h3 className="font-serif text-[#5B060C] text-3xl mb-6">
                Frequently Asked
              </h3>

              <div className="space-y-4">

                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[#ECE3D8] pb-4"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(
                          openFaq === index ? -1 : index
                        )
                      }
                      className="
                        w-full
                        flex
                        justify-between
                        items-center
                        text-left
                      "
                    >
                      <span className="font-medium text-[#5B060C]">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition ${
                          openFaq === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {openFaq === index && (
                      <p className="mt-4 text-[#564240] leading-7">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
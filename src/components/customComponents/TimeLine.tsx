// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/components/ui/timeline";
// import { roadmapData } from "../../../data/timeline";

// export function TimelineDemo() {
//   return (
//     <div className="w-full">
//       <Timeline
//         data={roadmapData.map((levelData) => ({
//           title: levelData.level,
//           content: (
//             <div className="mb-8">
//               {levelData.capsules.map((capsule, index) => (
//                 <div
//                   key={index}
//                   className="mb-8 p-4 border border-gray-300 rounded-lg shadow-md"
//                 >
//                   <h3 className="text-lg md:text-xl font-semibold mb-2">
//                     <div className="font-bold text-3xl">{capsule.name}</div>
//                   </h3>
//                   <p className="text-md md:text-lg font-semibold mb-2">
//                     <span className="font-bold">Key Outcome:</span> {capsule.outcome}
//                   </p>
//                   <p className="text-md md:text-lg font-medium mb-4">
//                     Badge Name: {capsule.badge}
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {capsule.images.map((image, imgIndex) => (
//                       <Image
//                         key={imgIndex}
//                         src={image}
//                         alt={capsule.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg object-cover h-40 md:h-60 w-full shadow-lg"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ),
//         }))}
//       />
//     </div>
//   );
// }




// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/components/ui/timeline";
// import { roadmapData } from "../../../data/timeline";

// export function TimelineDemo() {
//   return (
//     <div className="w-full">
//       <Timeline
//         data={roadmapData.map((levelData) => ({
//           title: levelData.level,
//           content: (
//             <div className="mb-8">
//               {levelData.capsules.map((capsule, index) => (
//                 <div
//                   key={index}
//                   className="mb-8 p-4 border border-gray-300 rounded-lg shadow-md relative"
//                 >
//                   {/* Badge */}
//                   <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-br-lg">
//                     {capsule.badge}
//                   </div>

//                   <h3 className="text-lg md:text-xl font-semibold mb-2 mt-2">
//                     <div className="font-bold text-3xl">{capsule.name}</div>
//                   </h3>
//                   <p className="text-md md:text-lg font-semibold mb-2">
//                     <span className="font-bold">Key Outcome:</span> {capsule.outcome}
//                   </p>
//                   <p className="text-md md:text-lg font-medium mb-4">
//                     Duration: {capsule.duration} <span className=" pl-20">Price: {capsule.price}</span>
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {capsule.images.map((image, imgIndex) => (
//                       <Image
//                         key={imgIndex}
//                         src={image}
//                         alt={capsule.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg object-cover h-40 md:h-60 w-full shadow-lg"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ),
//         }))}
//       />
//     </div>
//   );
// }




import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { roadmapData } from "../../../data/timeline";

export function TimelineDemo() {
  return (
    <div className="w-full">
      <Timeline
        data={roadmapData.map((levelData) => ({
          title: levelData.level,
          content: (
            <div className="mb-8">
              {levelData.capsules.map((capsule, index) => (
                <div
                  key={index}
                  className="mb-8 p-4 border border-gray-700 rounded-lg shadow-md relative bg-black"
                >
                  {/* Badge */}
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-br-lg">
                    {capsule.badge}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-2 mt-2 text-white">
                    <div className="font-bold text-3xl">{capsule.name}</div>
                  </h3>
                  <p className="text-md md:text-lg font-semibold mb-2 text-gray-300">
                    <span className="font-bold">Key Outcome:</span> {capsule.outcome}
                  </p>
                  <p className="text-md md:text-lg font-medium mb-4 text-gray-300">
                    Duration: {capsule.duration} <span className="pl-20">Price: ₹ {capsule.price}</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {capsule.images.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={capsule.name}
                        width={500}
                        height={500}
                        className="rounded-lg bg-white object-cover h-40 md:h-60 w-full shadow-lg"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        }))}
      />
    </div>
  );
}
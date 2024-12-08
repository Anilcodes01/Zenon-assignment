"use client";

import Car3DView from "@/app/components/View";
import Link from 'next/link';

const FullView360Page = () => {
  return (
    <div className="container bg-white min-h-screen text-black mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Full 360° Car View</h1>
        <Link 
          href="/" 
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Overview
        </Link>
      </div>
      
      <div className="bg-gray-100 w-full flex justify-center">
        <Car3DView 
          modelPath="/models/uploads_files_3262252_r8.fbx"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default FullView360Page;
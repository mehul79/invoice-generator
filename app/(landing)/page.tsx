/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BarChart4,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden h-screen">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-gray-300">
              <span className="">Get Paid Faster with Free </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-pink-400">
                Invoice Generator
              </span>
            </h1>
          </div>
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-gray-300 border-b w-full justify-center border-dashed relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-orange-500 to-pink-400 text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Generate Invoice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const developers = [
  {
    name: "Ritik Mehta",
    linkedin: "https://linkedin.com/in/ritik322",
  },
  {
    name: "Devesh Sharma",
    linkedin: "https://www.linkedin.com/in/devesh-sharma04",
  },
];

export default function Footer() {
  return (
    <div className="text-sm flex pb-3 justify-center items-center text-gray-500 gap-1.5">
      Made with <span className="text-red-500">❤️</span> by
      <Popover>
        <PopoverTrigger asChild>
          <span className="text-indigo-600 font-semibold cursor-pointer underline decoration-dashed decoration-indigo-300 underline-offset-4 hover:text-indigo-700 transition-colors">
            Genconians
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3 bg-white">
          <div className="flex flex-col gap-2">
            {developers.map((dev, index) => (
              <a
                key={index}
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded transition-colors text-center"
              >
                {dev.name}
              </a>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
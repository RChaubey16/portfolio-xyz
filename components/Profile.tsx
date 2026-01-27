import Image from "next/image";
import { Eye } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import RoleSlider from "./animation/Roles";

const profile = {
  name: "Ruturaj",
  roles: ["Software Engineer", "Full Stack Developer", "Web Developer"],
  image: "/images/profile.jpg",
  visits: "2.2k",
};

export default function Profile() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="relative w-25 h-25 rounded-md border border-chart-3">
          <Image
            src={profile.image}
            alt="Hero"
            fill
            className="p-1 object-cover rounded-md"
          />
        </div>

        {/* Info */}
        <div className="mt-2 text-center">
          <h1 className="text-2xl font-bold text-primary">{profile.name}</h1>
          <RoleSlider roles={profile.roles} />
        </div>
      </div>

      {/* Dark mode + Visitor count */}
      <div className="my-2 flex items-center gap-4">
        <ModeToggle />
        <button className="flex items-center gap-1" title="Visitor Count">
          <Eye size={20} /> <span>{profile.visits}</span>
        </button>
      </div>
    </div>
  );
}

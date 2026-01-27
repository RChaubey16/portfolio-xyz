import Image from "next/image";
import { Eye } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Profile() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="relative w-25 h-25 rounded-md border border-chart-3">
          <Image
            src="/images/profile.jpg"
            alt="Hero"
            fill
            className="p-1 object-cover rounded-md"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Ruturaj</h1>
          <p className="text-base font-light text-muted-foreground">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="my-2 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Eye size={20} /> <span>2.2k</span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

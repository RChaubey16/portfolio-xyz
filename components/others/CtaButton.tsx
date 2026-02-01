import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CtaButton = ({
  text,
  href,
  icon = <ArrowUpRight />,
}: {
  text: string;
  href: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <Button
        variant="outline"
        size={"lg"}
        className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
      >
        {text}
        {icon}
      </Button>
    </Link>
  );
};

export default CtaButton;

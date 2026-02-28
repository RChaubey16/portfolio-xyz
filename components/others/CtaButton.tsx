import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import React from "react";

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
        className="flex cursor-pointer items-center gap-2 transition-all duration-200 ease-in-out hover:gap-4"
      >
        {text}
        {icon}
      </Button>
    </Link>
  );
};

export default CtaButton;

import React from "react";
import { Edu_NSW_ACT_Hand_Pre } from "next/font/google";

const eduFont = Edu_NSW_ACT_Hand_Pre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Quote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <div
      className={`text-xs italic text-center my-20 text-muted-foreground ${eduFont.className}`}
    >
      &quot;{quote}&quot;{author && ` — ${author}`}
    </div>
  );
};

export default Quote;

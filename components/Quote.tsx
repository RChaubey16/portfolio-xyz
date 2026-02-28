import { Edu_NSW_ACT_Hand_Pre } from "next/font/google";

import React from "react";

const eduFont = Edu_NSW_ACT_Hand_Pre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Quote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <div
      className={`text-muted-foreground my-20 text-center text-xs italic ${eduFont.className}`}
    >
      &quot;{quote}&quot;{author && ` — ${author}`}
    </div>
  );
};

export default Quote;

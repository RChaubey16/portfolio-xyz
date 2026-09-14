import Image from "next/image";

import configData from "@/data/newConfig.json";

const Intro = () => {
  const { avatarImageUrl, avatarImageAltText, description, currentFocus } = configData;

  return (
    <section className="mt-20 flex flex-col gap-5">
      <Image
        src={avatarImageUrl}
        alt={avatarImageAltText}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
        priority
      />

      <p className="text-sm leading-relaxed font-medium text-black">
        {description.join(" ")}
      </p>

      <p className="text-sm leading-relaxed font-normal text-black">
        {currentFocus}
      </p>
    </section>
  );
};

export default Intro;

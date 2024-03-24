import local from "next/font/local";

export const raleway = local({
  src: [
    {
      path: "../../public/fonts/raleway.bold.ttf",
    },
  ],
  variable: "--font-raileway",
});

export const interSemiBold = local({
  src: [
    {
      path: "../../public/fonts/Inter-SemiBold.otf",
    },
  ],
  variable: "--font-inter",
});

export const sansMedium = local({
  src: [
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
    },
  ],
  variable: "--font-msants",
});

export const sansRegular = local({
  src: [
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
    },
  ],
  variable: "--font-rsants",
});

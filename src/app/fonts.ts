import local from "next/font/local";

export const raleway = local({
  src: [
    {
      path: "../../public/fonts/raleway.bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-raileway",
});

export const interSemiBold = local({
  src: [
    {
      path: "../../public/fonts/Inter-SemiBold.otf",
      weight: "600",
    },
  ],
  variable: "--font-inter",
});

export const sansMedium = local({
  src: [
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-msants",
});

export const sansRegular = local({
  src: [
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
      weight: "400",
    },
  ],
  variable: "--font-rsants",
});

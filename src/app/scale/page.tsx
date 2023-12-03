import Hero from "@/components/hero";
import imageScale from "public/scale.jpg";

export default function Scale() {
  return (
    <Hero
      imgData={imageScale}
      imgAlt="Steel factory"
      imgTitle="Scale your app to inifity."
    />
  );
}

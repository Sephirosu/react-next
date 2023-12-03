import Hero from "@/components/hero";
import imageRel from "public/reliability.jpg";

export default function Reliability() {
  return (
    <Hero
      imgData={imageRel}
      imgAlt="welding"
      imgTitle="Super high reliability hosting"
    />
  );
}

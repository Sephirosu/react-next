import Hero from "@/components/hero";
import imagePerf from "public/performance.jpg";

export default function Performance() {
  return (
    <Hero
      imgData={imagePerf}
      imgAlt="welding"
      imgTitle="We server high performance application"
    />
  );
}

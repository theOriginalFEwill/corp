import Hero from "@/components/hero";
import performanceImg from "../../../public/performance.jpg";

export default function performance() {
  return (
    <div>
      Performance Page
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}

import reliabilityImg from "../../../public/reliability.jpg";
import Hero from "@/components/hero";

export default function Reliability() {
  return (
    <div>
      Reliability Page
      <Hero
        imgData={reliabilityImg}
        imgAlt="person stick welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}

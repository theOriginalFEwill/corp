import scaleImg from "../../../public/scale.jpg";
import Hero from "@/components/hero";

export default function Scale() {
  return (
    <div>
      Scale Page
      <Hero
        imgData={scaleImg}
        imgAlt="assembly line"
        title="Scale your app to infinity"
      />
    </div>
  );
}

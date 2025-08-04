import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
import { useBuilder } from "@/hooks/useBuilder";

export default function PreviewArea() {
  const { sections } = useBuilder();

  return (
    <div>
      {sections.map(({ id, type, props }) => {
        if (type === "Header") return <Header key={id} {...props} />;
        if (type === "Hero") return <Hero key={id} {...props} />;
        if (type === "Footer") return <Footer key={id} {...props} />;
        return null;
      })}
    </div>
  );
}

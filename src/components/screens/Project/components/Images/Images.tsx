import { AnimatedSection } from "@/components/shared/Section/Section";

export const Images = ({ images }: { images: string[] }) => {
  return (
    <AnimatedSection>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}>
        {images.map((item, index) => {
          return (
            <img src={item} alt={"l"} key={index} className="rounded-xl" />
          );
        })}
      </div>
    </AnimatedSection>
  );
};

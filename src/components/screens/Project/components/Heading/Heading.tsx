import { AnimatedSection } from "@/components/shared/Section/Section";
import { Text } from "@/components/shared/Text/Text";

export const Heading = ({ name, goal }: { name: string; goal: string }) => {
  return (
    <AnimatedSection>
      <div>
        <Text title className={"text-[32px]"}>
          {name}
        </Text>
        <Text className={"text-lg text-brightGray"}>{goal}</Text>
      </div>
    </AnimatedSection>
  );
};

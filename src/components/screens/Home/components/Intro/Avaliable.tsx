import { Text } from "@/components/shared/Text/Text";

export const Avaliable = () => {
  return (
    <div
      className={"flex items-center gap-3 bg-green px-3 py-1 w-fit rounded-2xl"}
    >
      <div className={"rounded-full size-[6px] bg-lightGreen"}></div>
      <Text className={"text-xs text-lightGreen"}>Available for work</Text>
    </div>
  );
};

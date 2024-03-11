import Link from "next/link";
import { twMerge as tw } from "tailwind-merge";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  path?: string;
}

export const Button = ({ children, className, onClick, path }: IButton) => {
  if (path) {
    return (
      <Link
        href={path}
        className={tw(
          "flex items-center justify-center w-full py-4 bg-btnGray text-sm font-medium text-white rounded-xl active:bg-lightGray",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={tw(
        "flex items-center justify-center w-full py-4 bg-btnGray text-sm font-medium text-white rounded-xl active:bg-lightGray",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

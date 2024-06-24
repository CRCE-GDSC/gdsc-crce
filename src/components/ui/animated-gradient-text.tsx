import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function AnimatedGradientText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "group relative mx-auto flex max-w-fit flex-row items-center justify-center  px-4 py-1.5 text-sm font-medium rounded-2xl transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
                className,
            )}
        >
            <div

            />

            {children}
        </div>
    );
}

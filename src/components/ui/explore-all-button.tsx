import * as React from "react";
import { Button } from "./button";
import { type ButtonProps } from "./button";
import { ChevronRight } from "lucide-react";
import cn from "../../lib/utils";

import { Slot } from "@radix-ui/react-slot"

type ExploreAllButtonProps = ButtonProps & {
  iconSize?: number;
  iconStrokeWidth?: number;
  href?: string;
};

const ExploreAllButton = React.forwardRef<
  HTMLButtonElement,
  ExploreAllButtonProps
>((props, ref) => {
  const {
    className,
    size = "default",
    children = "Explore All",
    iconSize = 16,
    iconStrokeWidth = 2,
    href,
    ...restProps
  } = props;

  const Comp = href ? "a" : Slot;

  return (
    <Button
      ref={ref}
      size={size}
      variant="default"
      className={cn("group relative overflow-hidden text-white", className)}
      asChild
      {...restProps}
    >
      <Comp href={href}>
        <span className="flex items-center">
          <span className="mr-1 transition-all duration-300 group-hover:mr-2">
            {children}
          </span>
          <ChevronRight 
            size={iconSize} 
            strokeWidth={iconStrokeWidth} 
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </Comp>
    </Button>
  );
});

ExploreAllButton.displayName = "ExploreAllButton";

export default ExploreAllButton;
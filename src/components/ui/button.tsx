import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-[20px] font-medium tracking-[-0.10px] ring-offset-background transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-hairline bg-canvas text-ink hover:bg-surface-soft",
        secondary:
          "bg-canvas text-ink border border-hairline hover:bg-surface-soft",
        ghost: "rounded-full hover:bg-surface-soft hover:text-accent-foreground",
        link: "rounded-none text-ink underline-offset-4 hover:underline hover:scale-100 active:scale-100",
        promo: "bg-accent-magenta text-white hover:opacity-90",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-10 rounded-pill px-4 text-base",
        lg: "h-12 rounded-pill px-7 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

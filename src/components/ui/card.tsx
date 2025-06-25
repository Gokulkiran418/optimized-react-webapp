import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(
    () => cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
    [className]
  )
  return <div data-slot="card" className={memoClass} {...props} />
})

const CardHeader = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(
    () =>
      cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
    [className]
  )
  return <div data-slot="card-header" className={memoClass} {...props} />
})

const CardTitle = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(() => cn("leading-none font-semibold", className), [className])
  return <div data-slot="card-title" className={memoClass} {...props} />
})

const CardDescription = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(() => cn("text-muted-foreground text-sm", className), [className])
  return <div data-slot="card-description" className={memoClass} {...props} />
})

const CardAction = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(
    () => cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    [className]
  )
  return <div data-slot="card-action" className={memoClass} {...props} />
})

const CardContent = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(() => cn("px-6", className), [className])
  return <div data-slot="card-content" className={memoClass} {...props} />
})

const CardFooter = React.memo(({ className, ...props }: React.ComponentProps<"div">) => {
  const memoClass = React.useMemo(() => cn("flex items-center px-6 [.border-t]:pt-6", className), [className])
  return <div data-slot="card-footer" className={memoClass} {...props} />
})

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

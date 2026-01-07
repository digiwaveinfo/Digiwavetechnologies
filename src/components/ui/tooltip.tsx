"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }: { children: React.ReactNode; delayDuration?: number; skipDelayDuration?: number; disableHoverableContent?: boolean }) => <>{children}</>

const Tooltip = ({ children }: { children: React.ReactNode; delayDuration?: number; open?: boolean; onOpenChange?: (open: boolean) => void }) => <>{children}</>

const TooltipTrigger = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { asChild?: boolean }>(({ children, ...props }, ref) => {
  return <>{children}</>
})
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }>(({ className, sideOffset = 4, ...props }, ref) => null)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }


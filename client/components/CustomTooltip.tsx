import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface CustomTooltipProps {
    TooltipText: string;
    children: React.ReactNode;
}

export const CustomTooltip = ({TooltipText, children}: CustomTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{ children }</TooltipTrigger>
                <TooltipContent>
                    <p> {TooltipText} </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

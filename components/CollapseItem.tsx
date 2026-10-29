import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from 'lucide-react'

export function CollapseItem({item}:{item:{title:string, description:string}}) {
  return (
    <div className="my-3 w-full">
      <Card className="py-3">
        <CardContent className="px-3">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between text-sm bg-white!">
              <span>{item.title}</span>
              <ChevronDownIcon  aria-hidden="true" className="text-muted-foreground size-4 shrink-0 transition-transform in-aria-expanded:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
              <div className="text-muted-foreground pt-3 text-sm">
               {item.description}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}

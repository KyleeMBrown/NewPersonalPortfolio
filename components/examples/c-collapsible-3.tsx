import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="h-40 w-full max-w-xs">
      <Card className="py-3">
        <CardContent className="px-3">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between text-sm">
              <span>How do I reset my password?</span>
              <ChevronDownIcon aria-hidden="true" className="text-muted-foreground size-4 shrink-0 transition-transform in-aria-expanded:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
              <div className="text-muted-foreground pt-3 text-sm">
                You can reset your password by clicking the &quot;Forgot
                Password&quot; link on the login page. We&apos;ll send you an
                email with instructions to create a new password.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}
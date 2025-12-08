import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export default function Navigation() {
  return (
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60" data-testid="header-navigation">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          AP.
        </NavLink>
        <div className="flex items-center gap-0 sm:gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "ghost" }),
                "relative",
                isActive ? "text-foreground" : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-foreground rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "ghost" }),
                "relative",
                isActive ? "text-foreground" : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-foreground rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "ghost" }),
                "relative",
                isActive ? "text-foreground" : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-foreground rounded-full" />
                )}
              </>
            )}
          </NavLink>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

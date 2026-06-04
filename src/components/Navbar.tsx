import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#howitworks",
    label: "How It Works",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="font-navbar sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            {isHome ? (
              <a
                href="#hero"
                className="ml-2 font-bold text-xl flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <img
                  src="/logo_no_background.png"
                  alt="Ansora"
                  className="h-8 w-8"
                />
                Ansora
              </a>
            ) : (
              <Link
                to="/"
                className="ml-2 font-bold text-xl flex items-center gap-2"
              >
                <img
                  src="/logo_no_background.png"
                  alt="Ansora"
                  className="h-8 w-8"
                />
                Ansora
              </Link>
            )}
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Ansora
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg ${buttonVariants({ variant: "ghost" })}`}
                    >
                      {label}
                    </a>
                  ))}
                  <Link
                    to="/book-a-demo"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg w-full justify-center ${buttonVariants({ variant: "outline" })}`}
                  >
                    Book a Demo
                  </Link>
                  <a
                    rel="noreferrer noopener"
                    href="https://app.ansora.io"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg w-full justify-center ${buttonVariants({ variant: "default" })}`}
                  >
                    Login
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-xl ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <Link
              to="/book-a-demo"
              className={buttonVariants({ variant: "outline" })}
            >
              Book a Demo
            </Link>
            <a
              rel="noreferrer noopener"
              href="https://app.ansora.io"
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

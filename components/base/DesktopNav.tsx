import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { locationList, servicesList } from "@/lib/list";
import Link from "next/link";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const DesktopNav = () => {
  return (
    <nav className="border-t md:px-0 px-3  md:block hidden w-full  min-h-12 mt-1 py-2">
      <NavigationMenu className="mx-auto" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about-us">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuTrigger>Buy & Sell</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink
                    className="bg-[#144E5A] hover:bg-[#144E5A]"
                    asChild
                  >
                    <Link
                      className=" flex h-full w-full flex-col justify-end rounded-md  p-6 no-underline outline-hidden select-none "
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-white text-lg font-medium">
                        Buying & Selling
                      </div>
                      <p className="text-gray-300 text-sm leading-tight">
                        We sell and buy used furniture in sharjah and Overall
                        UAE.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/used-furniture-buyers-in-dubai"
                  title="Used Furniture Buyers"
                >
                  Furniture & Home Appliance Buyers in Sharjah and UAE.
                </ListItem>
                <ListItem href="/" title="Used Furniture Sellers">
                  Like New Furniture For Sale in Sharjah and UAE.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuTrigger>Services </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] grid-cols-2 gap-1">
                {servicesList.map((service) => (
                  <li key={service.title}>
                    <NavigationMenuLink asChild>
                      <Link href={service.link}>
                        <div className="text-sm leading-none font-medium">
                          {service.title}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {service.desc}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuTrigger>Locations </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] grid-cols-2 gap-1">
                {locationList.map((service) => (
                  <li key={service.title}>
                    <NavigationMenuLink asChild>
                      <Link href={service.link}>
                        <div className="text-sm leading-none font-medium">
                          {service.title}
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                          {service.desc}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/how-we-work">How We Work</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact-us">Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-[#353535]">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;

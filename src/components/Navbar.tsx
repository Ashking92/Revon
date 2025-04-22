
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl text-green-700">RevON</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>App Reviews</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                  <Link to="/ios-reviews" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600">
                    <div className="text-sm font-medium leading-none">iOS App Reviews</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get reviews for your iOS applications
                    </p>
                  </Link>
                  <Link to="/android-reviews" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-600">
                    <div className="text-sm font-medium leading-none">Android App Reviews</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get reviews for your Android applications
                    </p>
                  </Link>
                  <Link to="/google-maps-reviews" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600">
                    <div className="text-sm font-medium leading-none">Google Maps Reviews</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get reviews for your business location
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Development</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                  <Link to="/web-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600">
                    <div className="text-sm font-medium leading-none">Web Development</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Professional website development services
                    </p>
                  </Link>
                  <Link to="/app-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-purple-600">
                    <div className="text-sm font-medium leading-none">App Development</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Mobile app development for iOS & Android
                    </p>
                  </Link>
                  <Link to="/wordpress-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-600">
                    <div className="text-sm font-medium leading-none">WordPress Development</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Custom WordPress website solutions
                    </p>
                  </Link>
                  <Link to="/web-certificate" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 hover:text-teal-600">
                    <div className="text-sm font-medium leading-none">Web Certificate</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get certified in web development
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center gap-2">
          <Link to="/live-orders" className="relative animate-pulse">
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </div>
            <Settings className="w-5 h-5 text-green-700" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

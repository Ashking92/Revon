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
import { Home, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl text-blue-700">RevON</span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/services" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </Link>
                  <Link to="/ios-reviews" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    iOS App Reviews
                  </Link>
                  <Link to="/android-reviews" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Android App Reviews
                  </Link>
                  <Link to="/google-maps-reviews" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Google Maps Reviews
                  </Link>
                  <Link to="/web-development" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Web Development
                  </Link>
                  <Link to="/contact" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                  <Link to="/live-orders" className="px-4 py-2 rounded hover:bg-blue-50 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <span>Live Orders</span>
                    <div className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      5
                    </div>
                  </Link>
                  <Link to="/earn" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    Earn
                  </Link>
                  <Link to="/about" className="px-4 py-2 rounded hover:bg-blue-50" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
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
                <Link to="/services">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
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
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none bg-gray-100 opacity-70 relative">
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
                        Closed
                      </div>
                      <div className="text-sm font-medium leading-none">App Development</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Mobile app development for iOS & Android
                      </p>
                    </div>
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
              
              <NavigationMenuItem>
                <Link to="/earn">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Earn
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        <div className="hidden md:flex items-center gap-2">
          <Link to="/live-orders" className="relative animate-pulse">
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </div>
            <Settings className="w-5 h-5 text-blue-700" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

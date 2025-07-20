import { Home, BarChart2, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Progress", icon: BarChart2, path: "/progress" },
  { label: "Profile", icon: User, path: "/profile" },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-md border-t border-border flex justify-around items-center h-16 shadow-xl">
      {navItems.map(({ label, icon: Icon, path }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className={cn(
            "flex flex-col items-center justify-center gap-1 text-xs font-medium px-2 py-1 rounded transition",
            location.pathname === path
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          <Icon className={cn("h-6 w-6", location.pathname === path ? "stroke-2" : "stroke-1.5")}/>
          {label}
        </button>
      ))}
    </nav>
  );
} 
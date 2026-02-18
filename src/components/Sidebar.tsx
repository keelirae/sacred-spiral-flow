import { 
  Home, 
  Users, 
  ClipboardCheck, 
  CheckSquare, 
  MessageSquare, 
  Package, 
  UserCheck, 
  Users2, 
  Apple, 
  FileText, 
  BarChart3,
  Dumbbell,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "@/lib/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Overview", icon: BarChart3, href: "/" },
  { name: "Cycle Tracker", icon: ClipboardCheck, href: "/checkins" },
  { name: "Workouts", icon: Dumbbell, href: "/training" },
  { name: "Meals", icon: Apple, href: "/nutrition" },
  { name: "Coach Chat", icon: MessageSquare, href: "/messages" },
  { name: "Tasks", icon: CheckSquare, href: "/tasks" },
  { name: "Admin", icon: Package, href: "/packages" },
  { name: "Settings", icon: FileText, href: "/forms" },
];

export const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <button 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-75 transition-opacity cursor-pointer w-full"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Dumbbell className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Spiral Root</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === `/app${item.href}` || (item.href === "/" && location.pathname === "/app/");
          const isClickable = item.href !== "#";
          
          if (isClickable) {
            return (
              <Link 
                key={item.name} 
                to={`/app${item.href}`}
                className="no-underline"
              >
                <div className="w-full">
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                </div>
              </Link>
            );
          }
          
          return (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              disabled
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm font-medium">
              {user?.email?.charAt(0).toUpperCase() || "C"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.email || "Coach Name"}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="text-gray-400 hover:text-gray-600"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

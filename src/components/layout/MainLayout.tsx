import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Heart, Dumbbell, Apple, Calendar, TrendingUp, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MainLayoutProps {
  children?: React.ReactNode;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

const MainLayout = ({ children, currentTab = "workouts", onTabChange }: MainLayoutProps) => {
  const [activeTab, setActiveTab] = useState(currentTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const navigation = [
    { id: "workouts", label: "Workouts", icon: Dumbbell },
    { id: "nutrition", label: "Nutrition", icon: Apple },
    { id: "cycle", label: "Cycle", icon: Calendar },
    { id: "progress", label: "Progress", icon: TrendingUp },
  ];

  const NavigationContent = () => (
    <div className="space-y-2">
      {navigation.map((item) => (
        <Button
          key={item.id}
          variant={activeTab === item.id ? "default" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => handleTabChange(item.id)}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-16 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="mt-6">
                <NavigationContent />
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center gap-2 flex-1">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sacred Spiral
            </h1>
          </div>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="p-6">
            <NavigationContent />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            {/* Mobile Tab Navigation */}
            <div className="md:hidden mb-6">
              <TabsList className="grid w-full grid-cols-4">
                {navigation.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="text-xs">
                    <item.icon className="h-4 w-4 md:hidden" />
                    <span className="hidden sm:inline ml-1">{item.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="workouts">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Workouts</h2>
                <p className="text-muted-foreground">Your cycle-synced workout programs will appear here.</p>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Nutrition</h2>
                <p className="text-muted-foreground">Meal planning and nutrition tracking tools.</p>
              </Card>
            </TabsContent>

            <TabsContent value="cycle">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cycle Tracking</h2>
                <p className="text-muted-foreground">Track your menstrual cycle and get personalized guidance.</p>
              </Card>
            </TabsContent>

            <TabsContent value="progress">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Progress</h2>
                <p className="text-muted-foreground">View your fitness and wellness progress over time.</p>
              </Card>
            </TabsContent>

            {children}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
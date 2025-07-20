import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Dumbbell, Flame } from "lucide-react";
import { workoutPlan } from "@/data/workoutPlan";
import { BottomNav } from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

const user = {
  name: "Alex Jordan",
  email: "alex.jordan@email.com",
  avatar: "",
};

export default function ProfilePage() {
  const completedWorkouts = workoutPlan.filter(w => w.completed);
  const streak = completedWorkouts.length; // Placeholder for streak logic
  const recent = completedWorkouts.slice(-3).reverse();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6 flex flex-col items-center p-6">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Dumbbell className="h-7 w-7 text-primary mb-2" />
              <div className="text-lg font-semibold">Workouts Completed</div>
              <div className="text-2xl font-bold text-primary">{completedWorkouts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Flame className="h-7 w-7 text-accent mb-2" />
              <div className="text-lg font-semibold">Current Streak</div>
              <div className="text-2xl font-bold text-accent">{streak} days</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Calendar className="h-7 w-7 text-muted-foreground mb-2" />
              <div className="text-lg font-semibold">Total Workouts</div>
              <div className="text-2xl font-bold text-foreground">{workoutPlan.length}</div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            {recent.length === 0 ? (
              <div className="text-muted-foreground">No recent workouts yet.</div>
            ) : (
              <ul className="space-y-2">
                {recent.map(w => (
                  <li key={w.id} className="flex items-center gap-2">
                    <Dumbbell className="text-primary h-5 w-5" />
                    <span className="font-medium">{w.day} - {w.muscle}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
} 
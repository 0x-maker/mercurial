import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { workoutPlan } from "@/data/workoutPlan";
import { Calendar, CheckCircle2, XCircle } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProgressPage() {
  const totalWorkouts = workoutPlan.length;
  const completedWorkouts = workoutPlan.filter(w => w.completed).length;
  const weekProgress = totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;

  const completedList = useMemo(() => workoutPlan.filter(w => w.completed), []);
  const remainingList = useMemo(() => workoutPlan.filter(w => !w.completed), []);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Weekly Progress</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-lg font-semibold">Completed</div>
                <div className="text-2xl font-bold text-primary">{completedWorkouts}</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Remaining</div>
                <div className="text-2xl font-bold text-accent">{totalWorkouts - completedWorkouts}</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Progress</div>
                <div className="text-2xl font-bold text-foreground">{Math.round(weekProgress)}%</div>
              </div>
            </div>
            <Progress value={weekProgress} />
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Completed Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            {completedList.length === 0 ? (
              <div className="text-muted-foreground">No workouts completed yet.</div>
            ) : (
              <ul className="space-y-2">
                {completedList.map(w => (
                  <li key={w.id} className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span className="font-medium">{w.day} - {w.muscle}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remaining Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            {remainingList.length === 0 ? (
              <div className="text-muted-foreground">All workouts completed!</div>
            ) : (
              <ul className="space-y-2">
                {remainingList.map(w => (
                  <li key={w.id} className="flex items-center gap-2">
                    <XCircle className="text-accent h-5 w-5" />
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
import { useState, useEffect } from "react";
import { Dumbbell, Calendar, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkoutCard } from "@/components/WorkoutCard";
import { WorkoutView } from "@/components/WorkoutView";
import { workoutPlan, WorkoutDay } from "@/data/workoutPlan";

const Index = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDay | null>(null);
  const [workouts, setWorkouts] = useState(workoutPlan);

  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleStartWorkout = (workout: WorkoutDay) => {
    setSelectedWorkout(workout);
  };

  const handleBackToHome = () => {
    setSelectedWorkout(null);
  };

  const totalWorkouts = workouts.length;
  const completedWorkouts = workouts.filter(w => w.completed).length;
  const weekProgress = totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;

  if (selectedWorkout) {
    return (
      <WorkoutView 
        workout={selectedWorkout} 
        onBack={handleBackToHome} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-workout-gradient text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Dumbbell className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FitTracker Pro</h1>
              <p className="text-white/80">Your personal workout companion</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Weekly Progress</span>
              <span className="text-sm">{completedWorkouts}/{totalWorkouts} workouts</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${weekProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="text-center">
            <CardContent className="p-4">
              <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{completedWorkouts}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Target className="h-5 w-5 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{totalWorkouts - completedWorkouts}</p>
              <p className="text-xs text-muted-foreground">Remaining</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{Math.round(weekProgress)}%</p>
              <p className="text-xs text-muted-foreground">Progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Recommendation */}
        <Card className="mb-6 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Today's Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Start with {workouts[0].day} - {workouts[0].muscle} workout to build your foundation.
            </p>
            <Button 
              onClick={() => handleStartWorkout(workouts[0])}
              className="bg-workout-gradient hover:shadow-workout-glow transition-all duration-300"
            >
              Start {workouts[0].day} Workout
            </Button>
          </CardContent>
        </Card>

        {/* Workout Plan */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Weekly Workout Plan</h2>
          <div className="grid gap-4">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                day={workout.day}
                muscle={workout.muscle}
                exercises={workout.exercises}
                completed={workout.completed}
                onStartWorkout={() => handleStartWorkout(workout)}
              />
            ))}
          </div>
        </div>

        {/* Weekend Rest Day Card */}
        <Card className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Weekend Recovery</h3>
            <p className="text-sm text-muted-foreground">
              Saturday & Sunday are for rest and recovery. Stay hydrated and get plenty of sleep! 💤
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

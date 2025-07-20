import { useState } from "react";
import { ArrowLeft, Calendar, Target, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExerciseCard } from "./ExerciseCard";
import { WorkoutDay } from "@/data/workoutPlan";
import { useToast } from "@/hooks/use-toast";

interface WorkoutViewProps {
  workout: WorkoutDay;
  onBack: () => void;
}

export const WorkoutView = ({ workout, onBack }: WorkoutViewProps) => {
  const [exercises, setExercises] = useState(workout.exercises);
  const { toast } = useToast();

  const completedCount = exercises.filter(ex => ex.completed).length;
  const totalCount = exercises.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const toggleExerciseComplete = (exerciseId: string) => {
    setExercises(prev => 
      prev.map(ex => 
        ex.id === exerciseId 
          ? { ...ex, completed: !ex.completed }
          : ex
      )
    );

    const exercise = exercises.find(ex => ex.id === exerciseId);
    if (exercise && !exercise.completed) {
      toast({
        title: "Exercise Completed! 💪",
        description: `Great job on ${exercise.name}!`,
      });
    }
  };

  const finishWorkout = () => {
    if (completedCount === totalCount) {
      toast({
        title: "Workout Complete! 🎉",
        description: `Amazing work on your ${workout.muscle} workout!`,
      });
    } else {
      toast({
        title: "Workout Saved",
        description: `Progress saved: ${completedCount}/${totalCount} exercises completed`,
      });
    }
    onBack();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{workout.day} - {workout.muscle}</h1>
              <p className="text-sm text-muted-foreground">{totalCount} exercises</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Progress Card */}
        <Card className="bg-workout-gradient text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">Today's Progress</h2>
                <p className="text-white/80 text-sm">Keep pushing forward!</p>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {completedCount}/{totalCount}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Timer className="h-4 w-4" />
                <span>~45-60 min</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4" />
                <span>{workout.muscle}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{workout.day}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exercises */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Exercises</h3>
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
              completed={exercise.completed}
              onToggleComplete={() => toggleExerciseComplete(exercise.id)}
              className="animate-fade-in"
            />
          ))}
        </div>

        {/* Finish Button */}
        <div className="sticky bottom-4 pt-4">
          <Button 
            onClick={finishWorkout}
            className="w-full bg-workout-gradient hover:shadow-workout-glow transition-all duration-300 h-12"
            size="lg"
          >
            {completedCount === totalCount ? "Complete Workout 🎉" : "Save Progress"}
          </Button>
        </div>
      </div>
    </div>
  );
};
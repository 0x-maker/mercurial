import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  completed?: boolean;
}

interface WorkoutCardProps {
  day: string;
  muscle: string;
  exercises: Exercise[];
  completed?: boolean;
  onStartWorkout?: () => void;
  className?: string;
}

export const WorkoutCard = ({
  day,
  muscle,
  exercises,
  completed = false,
  onStartWorkout,
  className
}: WorkoutCardProps) => {
  const completedExercises = exercises.filter(ex => ex.completed).length;
  const totalExercises = exercises.length;
  const progressPercentage = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  return (
    <Card className={cn(
      "bg-card border-border hover:shadow-workout transition-all duration-300 hover:scale-[1.02]",
      completed && "ring-2 ring-accent",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{day}</CardTitle>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{muscle}</p>
          </div>
          <div className="flex items-center gap-2">
            {completed ? (
              <CheckCircle className="h-6 w-6 text-accent" />
            ) : (
              <Circle className="h-6 w-6 text-muted-foreground" />
            )}
            <Badge variant={completed ? "default" : "secondary"} className="text-xs">
              {completedExercises}/{totalExercises}
            </Badge>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-secondary rounded-full h-2 mt-3">
          <div 
            className="bg-workout-gradient h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          {exercises.slice(0, 3).map((exercise, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-foreground truncate">{exercise.name}</span>
              <span className="text-muted-foreground">{exercise.sets}x{exercise.reps}</span>
            </div>
          ))}
          {exercises.length > 3 && (
            <p className="text-xs text-muted-foreground">+{exercises.length - 3} more exercises</p>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Clock className="h-4 w-4" />
          <span>~45-60 minutes</span>
          <Dumbbell className="h-4 w-4 ml-2" />
          <span>{totalExercises} exercises</span>
        </div>

        <Button 
          onClick={onStartWorkout}
          className="w-full bg-workout-gradient hover:shadow-workout-glow transition-all duration-300"
          size="sm"
        >
          {completed ? "Review Workout" : "Start Workout"}
        </Button>
      </CardContent>
    </Card>
  );
};
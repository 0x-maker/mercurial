import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, ChevronRight } from "lucide-react";
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
  onViewWorkout?: () => void;
  className?: string;
}

export const WorkoutCard = ({
  day,
  muscle,
  exercises,
  onViewWorkout,
  className
}: WorkoutCardProps) => {
  const totalExercises = exercises.length;

  return (
    <Card 
      className={cn(
        "bg-card border-border hover:shadow-workout transition-all duration-300 hover:scale-[1.02] cursor-pointer",
        className
      )}
      onClick={onViewWorkout}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{day}</CardTitle>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{muscle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {totalExercises} exercises
            </Badge>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
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
          onClick={(e) => {
            e.stopPropagation();
            onViewWorkout?.();
          }}
          className="w-full bg-workout-gradient hover:shadow-workout-glow transition-all duration-300"
          size="sm"
        >
          View Workout Details
        </Button>
      </CardContent>
    </Card>
  );
};
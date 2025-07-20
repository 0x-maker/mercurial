import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  name: string;
  sets: number;
  reps: string;
  image?: string;
  completed?: boolean;
  onToggleComplete?: () => void;
  onShowDemo?: () => void;
  className?: string;
}

export const ExerciseCard = ({
  name,
  sets,
  reps,
  image,
  completed = false,
  onToggleComplete,
  onShowDemo,
  className
}: ExerciseCardProps) => {
  return (
    <Card className={cn(
      "bg-card border-border transition-all duration-300",
      completed && "ring-2 ring-accent bg-accent/5",
      className
    )}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Exercise Image */}
          <div className="relative">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-workout-gradient rounded-full opacity-50" />
              )}
            </div>
            {onShowDemo && (
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                onClick={onShowDemo}
              >
                <Play className="h-3 w-3" />
              </Button>
            )}
          </div>

          {/* Exercise Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-foreground leading-tight pr-2">{name}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 shrink-0"
                onClick={onToggleComplete}
              >
                {completed ? (
                  <CheckCircle className="h-5 w-5 text-accent" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-xs">
                {sets} sets
              </Badge>
              <Badge variant="outline" className="text-xs">
                {reps} reps
              </Badge>
            </div>

            {/* Progress dots for sets */}
            <div className="flex gap-1">
              {Array.from({ length: sets }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    completed 
                      ? "bg-accent" 
                      : "bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
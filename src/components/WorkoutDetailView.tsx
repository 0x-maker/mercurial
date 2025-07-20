import { ArrowLeft, Clock, Target, Flame, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExerciseCard } from "./ExerciseCard";
import { WorkoutDay } from "@/data/workoutPlan";
import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkoutDetailViewProps {
  workout: WorkoutDay;
  onBack: () => void;
  onStartWorkout: () => void;
}

// Workout information for each muscle group
const workoutInfo = {
  monday: {
    title: "Chest Development",
    description: "Build a powerful chest with compound and isolation movements targeting all areas of the pectoral muscles.",
    tips: [
      "Focus on full range of motion for maximum muscle activation",
      "Control the weight on both concentric and eccentric phases", 
      "Squeeze your chest muscles at the top of each rep",
      "Rest 60-90 seconds between sets for optimal recovery"
    ],
    benefits: [
      "Increased upper body strength",
      "Improved pushing power",
      "Enhanced chest definition",
      "Better posture and shoulder stability"
    ],
    duration: "45-60 minutes",
    difficulty: "Intermediate",
    equipment: ["Barbell", "Dumbbells", "Cable Machine", "Bench"],
    image: "/placeholder-chest.jpg"
  },
  tuesday: {
    title: "Leg Power",
    description: "Strengthen your foundation with comprehensive leg training targeting quads, hamstrings, glutes, and calves.",
    tips: [
      "Maintain proper knee alignment throughout movements",
      "Keep your core engaged for stability",
      "Don't rush the eccentric (lowering) portion",
      "Ensure full depth on squats for maximum effectiveness"
    ],
    benefits: [
      "Increased lower body strength",
      "Enhanced athletic performance", 
      "Improved functional movement",
      "Boosted metabolism from large muscle activation"
    ],
    duration: "50-65 minutes",
    difficulty: "Advanced",
    equipment: ["Barbell", "Leg Press Machine", "Cable Machine", "Dumbbells"],
    image: "/placeholder-legs.jpg"
  },
  wednesday: {
    title: "Back Development",
    description: "Create a strong, wide back with pulling movements that target your lats, rhomboids, and rear delts.",
    tips: [
      "Pull with your elbows, not your hands",
      "Squeeze your shoulder blades together at the peak",
      "Keep your chest up and shoulders back",
      "Focus on mind-muscle connection with back muscles"
    ],
    benefits: [
      "Improved posture and spinal health",
      "Enhanced pulling strength",
      "Balanced upper body development",
      "Reduced risk of shoulder injuries"
    ],
    duration: "45-55 minutes", 
    difficulty: "Intermediate",
    equipment: ["Lat Pulldown", "Cable Machine", "T-Bar", "Seated Row Machine"],
    image: "/placeholder-back.jpg"
  },
  thursday: {
    title: "Shoulder Strength",
    description: "Develop well-rounded shoulders with movements targeting all three deltoid heads for size and stability.",
    tips: [
      "Maintain strict form to avoid shoulder impingement",
      "Control the weight through full range of motion",
      "Don't ego lift - shoulders are injury-prone",
      "Warm up thoroughly before heavy pressing"
    ],
    benefits: [
      "Broader shoulder appearance",
      "Improved overhead strength",
      "Better shoulder joint stability",
      "Enhanced athletic performance"
    ],
    duration: "40-50 minutes",
    difficulty: "Intermediate",
    equipment: ["Smith Machine", "Dumbbells", "Cable Machine", "Barbell"],
    image: "/placeholder-shoulders.jpg"
  },
  friday: {
    title: "Arm Definition",
    description: "Sculpt impressive arms with targeted bicep and tricep exercises for maximum muscle growth and definition.",
    tips: [
      "Focus on slow, controlled movements",
      "Don't swing or use momentum",
      "Keep your elbows stationary during curls",
      "Fully extend arms on tricep movements"
    ],
    benefits: [
      "Increased arm size and definition",
      "Enhanced grip strength",
      "Improved lifting capacity",
      "Better muscle symmetry"
    ],
    duration: "50-60 minutes",
    difficulty: "Beginner to Intermediate", 
    equipment: ["Dumbbells", "EZ-Bar", "Cable Machine", "Preacher Bench"],
    image: "/placeholder-arms.jpg"
  }
};

export const WorkoutDetailView = ({ workout, onBack, onStartWorkout }: WorkoutDetailViewProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'exercises'>('overview');
  const isMobile = useIsMobile();
  
  const info = workoutInfo[workout.id as keyof typeof workoutInfo];

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{workout.day} - {workout.muscle}</h1>
              <p className="text-sm text-muted-foreground">{info.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Hero Image & Info */}
        <Card className="overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-workout-gradient opacity-80" />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
              <p className="text-white/90 max-w-md">{info.description}</p>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium">{info.duration}</p>
                <p className="text-xs text-muted-foreground">Duration</p>
              </div>
              <div className="text-center">
                <Target className="h-5 w-5 text-accent mx-auto mb-1" />
                <p className="text-sm font-medium">{info.difficulty}</p>
                <p className="text-xs text-muted-foreground">Difficulty</p>
              </div>
              <div className="text-center">
                <Flame className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                <p className="text-sm font-medium">{workout.exercises.length}</p>
                <p className="text-xs text-muted-foreground">Exercises</p>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                <p className="text-sm font-medium">All Levels</p>
                <p className="text-xs text-muted-foreground">Suitable For</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === 'overview' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('overview')}
                className="flex-1"
              >
                Overview
              </Button>
              <Button
                variant={activeTab === 'exercises' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTab('exercises')}
                className="flex-1"
              >
                Exercises ({workout.exercises.length})
              </Button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' ? (
              <div className="space-y-6">
                {/* Equipment Needed */}
                <div>
                  <h3 className="font-semibold mb-3">Equipment Needed</h3>
                  <div className="flex flex-wrap gap-2">
                    {info.equipment.map((item, index) => (
                      <Badge key={index} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <h3 className="font-semibold mb-3">Pro Tips</h3>
                  <div className="space-y-2">
                    {info.tips.map((tip, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <p className="text-sm text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold mb-3">Benefits</h3>
                  <div className="space-y-2">
                    {info.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <p className="text-sm text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {workout.exercises.map((exercise, index) => (
                  <div key={exercise.id} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        Exercise {index + 1}
                      </Badge>
                    </div>
                    <h4 className="font-medium">{exercise.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {exercise.sets} sets × {exercise.reps} reps
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Start Workout Button */}
        <div className="sticky bottom-4">
          <Button 
            onClick={onStartWorkout}
            className="w-full bg-workout-gradient hover:shadow-workout-glow transition-all duration-300 h-12"
            size="lg"
          >
            Start {workout.day} Workout 🔥
          </Button>
        </div>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
};
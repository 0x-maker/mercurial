export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  completed?: boolean;
  image?: string;
}

export interface WorkoutDay {
  id: string;
  day: string;
  muscle: string;
  exercises: Exercise[];
  completed?: boolean;
}

export const workoutPlan: WorkoutDay[] = [
  {
    id: 'monday',
    day: 'Monday',
    muscle: 'Chest',
    exercises: [
      { id: 'incline-bench', name: 'Incline Bench Press', sets: 4, reps: '10-12' },
      { id: 'incline-db', name: 'Incline Dumbbell Press', sets: 4, reps: '10-12' },
      { id: 'flat-db', name: 'Flat Dumbbell Bench Press', sets: 4, reps: '10-12' },
      { id: 'cable-flies', name: 'Cable Flies', sets: 4, reps: '10-12' },
      { id: 'incline-cable', name: 'Incline Cable Flies', sets: 4, reps: '10-12' },
      { id: 'pec-fly', name: 'Seated Pec Fly', sets: 4, reps: '10-12' }
    ]
  },
  {
    id: 'tuesday',
    day: 'Tuesday',
    muscle: 'Legs',
    exercises: [
      { id: 'squat', name: 'Squat', sets: 4, reps: '10-12' },
      { id: 'leg-press', name: 'Leg Press', sets: 4, reps: '10-12' },
      { id: 'leg-ext', name: 'Leg Extensions', sets: 4, reps: '10-12' },
      { id: 'leg-curls', name: 'Lying Leg Curls', sets: 4, reps: '10-12' },
      { id: 'seated-leg-ext', name: 'Seated Leg Extensions', sets: 4, reps: '10-12' },
      { id: 'calf-raises', name: 'Calf Raises', sets: 4, reps: '10-12' }
    ]
  },
  {
    id: 'wednesday',
    day: 'Wednesday',
    muscle: 'Back',
    exercises: [
      { id: 'lat-pulldown', name: 'Lat Pulldowns', sets: 4, reps: '10-12' },
      { id: 'lat-close', name: 'Close Grip Lat Pulldowns', sets: 4, reps: '10-12' },
      { id: 'seated-rows', name: 'Seated Rows', sets: 4, reps: '10-12' },
      { id: 'machine-rows', name: 'Machine Seated Rows', sets: 4, reps: '10-12' },
      { id: 't-bar', name: 'T-Bar Rows', sets: 4, reps: '10-12' },
      { id: 'cable-pulldowns', name: 'Cable Pulldowns', sets: 4, reps: '10-12' }
    ]
  },
  {
    id: 'thursday',
    day: 'Thursday',
    muscle: 'Shoulders',
    exercises: [
      { id: 'smith-press', name: 'Smith Machine Military Press', sets: 4, reps: '10-12' },
      { id: 'db-press', name: 'Seated Dumbbell Press', sets: 4, reps: '10-12' },
      { id: 'front-raises', name: 'Front Dumbbell Raises', sets: 4, reps: '10-12' },
      { id: 'db-flys', name: 'Dumbbell Lateral Raises', sets: 4, reps: '10-12' },
      { id: 'upright-rows', name: 'Upright Rows', sets: 4, reps: '10-12' },
      { id: 'db-shrugs', name: 'Dumbbell Shrugs', sets: 4, reps: '10-12' }
    ]
  },
  {
    id: 'friday',
    day: 'Friday',
    muscle: 'Arms',
    exercises: [
      { id: 'db-curls', name: 'Dumbbell Curls', sets: 4, reps: '10-12' },
      { id: 'preacher-curls', name: 'Preacher Curls', sets: 4, reps: '10-12' },
      { id: 'cable-curls', name: 'Cable Bicep Curls', sets: 4, reps: '10-12' },
      { id: 'cable-pushdowns', name: 'Cable Pushdowns', sets: 4, reps: '10-12' },
      { id: 'neck-extensions', name: 'Behind Neck Extensions', sets: 4, reps: '10-12' },
      { id: 'vbar-extensions', name: 'V-Bar Extensions', sets: 4, reps: '10-12' },
      { id: 'vbar-triceps', name: 'V-Bar Triceps Extensions', sets: 4, reps: '10-12' },
      { id: 'hammer-curls', name: 'Incline Hammer Curls', sets: 4, reps: '10-12' },
      { id: 'inner-curls', name: 'Incline Inner-Biceps Curl', sets: 4, reps: '10-12' },
      { id: 'concentration', name: 'Standing Concentration Curls', sets: 4, reps: '10-12' },
      { id: 'ez-bar', name: 'EZ-Bar Curl', sets: 4, reps: '10-12' }
    ]
  }
];
export type WorkoutType = 'FOR TIME' | 'AMRAP 20' | 'EMOM' | '3 ROUNDS FOR TIME' | '5 ROUNDS FOR TIME' | '21-15-9' | '50-40-30-20-10' | '10-9-8-7-6-5-4-3-2-1' | '3 ROUNDS' | '7 ROUNDS FOR TIME' | string;

export interface Movement {
  name: string;
  reps: string;
  weight?: string;
}

export interface Workout {
  id: string;
  name: string;
  type: WorkoutType;
  description: string;
  movements: Movement[];
  category: 'Benchmark' | 'Hero' | 'Daily' | 'Open';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';
  isExtreme?: boolean;
  notes?: string;
}

export interface WorkoutLog {
  id: string;
  workoutId: string;
  date: string;
  performance: string; // e.g., "12:45", "150 reps", "100kg"
  notes?: string;
}

import { Workout } from '../types';

export const WORKOUTS: Workout[] = [
  {
    id: '1',
    name: 'FRAN',
    type: 'FOR TIME',
    description: 'A classic CrossFit benchmark workout.',
    movements: [
      { 
        name: 'Thrusters', 
        reps: '21-15-9', 
        weight: '95/65 lbs',
        instructions: 'A combination of a front squat and an overhead press. Keep your chest up and drive through your heels.',
        videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk'
      },
      { 
        name: 'Pull-ups', 
        reps: '21-15-9',
        instructions: 'Chin over bar. Use a kipping or butterfly technique for speed if proficient.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '2',
    name: 'MURPH',
    type: 'FOR TIME',
    description: 'In memory of Navy Lieutenant Michael Murphy.',
    movements: [
      { 
        name: 'Run', 
        reps: '1 Mile',
        instructions: 'Maintain a steady pace. This is a long workout, don\'t sprint the first mile.'
      },
      { 
        name: 'Pull-ups', 
        reps: '100',
        instructions: 'Break these into manageable sets. Keep your core tight.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Push-ups', 
        reps: '200',
        instructions: 'Chest must touch the floor. Full extension at the top.',
        videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk'
      },
      { 
        name: 'Air Squats', 
        reps: '300',
        instructions: 'Hip crease below the knee. Stand up fully at the top.',
        videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c'
      },
      { 
        name: 'Run', 
        reps: '1 Mile',
        instructions: 'Give it everything you have left.'
      }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    notes: 'Wear a weight vest (20/14 lbs) if possible.'
  },
  {
    id: '3',
    name: 'CINDY',
    type: 'AMRAP 20',
    description: 'As many rounds as possible in 20 minutes.',
    movements: [
      { 
        name: 'Pull-ups', 
        reps: '5',
        instructions: 'Focus on a full range of motion. Chin over bar at the top, full extension at the bottom.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Push-ups', 
        reps: '10',
        instructions: 'Keep your elbows tucked in. Chest to floor.',
        videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk'
      },
      { 
        name: 'Air Squats', 
        reps: '15',
        instructions: 'Weight on heels. Keep your chest up.',
        videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c'
      }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: '4',
    name: 'HELEN',
    type: '3 ROUNDS FOR TIME',
    description: '3 rounds of running, kettlebell swings, and pull-ups.',
    movements: [
      { name: 'Run', reps: '400m' },
      { name: 'Kettlebell Swings', reps: '21', weight: '24/16 kg' },
      { name: 'Pull-ups', reps: '12' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: '5',
    name: 'GRACE',
    type: 'FOR TIME',
    description: '30 Clean and Jerks for time.',
    movements: [
      { 
        name: 'Clean and Jerks', 
        reps: '30', 
        weight: '135/95 lbs',
        instructions: 'Power clean the bar to the shoulders, then drive it overhead. Use your legs for the jerk.',
        videoUrl: 'https://www.youtube.com/watch?v=8omS_8o_w_8'
      }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '6',
    name: 'ANNIE',
    type: '50-40-30-20-10',
    description: 'Double-unders and Sit-ups.',
    movements: [
      { name: 'Double-unders', reps: '50-40-30-20-10' },
      { name: 'Sit-ups', reps: '50-40-30-20-10' }
    ],
    category: 'Benchmark',
    difficulty: 'Beginner'
  },
  {
    id: '7',
    name: 'DIANE',
    type: '21-15-9',
    description: 'Deadlifts and Handstand Push-ups.',
    movements: [
      { name: 'Deadlifts', reps: '21-15-9', weight: '225/155 lbs' },
      { name: 'Handstand Push-ups', reps: '21-15-9' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '8',
    name: 'ELIZABETH',
    type: '21-15-9',
    description: 'Cleans and Ring Dips.',
    movements: [
      { name: 'Cleans', reps: '21-15-9', weight: '135/95 lbs' },
      { name: 'Ring Dips', reps: '21-15-9' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '9',
    name: 'FIGHT GONE BAD',
    type: '3 ROUNDS',
    description: '1 minute at each station, 1 minute rest between rounds.',
    movements: [
      { name: 'Wall Balls', reps: '1 min', weight: '20/14 lbs' },
      { name: 'Sumo Deadlift High Pull', reps: '1 min', weight: '75/55 lbs' },
      { name: 'Box Jumps', reps: '1 min', weight: '20"' },
      { name: 'Push Press', reps: '1 min', weight: '75/55 lbs' },
      { name: 'Row (Calories)', reps: '1 min' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '10',
    name: 'LINDA',
    type: '10-9-8-7-6-5-4-3-2-1',
    description: 'The "Three Bars of Death".',
    movements: [
      { name: 'Deadlift', reps: '10-1', weight: '1.5x Bodyweight' },
      { name: 'Bench Press', reps: '10-1', weight: '1x Bodyweight' },
      { name: 'Clean', reps: '10-1', weight: '0.75x Bodyweight' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite'
  },
  {
    id: '11',
    name: 'DT',
    type: '5 ROUNDS FOR TIME',
    description: 'In honor of USAF SSgt Timothy P. Davis.',
    movements: [
      { name: 'Deadlifts', reps: '12', weight: '155/105 lbs' },
      { name: 'Hang Power Cleans', reps: '9', weight: '155/105 lbs' },
      { name: 'Push Jerks', reps: '6', weight: '155/105 lbs' }
    ],
    category: 'Hero',
    difficulty: 'Advanced'
  },
  {
    id: '12',
    name: 'KALSU',
    type: 'FOR TIME',
    description: '100 Thrusters. Every minute on the minute, perform 5 Burpees.',
    movements: [
      { name: 'Thrusters', reps: '100 Total', weight: '135/95 lbs' },
      { name: 'Burpees', reps: '5 EMOM' }
    ],
    category: 'Hero',
    difficulty: 'Elite'
  },
  {
    id: '13',
    name: 'CHAD',
    type: 'FOR TIME',
    description: '1000 Weighted Step-ups.',
    movements: [
      { name: 'Weighted Step-ups', reps: '1000', weight: '45/35 lbs Ruck' }
    ],
    category: 'Hero',
    difficulty: 'Elite'
  },
  {
    id: '14',
    name: 'NANCY',
    type: '5 ROUNDS FOR TIME',
    description: 'Run and Overhead Squats.',
    movements: [
      { name: 'Run', reps: '400m' },
      { name: 'Overhead Squats', reps: '15', weight: '95/65 lbs' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '15',
    name: 'ISABEL',
    type: 'FOR TIME',
    description: '30 Snatches for time.',
    movements: [
      { name: 'Snatches', reps: '30', weight: '135/95 lbs' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '16',
    name: 'JACKIE',
    type: 'FOR TIME',
    description: 'Row, Thrusters, and Pull-ups.',
    movements: [
      { name: 'Row', reps: '1000m' },
      { name: 'Thrusters', reps: '50', weight: '45/35 lbs' },
      { name: 'Pull-ups', reps: '30' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: '17',
    name: 'KAREN',
    type: 'FOR TIME',
    description: '150 Wall Balls for time.',
    movements: [
      { name: 'Wall Balls', reps: '150', weight: '20/14 lbs' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: '18',
    name: 'MARY',
    type: 'AMRAP 20',
    description: 'Handstand push-ups, Pistols, and Pull-ups.',
    movements: [
      { name: 'Handstand Push-ups', reps: '5' },
      { name: 'Pistol Squats', reps: '10' },
      { name: 'Pull-ups', reps: '15' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: '19',
    name: 'THE SEVEN',
    type: '7 ROUNDS FOR TIME',
    description: 'A brutal hero workout.',
    movements: [
      { name: 'Handstand Push-ups', reps: '7' },
      { name: 'Thrusters', reps: '7', weight: '135/95 lbs' },
      { name: 'Knees-to-Elbows', reps: '7' },
      { name: 'Deadlifts', reps: '7', weight: '245/165 lbs' },
      { name: 'Burpees', reps: '7' },
      { name: 'Kettlebell Swings', reps: '7', weight: '2 pood' },
      { name: 'Pull-ups', reps: '7' }
    ],
    category: 'Hero',
    difficulty: 'Elite'
  },
  {
    id: '20',
    name: 'BADGER',
    type: '3 ROUNDS FOR TIME',
    description: 'In honor of Navy Chief Petty Officer Mark Carter.',
    movements: [
      { name: 'Squat Cleans', reps: '30', weight: '95/65 lbs' },
      { name: 'Pull-ups', reps: '30' },
      { name: 'Run', reps: '800m' }
    ],
    category: 'Hero',
    difficulty: 'Advanced'
  },
  {
    id: '21',
    name: 'KING KONG',
    type: '3 ROUNDS FOR TIME',
    description: 'One of the most feared workouts in CrossFit.',
    movements: [
      { name: 'Deadlifts', reps: '1', weight: '455/320 lbs' },
      { name: 'Muscle-ups', reps: '2' },
      { name: 'Squat Cleans', reps: '3', weight: '250/175 lbs' },
      { name: 'Handstand Push-ups', reps: '4' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite',
    isExtreme: true,
    notes: 'Pure strength and high-skill gymnastics.'
  },
  {
    id: '22',
    name: 'PULL-UP HELL',
    type: 'FOR TIME',
    description: 'A brutal volume-based pull-up workout.',
    movements: [
      { name: 'Strict Pull-ups', reps: '100' },
      { name: 'Chest-to-Bar Pull-ups', reps: '100' },
      { name: 'Bar Muscle-ups', reps: '50' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '23',
    name: 'THE RYAN',
    type: '5 ROUNDS FOR TIME',
    description: 'In honor of Maplewood, NJ Firefighter Ryan Hummert.',
    movements: [
      { name: 'Muscle-ups', reps: '7' },
      { name: 'Burpees', reps: '21' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '24',
    name: 'HOLLEYMAN',
    type: '30 ROUNDS FOR TIME',
    description: 'In honor of U.S. Army Staff Sergeant Aaron N. Holleyman.',
    movements: [
      { name: 'Wall Balls', reps: '5', weight: '20/14 lbs' },
      { name: 'Handstand Push-ups', reps: '3' },
      { name: 'Power Cleans', reps: '1', weight: '225/155 lbs' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '25',
    name: 'THE DON',
    type: 'FOR TIME',
    description: 'A high-rep chipper that tests mental fortitude.',
    movements: [
      { name: 'Jump Squats', reps: '66' },
      { name: 'Burpees', reps: '66' },
      { name: 'Kettlebell Swings', reps: '66', weight: '24/16 kg' },
      { name: 'Plyo Lunges', reps: '66' },
      { name: 'Box Jumps', reps: '66', weight: '24/20"' },
      { name: 'Knees-to-Elbows', reps: '66' },
      { name: 'Sit-ups', reps: '66' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '26',
    name: 'ARNIE',
    type: 'FOR TIME',
    description: 'In honor of Los Angeles County Fire Fighter Specialist Arnaldo "Arnie" Quinones.',
    movements: [
      { name: 'Turkish Get-ups (Right)', reps: '21', weight: '2 pood' },
      { name: 'Kettlebell Swings', reps: '50', weight: '2 pood' },
      { name: 'Overhead Squats (Left)', reps: '21', weight: '2 pood' },
      { name: 'Kettlebell Swings', reps: '50', weight: '2 pood' },
      { name: 'Overhead Squats (Right)', reps: '21', weight: '2 pood' },
      { name: 'Kettlebell Swings', reps: '50', weight: '2 pood' },
      { name: 'Turkish Get-ups (Left)', reps: '21', weight: '2 pood' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '27',
    name: 'CLOVIS',
    type: 'FOR TIME',
    description: 'In honor of U.S. Army Second Lieutenant Clovis T. Ray.',
    movements: [
      { name: 'Run', reps: '10 Miles' },
      { name: 'Burpees', reps: '150' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true,
    notes: 'Partition as needed.'
  },
  {
    id: '28',
    name: 'THE CHIEF',
    type: '5 AMRAPS OF 3 MINS',
    description: 'Max rounds in 3 minutes, rest 1 minute between AMRAPs.',
    movements: [
      { name: 'Power Cleans', reps: '3', weight: '135/95 lbs' },
      { name: 'Push-ups', reps: '6' },
      { name: 'Air Squats', reps: '9' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '29',
    name: 'BULL',
    type: '2 ROUNDS FOR TIME',
    description: 'In honor of Marine Corps Captain Brandon "Bull" Barrett.',
    movements: [
      { name: 'Double-unders', reps: '200' },
      { name: 'Overhead Squats', reps: '50', weight: '135/95 lbs' },
      { name: 'Pull-ups', reps: '50' },
      { name: 'Run', reps: '1 Mile' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  },
  {
    id: '30',
    name: 'THE SEVEN (XTRME)',
    type: '7 ROUNDS FOR TIME',
    description: 'The standard Seven, but with increased complexity.',
    movements: [
      { name: 'Strict Handstand Push-ups', reps: '7' },
      { name: 'Thrusters', reps: '7', weight: '155/105 lbs' },
      { name: 'Toes-to-Bar', reps: '7' },
      { name: 'Deadlifts', reps: '7', weight: '275/185 lbs' },
      { name: 'Burpee Box Jump Overs', reps: '7', weight: '30/24"' },
      { name: 'Kettlebell Swings', reps: '7', weight: '32/24 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '7' }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  }
];

import { Workout } from '../types';

export const LUCKY_WORKOUTS: Workout[] = [
  {
    id: 'lucky-1',
    name: 'KELLY',
    type: '5 ROUNDS FOR TIME',
    description: 'A high-volume benchmark testing running and jumping endurance.',
    movements: [
      { name: 'Run', reps: '400m', instructions: 'Maintain a steady pace.' },
      { name: 'Box Jumps', reps: '30', weight: '24/20"', instructions: 'Jump and stand fully.', videoUrl: 'https://www.youtube.com/watch?v=52rVf9V5Nf0' },
      { name: 'Wall Balls', reps: '30', weight: '20/14 lbs', instructions: 'Squat deep and throw.', videoUrl: 'https://www.youtube.com/watch?v=L9ioZ_H_I_0' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-2',
    name: 'LYNNE',
    type: '5 ROUNDS FOR MAX REPS',
    description: 'Max reps of bench press and pull-ups. No time limit.',
    movements: [
      { name: 'Bench Press', reps: 'Max', weight: 'Bodyweight', instructions: 'Full range of motion.', videoUrl: 'https://www.youtube.com/watch?v=rT7DgIz-kyI' },
      { name: 'Pull-ups', reps: 'Max', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-3',
    name: 'NICOLE',
    type: 'AMRAP 20',
    description: 'Run 400m and then perform max pull-ups.',
    movements: [
      { name: 'Run', reps: '400m', instructions: 'Steady run.' },
      { name: 'Pull-ups', reps: 'Max', instructions: 'Unbroken sets recommended.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: 'lucky-4',
    name: 'AMANDA',
    type: '9-7-5',
    description: 'Muscle-ups and Snatches. High skill and power.',
    movements: [
      { name: 'Muscle-ups', reps: '9-7-5', instructions: 'Rings or bar.', videoUrl: 'https://www.youtube.com/watch?v=G_yW6O2C42M' },
      { name: 'Snatches', reps: '9-7-5', weight: '135/95 lbs', instructions: 'Squat snatches preferred.', videoUrl: 'https://www.youtube.com/watch?v=9xQp28vP9SY' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite'
  },
  {
    id: 'lucky-5',
    name: 'BARBARA',
    type: '5 ROUNDS FOR TIME',
    description: '3 minutes rest between rounds. Pure bodyweight volume.',
    movements: [
      { name: 'Pull-ups', reps: '20', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Push-ups', reps: '30', instructions: 'Chest to floor.', videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk' },
      { name: 'Sit-ups', reps: '40', instructions: 'Touch toes.', videoUrl: 'https://www.youtube.com/watch?v=_HPfXutjB1s' },
      { name: 'Air Squats', reps: '50', instructions: 'Hip crease below knee.', videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  },
  {
    id: 'lucky-6',
    name: 'CHELSEA',
    type: 'EMOM 30',
    description: 'Every minute on the minute for 30 minutes.',
    movements: [
      { name: 'Pull-ups', reps: '5', instructions: 'Consistent sets.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Push-ups', reps: '10', instructions: 'Keep form tight.', videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk' },
      { name: 'Air Squats', reps: '15', instructions: 'Full depth.', videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c' }
    ],
    category: 'Benchmark',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-7',
    name: 'EVA',
    type: '5 ROUNDS FOR TIME',
    description: 'A long, grueling workout with heavy swings.',
    movements: [
      { name: 'Run', reps: '800m', instructions: 'Endurance pace.' },
      { name: 'Kettlebell Swings', reps: '30', weight: '2 pood', instructions: 'Heavy swings.', videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0' },
      { name: 'Pull-ups', reps: '30', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' }
    ],
    category: 'Benchmark',
    difficulty: 'Elite'
  },
  {
    id: 'lucky-8',
    name: 'JT',
    type: '21-15-9',
    description: 'In honor of Petty Officer 1st Class Jeff Taylor.',
    movements: [
      { name: 'Handstand Push-ups', reps: '21-15-9', instructions: 'Strict or kipping.', videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc' },
      { name: 'Ring Dips', reps: '21-15-9', instructions: 'Full depth.', videoUrl: 'https://www.youtube.com/watch?v=c_Ym6_T_T8Y' },
      { name: 'Push-ups', reps: '21-15-9', instructions: 'Chest to floor.', videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk' }
    ],
    category: 'Hero',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-9',
    name: 'MICHAEL',
    type: '3 ROUNDS FOR TIME',
    description: 'In honor of Navy Lieutenant Michael McGreevy.',
    movements: [
      { name: 'Run', reps: '800m', instructions: 'Steady run.' },
      { name: 'Back Extensions', reps: '50', instructions: 'Controlled movement.', videoUrl: 'https://www.youtube.com/watch?v=xMy7_m4V_0I' },
      { name: 'Sit-ups', reps: '50', instructions: 'Touch toes.', videoUrl: 'https://www.youtube.com/watch?v=_HPfXutjB1s' }
    ],
    category: 'Hero',
    difficulty: 'Intermediate'
  },
  {
    id: 'lucky-10',
    name: 'NATE',
    type: 'AMRAP 20',
    description: 'In honor of Chief Petty Officer Nate Hardy.',
    movements: [
      { name: 'Muscle-ups', reps: '2', instructions: 'Rings.', videoUrl: 'https://www.youtube.com/watch?v=G_yW6O2C42M' },
      { name: 'Handstand Push-ups', reps: '4', instructions: 'Strict or kipping.', videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc' },
      { name: 'Kettlebell Swings', reps: '8', weight: '2 pood', instructions: 'Heavy swings.', videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0' }
    ],
    category: 'Hero',
    difficulty: 'Elite'
  },
  {
    id: 'lucky-11',
    name: 'JOSH',
    type: 'FOR TIME',
    description: 'In honor of SSG Joshua Hager.',
    movements: [
      { name: 'Overhead Squats', reps: '21', weight: '95 lbs', instructions: 'Keep bar over center.', videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI' },
      { name: 'Pull-ups', reps: '42', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Overhead Squats', reps: '15', weight: '95 lbs', instructions: 'Keep bar over center.', videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI' },
      { name: 'Pull-ups', reps: '30', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Overhead Squats', reps: '9', weight: '95 lbs', instructions: 'Keep bar over center.', videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI' },
      { name: 'Pull-ups', reps: '18', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' }
    ],
    category: 'Hero',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-12',
    name: 'DANIEL',
    type: 'FOR TIME',
    description: 'In honor of Army Sgt 1st Class Daniel Crabtree.',
    movements: [
      { name: 'Pull-ups', reps: '50', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Run', reps: '400m', instructions: 'Steady pace.' },
      { name: 'Thrusters', reps: '21', weight: '95 lbs', instructions: 'Full squat to press.', videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk' },
      { name: 'Run', reps: '800m', instructions: 'Steady pace.' },
      { name: 'Thrusters', reps: '21', weight: '95 lbs', instructions: 'Full squat to press.', videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk' },
      { name: 'Run', reps: '400m', instructions: 'Steady pace.' },
      { name: 'Pull-ups', reps: '50', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' }
    ],
    category: 'Hero',
    difficulty: 'Advanced'
  },
  {
    id: 'lucky-13',
    name: 'TOMMY V',
    type: 'FOR TIME',
    description: 'In honor of Senior Chief Petty Officer Thomas J. Valentine.',
    movements: [
      { name: 'Thrusters', reps: '21', weight: '115 lbs', instructions: 'Full squat to press.', videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk' },
      { name: 'Rope Climbs', reps: '12', instructions: 'Leg wrap for safety.', videoUrl: 'https://www.youtube.com/watch?v=P6Y9Xm9G5pY' },
      { name: 'Thrusters', reps: '15', weight: '115 lbs', instructions: 'Full squat to press.', videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk' },
      { name: 'Rope Climbs', reps: '9', instructions: 'Leg wrap for safety.', videoUrl: 'https://www.youtube.com/watch?v=P6Y9Xm9G5pY' },
      { name: 'Thrusters', reps: '9', weight: '115 lbs', instructions: 'Full squat to press.', videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk' },
      { name: 'Rope Climbs', reps: '6', instructions: 'Leg wrap for safety.', videoUrl: 'https://www.youtube.com/watch?v=P6Y9Xm9G5pY' }
    ],
    category: 'Hero',
    difficulty: 'Elite'
  },
  {
    id: 'lucky-14',
    name: 'RANDY',
    type: 'FOR TIME',
    description: 'In honor of Randy Simmons. 75 Power Snatches.',
    movements: [
      { name: 'Power Snatches', reps: '75', weight: '75 lbs', instructions: 'Light weight, high reps. Keep back flat.', videoUrl: 'https://www.youtube.com/watch?v=9xQp28vP9SY' }
    ],
    category: 'Hero',
    difficulty: 'Intermediate'
  },
  {
    id: 'lucky-15',
    name: 'ANGIE',
    type: 'FOR TIME',
    description: '100 reps of each movement. A classic chipper.',
    movements: [
      { name: 'Pull-ups', reps: '100', instructions: 'Chin over bar.', videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw' },
      { name: 'Push-ups', reps: '100', instructions: 'Chest to floor.', videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk' },
      { name: 'Sit-ups', reps: '100', instructions: 'Touch toes.', videoUrl: 'https://www.youtube.com/watch?v=_HPfXutjB1s' },
      { name: 'Air Squats', reps: '100', instructions: 'Full depth.', videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c' }
    ],
    category: 'Benchmark',
    difficulty: 'Intermediate'
  }
];

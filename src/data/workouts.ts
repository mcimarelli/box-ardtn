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
      { 
        name: 'Run', 
        reps: '400m',
        instructions: 'Focus on a consistent pace to keep your heart rate steady.'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '21', 
        weight: '24/16 kg',
        instructions: 'Drive with your hips, not your arms. Keep your back flat.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Pull-ups', 
        reps: '12',
        instructions: 'Chin over bar. Use kipping for efficiency.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
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
      { 
        name: 'Double-unders', 
        reps: '50-40-30-20-10',
        instructions: 'The rope passes under your feet twice per jump. Keep your wrists relaxed.',
        videoUrl: 'https://www.youtube.com/watch?v=82jNjDS19lg'
      },
      { 
        name: 'Sit-ups', 
        reps: '50-40-30-20-10',
        instructions: 'Touch the floor behind your head and then touch your toes.',
        videoUrl: 'https://www.youtube.com/watch?v=_HPfXutjB1s'
      }
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
      { 
        name: 'Deadlifts', 
        reps: '21-15-9', 
        weight: '225/155 lbs',
        instructions: 'Keep the bar close to your body. Maintain a neutral spine.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Handstand Push-ups', 
        reps: '21-15-9',
        instructions: 'Kick up to the wall, lower your head to the mat, and drive back up.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      }
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
      { 
        name: 'Cleans', 
        reps: '21-15-9', 
        weight: '135/95 lbs',
        instructions: 'Pull the bar from the floor to your shoulders in one fluid motion.',
        videoUrl: 'https://www.youtube.com/watch?v=EKRiW906uS0'
      },
      { 
        name: 'Ring Dips', 
        reps: '21-15-9',
        instructions: 'Lower yourself until your shoulders are below your elbows, then push back up.',
        videoUrl: 'https://www.youtube.com/watch?v=c_Ym6_T_T8Y'
      }
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
      { 
        name: 'Wall Balls', 
        reps: '1 min', 
        weight: '20/14 lbs',
        instructions: 'Squat deep and throw the ball to the target height.',
        videoUrl: 'https://www.youtube.com/watch?v=L9ioZ_H_I_0'
      },
      { 
        name: 'Sumo Deadlift High Pull', 
        reps: '1 min', 
        weight: '75/55 lbs',
        instructions: 'Wide stance, narrow grip. Pull the bar to your chin using hip drive.',
        videoUrl: 'https://www.youtube.com/watch?v=l3S_S-X_8v0'
      },
      { 
        name: 'Box Jumps', 
        reps: '1 min', 
        weight: '20"',
        instructions: 'Jump onto the box and stand up fully at the top.',
        videoUrl: 'https://www.youtube.com/watch?v=52rVf9V5Nf0'
      },
      { 
        name: 'Push Press', 
        reps: '1 min', 
        weight: '75/55 lbs',
        instructions: 'Dip your knees and drive the bar overhead. No re-dip.',
        videoUrl: 'https://www.youtube.com/watch?v=X6-Q6gAK-oM'
      },
      { 
        name: 'Row (Calories)', 
        reps: '1 min',
        instructions: 'Drive with your legs, then pull with your arms.',
        videoUrl: 'https://www.youtube.com/watch?v=H07_V99I96U'
      }
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
      { 
        name: 'Deadlift', 
        reps: '10-1', 
        weight: '1.5x Bodyweight',
        instructions: 'Heavy deadlifts. Maintain perfect form even as you fatigue.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Bench Press', 
        reps: '10-1', 
        weight: '1x Bodyweight',
        instructions: 'Lower the bar to your chest and push back to full extension.',
        videoUrl: 'https://www.youtube.com/watch?v=rT7DgIz-kyI'
      },
      { 
        name: 'Clean', 
        reps: '10-1', 
        weight: '0.75x Bodyweight',
        instructions: 'Power clean or squat clean as needed.',
        videoUrl: 'https://www.youtube.com/watch?v=EKRiW906uS0'
      }
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
      { 
        name: 'Deadlifts', 
        reps: '12', 
        weight: '155/105 lbs',
        instructions: 'Focus on a strong pull from the floor.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Hang Power Cleans', 
        reps: '9', 
        weight: '155/105 lbs',
        instructions: 'Start from above the knee. Catch in a partial squat.',
        videoUrl: 'https://www.youtube.com/watch?v=WCdhS_V6S8A'
      },
      { 
        name: 'Push Jerks', 
        reps: '6', 
        weight: '155/105 lbs',
        instructions: 'Dip, drive, and catch with locked arms in a partial squat.',
        videoUrl: 'https://www.youtube.com/watch?v=V-hKuAfWNUw'
      }
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
      { 
        name: 'Thrusters', 
        reps: '100 Total', 
        weight: '135/95 lbs',
        instructions: 'A test of mental and physical endurance. Keep your pace steady.',
        videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk'
      },
      { 
        name: 'Burpees', 
        reps: '5 EMOM',
        instructions: 'Drop to the floor, chest touches, jump back up with a clap.',
        videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
      }
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
      { 
        name: 'Weighted Step-ups', 
        reps: '1000', 
        weight: '45/35 lbs Ruck',
        instructions: 'A long grind. Switch legs every few reps to manage fatigue.',
        videoUrl: 'https://www.youtube.com/watch?v=dQqApCGd5Ss'
      }
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
      { 
        name: 'Run', 
        reps: '400m',
        instructions: 'Use the run to recover for the overhead squats.'
      },
      { 
        name: 'Overhead Squats', 
        reps: '15', 
        weight: '95/65 lbs',
        instructions: 'Keep the bar locked out over your center of mass.',
        videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI'
      }
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
      { 
        name: 'Snatches', 
        reps: '30', 
        weight: '135/95 lbs',
        instructions: 'One fluid motion from floor to overhead.',
        videoUrl: 'https://www.youtube.com/watch?v=9xQp28vP9SY'
      }
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
      { 
        name: 'Row', 
        reps: '1000m',
        instructions: 'Steady pace on the rower.',
        videoUrl: 'https://www.youtube.com/watch?v=H07_V99I96U'
      },
      { 
        name: 'Thrusters', 
        reps: '50', 
        weight: '45/35 lbs',
        instructions: 'Unbroken if possible. Keep the bar moving.',
        videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk'
      },
      { 
        name: 'Pull-ups', 
        reps: '30',
        instructions: 'Chin over bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
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
      { 
        name: 'Wall Balls', 
        reps: '150', 
        weight: '20/14 lbs',
        instructions: 'Find a rhythm. Break into sets of 10-20.',
        videoUrl: 'https://www.youtube.com/watch?v=L9ioZ_H_I_0'
      }
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
      { 
        name: 'Handstand Push-ups', 
        reps: '5',
        instructions: 'Strict or kipping as allowed.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      },
      { 
        name: 'Pistol Squats', 
        reps: '10',
        instructions: 'One-legged squats. Balance is key.',
        videoUrl: 'https://www.youtube.com/watch?v=qDcniqddTeE'
      },
      { 
        name: 'Pull-ups', 
        reps: '15',
        instructions: 'Chin over bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
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
      { 
        name: 'Handstand Push-ups', 
        reps: '7',
        instructions: 'Kick up and drive.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      },
      { 
        name: 'Thrusters', 
        reps: '7', 
        weight: '135/95 lbs',
        instructions: 'Heavy thrusters. Use your legs.',
        videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk'
      },
      { 
        name: 'Knees-to-Elbows', 
        reps: '7',
        instructions: 'Hang from the bar and bring your knees to touch your elbows.',
        videoUrl: 'https://www.youtube.com/watch?v=fX9v6v70-4s'
      },
      { 
        name: 'Deadlifts', 
        reps: '7', 
        weight: '245/165 lbs',
        instructions: 'Heavy deadlifts. Keep your back flat.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Burpees', 
        reps: '7',
        instructions: 'Chest to floor.',
        videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '7', 
        weight: '2 pood',
        instructions: 'Heavy swings. Drive with the hips.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Pull-ups', 
        reps: '7',
        instructions: 'Chin over bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
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
      { 
        name: 'Squat Cleans', 
        reps: '30', 
        weight: '95/65 lbs',
        instructions: 'Catch the bar in a full squat.',
        videoUrl: 'https://www.youtube.com/watch?v=mEyoH55038U'
      },
      { 
        name: 'Pull-ups', 
        reps: '30',
        instructions: 'Chin over bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Run', 
        reps: '800m',
        instructions: 'Steady pace.'
      }
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
      { 
        name: 'Deadlifts', 
        reps: '1', 
        weight: '455/320 lbs',
        instructions: 'Extremely heavy. Ensure your back is locked and core is tight.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Muscle-ups', 
        reps: '2',
        instructions: 'Pull yourself over the rings or bar in one fluid motion.',
        videoUrl: 'https://www.youtube.com/watch?v=G_yW6O2C42M'
      },
      { 
        name: 'Squat Cleans', 
        reps: '3', 
        weight: '250/175 lbs',
        instructions: 'Heavy cleans. Catch in a full squat.',
        videoUrl: 'https://www.youtube.com/watch?v=mEyoH55038U'
      },
      { 
        name: 'Handstand Push-ups', 
        reps: '4',
        instructions: 'Strict or kipping.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      }
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
      { 
        name: 'Strict Pull-ups', 
        reps: '100',
        instructions: 'No kipping. Pure strength.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Chest-to-Bar Pull-ups', 
        reps: '100',
        instructions: 'Chest must touch the bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Bar Muscle-ups', 
        reps: '50',
        instructions: 'Drive your hips to the bar and press out at the top.',
        videoUrl: 'https://www.youtube.com/watch?v=2vS9_vW-7-k'
      }
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
      { 
        name: 'Muscle-ups', 
        reps: '7',
        instructions: 'Rings or bar.',
        videoUrl: 'https://www.youtube.com/watch?v=G_yW6O2C42M'
      },
      { 
        name: 'Burpees', 
        reps: '21',
        instructions: 'Chest to floor.',
        videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
      }
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
      { 
        name: 'Wall Balls', 
        reps: '5', 
        weight: '20/14 lbs',
        instructions: 'Squat and throw.',
        videoUrl: 'https://www.youtube.com/watch?v=L9ioZ_H_I_0'
      },
      { 
        name: 'Handstand Push-ups', 
        reps: '3',
        instructions: 'Kick up and drive.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      },
      { 
        name: 'Power Cleans', 
        reps: '1', 
        weight: '225/155 lbs',
        instructions: 'Heavy power cleans. Catch with knees slightly bent.',
        videoUrl: 'https://www.youtube.com/watch?v=EKRiW906uS0'
      }
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
      { 
        name: 'Jump Squats', 
        reps: '66',
        instructions: 'Explosive jumps from a full squat.',
        videoUrl: 'https://www.youtube.com/watch?v=72BSG0gnJ6Y'
      },
      { 
        name: 'Burpees', 
        reps: '66',
        instructions: 'Chest to floor.',
        videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '66', 
        weight: '24/16 kg',
        instructions: 'Drive with the hips.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Plyo Lunges', 
        reps: '66',
        instructions: 'Switch legs in mid-air.',
        videoUrl: 'https://www.youtube.com/watch?v=K_7v_8yK-vA'
      },
      { 
        name: 'Box Jumps', 
        reps: '66', 
        weight: '24/20"',
        instructions: 'Jump and stand.',
        videoUrl: 'https://www.youtube.com/watch?v=52rVf9V5Nf0'
      },
      { 
        name: 'Knees-to-Elbows', 
        reps: '66',
        instructions: 'Touch knees to elbows.',
        videoUrl: 'https://www.youtube.com/watch?v=fX9v6v70-4s'
      },
      { 
        name: 'Sit-ups', 
        reps: '66',
        instructions: 'Touch toes.',
        videoUrl: 'https://www.youtube.com/watch?v=_HPfXutjB1s'
      }
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
      { 
        name: 'Turkish Get-ups (Right)', 
        reps: '21', 
        weight: '2 pood',
        instructions: 'Keep your arm locked out. Move with control.',
        videoUrl: 'https://www.youtube.com/watch?v=uGRBUMUXFvY'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '50', 
        weight: '2 pood',
        instructions: 'Heavy swings.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Overhead Squats (Left)', 
        reps: '21', 
        weight: '2 pood',
        instructions: 'Keep the weight over your shoulder.',
        videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '50', 
        weight: '2 pood',
        instructions: 'Heavy swings.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Overhead Squats (Right)', 
        reps: '21', 
        weight: '2 pood',
        instructions: 'Keep the weight over your shoulder.',
        videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '50', 
        weight: '2 pood',
        instructions: 'Heavy swings.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Turkish Get-ups (Left)', 
        reps: '21', 
        weight: '2 pood',
        instructions: 'Keep your arm locked out.',
        videoUrl: 'https://www.youtube.com/watch?v=uGRBUMUXFvY'
      }
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
      { 
        name: 'Run', 
        reps: '10 Miles',
        instructions: 'A long endurance run.'
      },
      { 
        name: 'Burpees', 
        reps: '150',
        instructions: 'Keep moving.',
        videoUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU'
      }
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
      { 
        name: 'Power Cleans', 
        reps: '3', 
        weight: '135/95 lbs',
        instructions: 'Catch in a partial squat.',
        videoUrl: 'https://www.youtube.com/watch?v=EKRiW906uS0'
      },
      { 
        name: 'Push-ups', 
        reps: '6',
        instructions: 'Chest to floor.',
        videoUrl: 'https://www.youtube.com/watch?v=0pkjOk0EiAk'
      },
      { 
        name: 'Air Squats', 
        reps: '9',
        instructions: 'Hip crease below knee.',
        videoUrl: 'https://www.youtube.com/watch?v=C_VtOYc6j5c'
      }
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
      { 
        name: 'Double-unders', 
        reps: '200',
        instructions: 'Stay light on your toes.',
        videoUrl: 'https://www.youtube.com/watch?v=82jNjDS19lg'
      },
      { 
        name: 'Overhead Squats', 
        reps: '50', 
        weight: '135/95 lbs',
        instructions: 'Keep the bar over your center.',
        videoUrl: 'https://www.youtube.com/watch?v=RD_vUnKwqqI'
      },
      { 
        name: 'Pull-ups', 
        reps: '50',
        instructions: 'Chin over bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      },
      { 
        name: 'Run', 
        reps: '1 Mile',
        instructions: 'Final push.'
      }
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
      { 
        name: 'Strict Handstand Push-ups', 
        reps: '7',
        instructions: 'No kipping allowed.',
        videoUrl: 'https://www.youtube.com/watch?v=0wDEO6shVxc'
      },
      { 
        name: 'Thrusters', 
        reps: '7', 
        weight: '155/105 lbs',
        instructions: 'Heavy thrusters.',
        videoUrl: 'https://www.youtube.com/watch?v=L219ltL15zk'
      },
      { 
        name: 'Toes-to-Bar', 
        reps: '7',
        instructions: 'Touch your toes to the bar.',
        videoUrl: 'https://www.youtube.com/watch?v=6dHvTlsMvNY'
      },
      { 
        name: 'Deadlifts', 
        reps: '7', 
        weight: '275/185 lbs',
        instructions: 'Heavy deadlifts.',
        videoUrl: 'https://www.youtube.com/watch?v=op9SdZJnayI'
      },
      { 
        name: 'Burpee Box Jump Overs', 
        reps: '7', 
        weight: '30/24"',
        instructions: 'Burpee, then jump over the box.',
        videoUrl: 'https://www.youtube.com/watch?v=m_Y67X86h38'
      },
      { 
        name: 'Kettlebell Swings', 
        reps: '7', 
        weight: '32/24 kg',
        instructions: 'Heavy swings.',
        videoUrl: 'https://www.youtube.com/watch?v=YE7VxlKde_0'
      },
      { 
        name: 'Chest-to-Bar Pull-ups', 
        reps: '7',
        instructions: 'Chest must touch the bar.',
        videoUrl: 'https://www.youtube.com/watch?v=HRV5YKKaeVw'
      }
    ],
    category: 'Hero',
    difficulty: 'Elite',
    isExtreme: true
  }
];

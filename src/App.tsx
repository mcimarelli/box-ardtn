/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Timer, 
  Flame, 
  ChevronRight, 
  Search, 
  Filter, 
  X, 
  Play, 
  Pause, 
  RotateCcw,
  ArrowLeft,
  Trophy,
  Activity,
  ExternalLink,
  Info
} from 'lucide-react';
import { WORKOUTS } from './data/workouts';
import { Workout, Movement, WorkoutLog } from './types';

// --- Components ---

const Badge = ({ children, variant = 'default' }: { children: ReactNode, variant?: 'default' | 'neon' | 'red' | 'outline' }) => {
  const styles = {
    default: 'bg-white/10 text-white/70',
    neon: 'bg-neon text-black font-bold',
    red: 'bg-aggressive-red text-white font-bold',
    outline: 'border border-white/20 text-white/50'
  };
  return (
    <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-sm ${styles[variant]}`}>
      {children}
    </span>
  );
};

const WorkoutTimer = ({ onBack, onFinish }: { onBack: () => void, onFinish: (time: string) => void }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="text-center">
        <h2 className="font-display text-4xl mb-2 tracking-tight">WOD TIMER</h2>
        <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Push your limits</p>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-4 bg-neon/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative font-mono text-8xl md:text-9xl font-bold tracking-tighter text-neon neon-glow">
          {formatTime(seconds)}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsActive(!isActive)}
          className="w-16 h-16 rounded-full bg-neon text-black flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isActive ? <Pause size={32} fill="black" /> : <Play size={32} fill="black" className="ml-1" />}
        </button>
        <button 
          onClick={() => { setSeconds(0); setIsActive(false); }}
          className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <RotateCcw size={20} />
        </button>
        {seconds > 0 && !isActive && (
          <button 
            onClick={() => onFinish(formatTime(seconds))}
            className="px-6 py-3 bg-aggressive-red text-white font-display text-lg tracking-tight hover:scale-105 transition-transform"
          >
            LOG RESULT
          </button>
        )}
      </div>

      <button 
        onClick={onBack}
        className="text-white/40 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Workout
      </button>
    </div>
  );
};

const LogForm = ({ workout, initialPerformance, onSave, onCancel }: { 
  workout: Workout, 
  initialPerformance: string, 
  onSave: (log: Omit<WorkoutLog, 'id'>) => void,
  onCancel: () => void
}) => {
  const [performance, setPerformance] = useState(initialPerformance);
  const [notes, setNotes] = useState('');

  return (
    <div className="flex flex-col space-y-6 py-8 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="font-display text-4xl mb-2 tracking-tight">LOG PERFORMANCE</h2>
        <p className="text-white/40 text-xs uppercase tracking-[0.2em]">{workout.name}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Result (Time/Reps/Weight)</label>
          <input 
            type="text" 
            value={performance}
            onChange={(e) => setPerformance(e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-4 text-xl font-mono focus:outline-none focus:border-neon transition-colors"
            placeholder="e.g. 12:45 or 150 reps"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Notes (Optional)</label>
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-neon transition-colors h-24 resize-none"
            placeholder="How did it feel? Any scaling?"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => onSave({ workoutId: workout.id, date: new Date().toISOString(), performance, notes })}
          className="flex-1 bg-neon text-black font-display text-xl py-4 tracking-tight hover:scale-[1.02] transition-transform"
        >
          SAVE LOG
        </button>
        <button 
          onClick={onCancel}
          className="px-6 bg-white/10 text-white font-display text-xl py-4 tracking-tight hover:bg-white/20 transition-colors"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

const TutorialImage = ({ src, alt, className, objectFit = 'cover' }: { src: string, alt: string, className?: string, objectFit?: 'cover' | 'contain' }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full bg-white/5 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-neon border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <Activity size={24} className="text-white/20 mb-2" />
          <p className="text-[10px] text-white/30 uppercase tracking-widest">Image failed to load</p>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'} ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

const TutorialView = ({ onBack }: { onBack: () => void }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const tutorials = [
    {
      title: "BACK SQUAT",
      subtitle: "POTENZA E PRECISIONE",
      description: "Guida tecnica al posizionamento, set-up e anatomia del movimento.",
      image: "/input_file_0.png",
      points: ["Posizionamento bilanciere sui trapezi", "Discesa sotto il parallelo", "Spinta dai talloni"]
    },
    {
      title: "CHEST TO BAR",
      subtitle: "TECNICA E PERFORMANCE",
      description: "I 3 passaggi fondamentali per una trazione perfetta fino al contatto.",
      image: "/input_file_1.png",
      points: ["Presa ampia e attivazione scapolare", "Controllo del movimento", "Variante Kipping"]
    },
    {
      title: "CROSSFIT CLEAN",
      subtitle: "TECNICA E VARIANTI",
      description: "Dallo stacco alla rack position: le 7 fasi del movimento olimpico.",
      image: "/input_file_2.png",
      points: ["Tripla estensione esplosiva", "Gomiti veloci (Pull Under)", "Varianti: Muscle, Power, Squat"]
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setFullscreenImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase"
              >
                CLOSE <X size={16} />
              </button>
              <div className="w-full h-[85vh] flex items-center justify-center">
                <TutorialImage 
                  src={fullscreenImage} 
                  alt="Fullscreen Tutorial"
                  objectFit="contain"
                  className="shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tighter uppercase">DEMO - TUTORIAL</h2>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">Master the movements</p>
        </div>
        <button 
          onClick={onBack}
          className="flex-shrink-0 text-white/30 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase"
        >
          <ArrowLeft size={16} /> <span className="hidden sm:inline">Back</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tutorials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card-bg aggressive-border overflow-hidden flex flex-col"
          >
            <div 
              className="aspect-[3/4] relative overflow-hidden group cursor-zoom-in"
              onClick={() => setFullscreenImage(t.image)}
            >
              <TutorialImage 
                src={t.image} 
                alt={t.title}
                className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="bg-neon text-black px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                  VIEW FULLSCREEN
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="neon">{t.subtitle}</Badge>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-3xl mb-2 tracking-tight">{t.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-6">{t.description}</p>
              <div className="mt-auto space-y-2">
                {t.points.map((p, pi) => (
                  <div key={pi} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    <div className="w-1 h-1 bg-neon rounded-full" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [showTimer, setShowTimer] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);
  const [view, setView] = useState<'workouts' | 'tutorials'>('workouts');
  const [tempPerformance, setTempPerformance] = useState('');
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [expandedMovement, setExpandedMovement] = useState<number | null>(null);

  useEffect(() => {
    const savedLogs = localStorage.getItem('box-ardtn-logs');
    if (savedLogs) {
      try {
        setLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error('Failed to parse logs', e);
      }
    }
  }, []);

  const saveLog = (newLogData: Omit<WorkoutLog, 'id'>) => {
    const newLog: WorkoutLog = {
      ...newLogData,
      id: Math.random().toString(36).substr(2, 9)
    };
    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem('box-ardtn-logs', JSON.stringify(updatedLogs));
    setShowLogForm(false);
    setShowTimer(false);
  };

  const workoutLogs = useMemo(() => {
    if (!selectedWorkout) return [];
    return logs.filter(l => l.workoutId === selectedWorkout.id);
  }, [logs, selectedWorkout]);

  const filteredWorkouts = useMemo(() => {
    return WORKOUTS.filter(w => {
      const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase()) || 
                           w.description.toLowerCase().includes(search.toLowerCase());
      
      let matchesCategory = true;
      if (selectedCategory === 'Extreme') {
        matchesCategory = !!w.isExtreme;
      } else if (selectedCategory) {
        matchesCategory = w.category === selectedCategory;
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const categories = ['Benchmark', 'Hero', 'Extreme'];

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-4 md:px-8">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-md pt-8 pb-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="text-neon" size={18} />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">Elite Performance</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.85] tracking-tighter uppercase">
            BOX ARDTN<span className="text-neon">.</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-neon transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH WODS..."
              className="bg-card-bg border border-white/10 rounded-none py-4 pl-12 pr-6 text-sm tracking-widest focus:outline-none focus:border-neon w-full md:w-[520px] transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button 
              onClick={() => { setView('workouts'); setSelectedCategory(null); }}
              className={`flex-shrink-0 px-4 py-2 text-[10px] font-bold tracking-widest uppercase border ${view === 'workouts' && !selectedCategory ? 'bg-neon text-black border-neon' : 'border-white/10 text-white/50 hover:border-white/30'}`}
            >
              ALL
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => { setView('workouts'); setSelectedCategory(cat); }}
                className={`flex-shrink-0 px-4 py-2 text-[10px] font-bold tracking-widest uppercase border ${view === 'workouts' && selectedCategory === cat ? 'bg-neon text-black border-neon' : 'border-white/10 text-white/50 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
            <button 
              onClick={() => setView('tutorials')}
              className={`flex-shrink-0 px-4 py-2 text-[10px] font-bold tracking-widest uppercase border flex items-center gap-2 ${view === 'tutorials' ? 'bg-neon text-black border-neon' : 'border-white/10 text-white/50 hover:border-white/30'}`}
            >
              <Play size={12} fill={view === 'tutorials' ? 'black' : 'currentColor'} /> DEMO
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {view === 'tutorials' ? (
            <motion.div
              key="tutorials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TutorialView onBack={() => setView('workouts')} />
            </motion.div>
          ) : !selectedWorkout ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredWorkouts.map((workout, idx) => (
                <motion.div
                  key={workout.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 0.03)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    delay: idx * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  onClick={() => setSelectedWorkout(workout)}
                  className="group relative bg-card-bg aggressive-border p-6 cursor-pointer overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-neon transition-all duration-300">
                    <ChevronRight size={24} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <Badge variant={workout.category === 'Hero' ? 'red' : 'neon'}>{workout.category}</Badge>
                      {workout.isExtreme && <Badge variant="red">XTRME</Badge>}
                    </div>
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{workout.type}</span>
                  </div>

                  <h3 className="font-display text-4xl mb-2 tracking-tight group-hover:text-neon transition-colors leading-none">
                    {workout.name}
                  </h3>
                  <p className="text-white/50 text-xs line-clamp-2 mb-6 leading-relaxed flex-grow">
                    {workout.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Flame size={14} className="text-aggressive-red" />
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{workout.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Dumbbell size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">{workout.movements.length} EXERCISES</span>
                    </div>
                  </div>
                  
                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 border border-neon/0 group-hover:border-neon/20 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card-bg aggressive-border p-8 md:p-12 relative"
            >
              {showLogForm ? (
                <LogForm 
                  workout={selectedWorkout!} 
                  initialPerformance={tempPerformance} 
                  onSave={saveLog}
                  onCancel={() => setShowLogForm(false)}
                />
              ) : showTimer ? (
                <WorkoutTimer 
                  onBack={() => setShowTimer(false)} 
                  onFinish={(time) => {
                    setTempPerformance(time);
                    setShowLogForm(true);
                  }}
                />
              ) : (
                <>
                  <button 
                    onClick={() => {
                      setSelectedWorkout(null);
                      setExpandedMovement(null);
                    }}
                    className="absolute top-8 left-8 text-white/30 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase"
                  >
                    <ArrowLeft size={16} /> Back to Library
                  </button>

                  <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant={selectedWorkout.category === 'Hero' ? 'red' : 'neon'}>{selectedWorkout.category}</Badge>
                        {selectedWorkout.isExtreme && <Badge variant="red">XTRME</Badge>}
                        <Badge variant="outline">{selectedWorkout.difficulty}</Badge>
                      </div>
                      <h2 className="font-display text-6xl md:text-8xl mb-4 tracking-tighter uppercase leading-none">
                        {selectedWorkout.name}
                      </h2>
                      <div className="flex items-center gap-2 text-neon mb-6">
                        <Timer size={20} />
                        <span className="font-mono text-xl font-bold tracking-tighter">{selectedWorkout.type}</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
                        {selectedWorkout.description}
                      </p>
                      
                      {selectedWorkout.notes && (
                        <div className="bg-white/5 border-l-2 border-neon p-4 mb-8">
                          <p className="text-[10px] font-bold text-neon uppercase tracking-widest mb-1">Coach's Notes</p>
                          <p className="text-xs text-white/70 italic">{selectedWorkout.notes}</p>
                        </div>
                      )}

                      <div className="flex flex-col gap-4">
                        <button 
                          onClick={() => setShowTimer(true)}
                          className="w-full md:w-auto bg-neon text-black px-10 py-4 font-display text-xl tracking-tight hover:scale-105 transition-transform flex items-center justify-center gap-3"
                        >
                          <Play size={20} fill="black" /> START WORKOUT
                        </button>
                        <button 
                          onClick={() => {
                            setTempPerformance('');
                            setShowLogForm(true);
                          }}
                          className="w-full md:w-auto bg-white/5 text-white border border-white/10 px-10 py-4 font-display text-xl tracking-tight hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
                        >
                          <Activity size={20} /> LOG MANUAL RESULT
                        </button>
                      </div>

                      {/* History Section */}
                      {workoutLogs.length > 0 && (
                        <div className="mt-12">
                          <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-6">Personal History</h4>
                          <div className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                            {workoutLogs.map(log => (
                              <div key={log.id} className="bg-white/5 p-4 border-l border-white/10">
                                <div className="flex justify-between items-start mb-1">
                                  <span className="font-mono text-lg font-bold text-neon">{log.performance}</span>
                                  <span className="text-[10px] text-white/30 uppercase">{new Date(log.date).toLocaleDateString()}</span>
                                </div>
                                {log.notes && <p className="text-xs text-white/50 italic">{log.notes}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/5 p-8 rounded-sm">
                      <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                        <Trophy size={14} className="text-neon" /> The Protocol
                      </h4>
                      <div className="space-y-4">
                        {selectedWorkout.movements.map((m, i) => (
                          <div key={i} className="border-b border-white/10 pb-4 group">
                            <div 
                              className="flex items-end justify-between cursor-pointer"
                              onClick={() => setExpandedMovement(expandedMovement === i ? null : i)}
                            >
                              <div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 flex items-center gap-2">
                                  Movement {i + 1}
                                  {(m.instructions || m.videoUrl) && <Info size={10} className="text-neon" />}
                                </p>
                                <p className="text-xl font-bold tracking-tight group-hover:text-neon transition-colors">{m.name}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-mono text-2xl font-bold text-neon leading-none">{m.reps}</p>
                                {m.weight && <p className="text-[10px] text-white/40 font-bold mt-1 uppercase">{m.weight}</p>}
                              </div>
                            </div>
                            
                            <AnimatePresence>
                              {expandedMovement === i && (m.instructions || m.videoUrl) && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 p-4 bg-white/5 border-l border-neon space-y-3">
                                    {m.instructions && (
                                      <p className="text-xs text-white/70 leading-relaxed">
                                        {m.instructions}
                                      </p>
                                    )}
                                    {m.videoUrl && (
                                      <a 
                                        href={m.videoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[10px] font-bold text-neon uppercase tracking-widest hover:underline"
                                      >
                                        <ExternalLink size={12} /> Watch Demonstration
                                      </a>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
        <div className="flex items-center gap-2">
          <Activity size={14} />
          <span>© 2026 BOX ARDTN PERFORMANCE SYSTEMS</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neon transition-colors">Privacy</a>
          <a href="#" className="hover:text-neon transition-colors">Terms</a>
          <a href="#" className="hover:text-neon transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

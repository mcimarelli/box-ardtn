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
  Activity
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

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [showTimer, setShowTimer] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);
  const [tempPerformance, setTempPerformance] = useState('');
  const [logs, setLogs] = useState<WorkoutLog[]>([]);

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
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-4 py-8 md:px-8">
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="text-neon" size={20} />
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">Elite Performance</span>
          </div>
          <h1 className="font-display text-7xl md:text-8xl leading-[0.85] tracking-tighter uppercase">
            BOX ARDTN<span className="text-neon">.</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-neon transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH WODS..."
              className="bg-card-bg border border-white/10 rounded-none py-3 pl-10 pr-4 text-xs tracking-widest focus:outline-none focus:border-neon w-full md:w-64 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border ${!selectedCategory ? 'bg-neon text-black border-neon' : 'border-white/10 text-white/50 hover:border-white/30'}`}
            >
              ALL
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border ${selectedCategory === cat ? 'bg-neon text-black border-neon' : 'border-white/10 text-white/50 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {!selectedWorkout ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredWorkouts.map((workout, idx) => (
                <motion.div
                  key={workout.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedWorkout(workout)}
                  className="group relative bg-card-bg aggressive-border p-6 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={24} className="text-neon" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <Badge variant={workout.category === 'Hero' ? 'red' : 'neon'}>{workout.category}</Badge>
                      {workout.isExtreme && <Badge variant="red">XTRME</Badge>}
                    </div>
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{workout.type}</span>
                  </div>

                  <h3 className="font-display text-4xl mb-1 tracking-tight group-hover:text-neon transition-colors">
                    {workout.name}
                  </h3>
                  <p className="text-white/50 text-xs line-clamp-2 mb-6 leading-relaxed">
                    {workout.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Flame size={14} className="text-aggressive-red" />
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{workout.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Dumbbell size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">{workout.movements.length} EXERCISES</span>
                    </div>
                  </div>
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
                    onClick={() => setSelectedWorkout(null)}
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
                      <h2 className="font-display text-7xl md:text-8xl mb-4 tracking-tighter uppercase leading-none">
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
                      <div className="space-y-6">
                        {selectedWorkout.movements.map((m, i) => (
                          <div key={i} className="flex items-end justify-between border-b border-white/10 pb-4 group">
                            <div>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Movement {i + 1}</p>
                              <p className="text-xl font-bold tracking-tight group-hover:text-neon transition-colors">{m.name}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-mono text-2xl font-bold text-neon leading-none">{m.reps}</p>
                              {m.weight && <p className="text-[10px] text-white/40 font-bold mt-1 uppercase">{m.weight}</p>}
                            </div>
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
      <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
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

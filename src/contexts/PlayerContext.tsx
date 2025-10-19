import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';

interface Track {
  id: string;
  title: string;
  artist: string;
  audio_url: string;
  duration: number;
}

interface PlayerContextType {
  isPlaying: boolean;
  currentTrackIndex: number;
  volume: number;
  isMuted: boolean;
  tracks: Track[];
  currentTrack: Track | null;
  isLoading: boolean;
  togglePlay: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  currentTrackProgress: number;
  setCurrentTrackProgress: (currentTrackProgress: number) => void;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackProgress, setCurrentTrackProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // fetching track list from supabase
  const { data: tracks = [], isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tracks')
        .select('*')
        .order('created_at');
      console.log(error);
      console.log(data);
      if (error) throw error;
      return data as Track[];
    },
  });

  // setting current track
  const currentTrack = tracks[currentTrackIndex] || null;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      //audioRef.current.currentTime = currentTrackProgress;
      console.log(
        ' here srcCurrentposition ==> ' + audioRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (track: Track) => {
    const trackIndex = tracks.findIndex(t => t.id === track.id);
    setCurrentTrackIndex(trackIndex);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseTrack = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const nextTrack = () => {
    const wasPlaying = isPlaying;
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
    // reset track position
    setCurrentTrackProgress(0);

    // Auto-play next track if currently playing
    if (wasPlaying) {
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const previousTrack = () => {
    const wasPlaying = isPlaying;
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }
    // reset track position
    setCurrentTrackProgress(0);

    // Auto-play previous track if currently playing
    if (wasPlaying) {
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTrackPosition = (newPosition: number) => {
    setCurrentTrackProgress((currentTrack.duration * newPosition) / 100);
    if (audioRef.current) {
      audioRef.current.currentTime =
        (currentTrack.duration * newPosition) / 100;
      console.log(audioRef.current);
      console.log(' position ==> ' + newPosition);
      console.log(' srcCurrentposition ==> ' + audioRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentTrackIndex,
        volume,
        isMuted,
        tracks,
        currentTrack,
        isLoading,
        togglePlay,
        nextTrack,
        previousTrack,
        setVolume: handleVolumeChange,
        toggleMute,
        currentTrackProgress,
        setCurrentTrackProgress: handleTrackPosition,
        playTrack,
        pauseTrack,
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack?.audio_url}
        onEnded={nextTrack}
        className="hidden"
      />
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
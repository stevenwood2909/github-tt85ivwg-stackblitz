import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { usePlayer } from '../contexts/PlayerContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)({
  color: '#d96b2b',
  '& .MuiSlider-thumb': {
    backgroundColor: '#d96b2b',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0 0 0 8px rgba(217, 107, 43, 0.16)',
    },
    '&.Mui-active': {
      boxShadow: '0 0 0 12px rgba(217, 107, 43, 0.16)',
    },
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#404040',
  },
  '& .MuiSlider-track': {
    backgroundColor: '#d96b2b',
  },
});

const AudioPlayer = () => {
  const {
    isPlaying,
    currentTrack,
    volume,
    isMuted,
    isLoading,
    togglePlay,
    nextTrack,
    previousTrack,
    setVolume,
    toggleMute,
    currentTrackIndex,
    tracks,
    currentTrackProgress,
    setCurrentTrackProgress,
  } = usePlayer();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { language } = useLanguage();

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeeking = (event: Event, newTime: number | number[]) => {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.currentTime = newTime as number;
    }
  };

  useEffect(() => {
    // Get the audio element from the PlayerContext
    const audioElement = document.querySelector('audio');
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      setProgress(audioElement.currentTime);
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadedmetadata', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleTimeUpdate);
    };
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-zinc-900/90 via-stone-900/90 to-zinc-900/90 backdrop-blur-md border-t border-primary-900/30 transition-all duration-300 ${
        isCollapsed ? 'h-14' : 'h-auto'
      } z-50`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-2 right-2 text-zinc-400 hover:text-primary-400 transition-colors"
        aria-label={isCollapsed ? 'Expand player' : 'Collapse player'}
      >
        {isCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <div className="container mx-auto px-2 py-2">
        {isCollapsed ? (
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-primary-500 text-black flex items-center justify-center hover:bg-primary-400 transition-colors flex-shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <div className="min-w-0 flex-1">
              <div className="font-medium text-sm truncate">{currentTrack.title}</div>
              <div className="text-xs text-zinc-400 truncate">{currentTrack.artist}</div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-primary-500 text-black flex items-center justify-center hover:bg-primary-400 transition-colors flex-shrink-0"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">{currentTrack.title}</div>
                  <div className="text-xs text-zinc-400 truncate">{currentTrack.artist}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={previousTrack}
                  className="text-zinc-400 hover:text-primary-400 transition-colors p-1"
                >
                  <SkipBack size={16} />
                </button>
                <button
                  onClick={nextTrack}
                  className="text-zinc-400 hover:text-primary-400 transition-colors p-1"
                >
                  <SkipForward size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs text-zinc-400 w-8 text-right">
                  {formatTime(progress)}
                </span>
                <CustomSlider
                  min={0}
                  max={duration || 0}
                  value={progress}
                  onChange={handleSeeking}
                  className="flex-1"
                  size="small"
                />
                <span className="text-xs text-zinc-400 w-8">
                  {formatTime(duration)}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 w-[200px]">
                <button
                  onClick={toggleMute}
                  className="text-zinc-400 hover:text-primary-400 transition-colors p-1 flex-shrink-0"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <CustomSlider
                  value={volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  className="flex-1"
                  size="small"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
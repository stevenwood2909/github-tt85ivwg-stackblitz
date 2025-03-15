import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PlayerProvider } from './contexts/PlayerContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Projects from './pages/Projects';
import Concerts from './pages/Concerts';
import Music from './pages/Music';
import Video from './pages/Video';
import Contact from './pages/Contact';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PlayerProvider>
        <Router>
          <div className="min-h-screen bg-black text-zinc-100">
            <Navbar />
            <main className="pb-24">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/biography" element={<Biography />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/concerts" element={<Concerts />} />
                <Route path="/music" element={<Music />} />
                <Route path="/video" element={<Video />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <AudioPlayer />
          </div>
        </Router>
      </PlayerProvider>
    </QueryClientProvider>
  );
}

export default App
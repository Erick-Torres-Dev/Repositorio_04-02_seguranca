import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Curiosities } from './sections/Curiosities';
import { Modules } from './sections/Modules';
import { Forum } from './sections/Forum';

console.log('App.tsx is loaded');

function App() {
  console.log('App component rendering...');
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle at 10% 20%, rgba(121, 40, 202, 0.2) 0%, rgba(0,0,0,0) 40%), radial-gradient(circle at 90% 80%, rgba(0, 242, 234, 0.15) 0%, rgba(0,0,0,0) 40%)',
        pointerEvents: 'none'
      }} />

      <Navbar />
      <Hero />
      <Modules />
      <Curiosities />
      <Forum />
      <Footer />
    </div>
  );
}

export default App;


import Hero from './components/Hero';
import About from './components/About';
import ProgramHighlights from './components/ProgramHighlights';
import WhyAttend from './components/WhyAttend';
import TargetAudience from './components/TargetAudience';
import FAQ from './components/FAQ';
import Logistics from './components/Logistics';

function App() {
  return (
    <div className="bg-[#f8fafc] text-[#0f172a]">
      <Hero />
      <About />
      <ProgramHighlights />
      <WhyAttend />
      <TargetAudience />
      <FAQ />
      <Logistics />
    </div>
  );
}

export default App;

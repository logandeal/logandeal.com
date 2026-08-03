import { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import AboutSection from '../components/home/AboutSection';
import BlogSection from '../components/home/BlogSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TimelineSection from '../components/home/TimelineSection';
import MoreSection from '../components/home/MoreSection';

function IndexPage() {
  const [activeId, setActiveId] = useState(null);
  const mainRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame = null;

    const setClosestSection = () => {
      const sections = mainRef.current?.querySelectorAll('section[id]');
      if (!sections || sections.length === 0) return;

      const { x: mouseX, y: mouseY } = mousePos.current;
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const closest = {
          x: Math.max(rect.left, Math.min(mouseX, rect.right)),
          y: Math.max(rect.top, Math.min(mouseY, rect.bottom)),
        };
        const distance = Math.hypot(mouseX - closest.x, mouseY - closest.y);

        if (!closestSection || distance < minDistance) {
          closestSection = section;
          minDistance = distance;
        }
      });
      setActiveId(closestSection.id);
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        setClosestSection();
      });
    };

    const handleMouseMove = (event) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
      scheduleUpdate();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', scheduleUpdate);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className='home'>
      <Sidebar activeId={activeId} />
      <main ref={mainRef} className='sections'>
        <AboutSection />
        <BlogSection />
        <TimelineSection />
        <ProjectsSection />
        <MoreSection />
      </main>
      <style jsx>{`
        .home {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          gap: 3rem;
        }
        .sections {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 5rem;
          padding: 3rem 0;
        }
        @media (max-width: 900px) {
          .home {
            flex-direction: column;
            gap: 1rem;
          }
          .sections {
            gap: 4rem;
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
}

IndexPage.fullWidth = true;

export default IndexPage;

import Sidebar from '../components/Sidebar';
import AboutSection from '../components/home/AboutSection';
import BlogSection from '../components/home/BlogSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TimelineSection from '../components/home/TimelineSection';
import ExtrasSection from '../components/home/ExtrasSection';
import FeedSection from '../components/home/FeedSection';

function IndexPage() {
  return (
    <div className="home">
      <Sidebar />
      <main className="sections">
        <AboutSection />
        <BlogSection />
        <ProjectsSection />
        <TimelineSection />
        <ExtrasSection />
        <FeedSection />
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

import resume from "../src/data/resume.json";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceList from "./components/ExperienceList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Sticky Navigation */}
      <Header />

      {/* Hero Section with Name, Title, Summary */}
      <Hero name={resume.name} title={resume.title} summary={resume.summary} />

      {/* About Section */}
      <About bio={resume.about.bio} stats={resume.about.stats} />

      {/* Experience Section */}
      <ExperienceList experience={resume.experience} />

      {/* Skills Grid */}
      <SkillsGrid skills={resume.skills} />

      {/* Education Section */}
      <EducationSection education={resume.education} />

      {/* <Certifications Section */}
      {/* <CertificationSection certifications={resume.certifications} /> */}

      {/* Contact Section */}
      <ContactSection contact={resume.contact} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

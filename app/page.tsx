import AboutSection from '@/components/homepage/about';
import Blog from '@/components/homepage/blog';
import ContactSection from '@/components/homepage/contact';
import Education from '@/components/homepage/education';
import Experience from '@/components/homepage/experience';
import HeroSection from '@/components/homepage/hero-section';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import Image from 'next/image';

export default function Home() {
    const blogs = [
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
        {
            title: 'Title',
        },
    ];
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Blog blogs={blogs} />
            <ContactSection />
        </>
    );
}

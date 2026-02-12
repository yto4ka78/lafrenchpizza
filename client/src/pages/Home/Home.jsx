import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import Process from '../../components/Process/Process';
import Story from '../../components/Story/Story';
import StatusStrip from '../../components/StatusStrip/StatusStrip';
import Community from '../../components/Community/Community';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Menu preview />
      <Process />
      <Story />
      <StatusStrip />
      <Community />
    </>
  );
}

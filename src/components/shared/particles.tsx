'use client';

import { useMemo } from 'react';
import { Particles } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';

/** Connected-dots particle background — eGovPH style */
export function ParticlesBackground() {
  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        color: { value: '#3b82f6' },
        links: {
          enable: true,
          color: '#3b82f6',
          distance: 150,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          outModes: { default: 'bounce' },
        },
        number: {
          density: { enable: true, area: 900 },
          value: 60,
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  );
}

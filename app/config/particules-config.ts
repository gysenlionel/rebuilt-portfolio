import type { IOptions, RecursivePartial } from '@tsparticles/engine'

const configDark: RecursivePartial<IOptions> = {
  particles: {
    stroke: {
      width: 0,
      color: '#000000',
    },
    polygon: {
      sides: 5,
    },
    image: {
      src: 'img/github.svg',
      width: 100,
      height: 100,
    },
    number: {
      value: 100,
    },
    color: {
      value: '#fcf6f4',
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 0.4, max: 3 },
      animation: {
        enable: true,
        speed: 3,
        sync: false,
      },
    },
    links: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 600,
        },
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas', // ici ça marche car TS comprend que c’est un literal
    events: {
      onHover: {
        enable: false,
        mode: 'bubble',
      },
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
}

export default configDark

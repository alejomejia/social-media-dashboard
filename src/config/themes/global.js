const global = {
  colors: {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
  },
  brands: {
    facebook: 'hsl(195, 100%, 50%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
    youtube: 'hsl(348, 97%, 39%)',
  },
  radius: {
    s: '10px',
    m: '20px',
  },
  transitions(prop) {
    return `${prop} .35s ease`;
  },
  breakpoints: {
    l: '1440px',
    m: '1024px',
    s: '768px',
    xs: '480px',
  },
};

export default global;
const global = {
  palette: {
    green: 'hsl(163, 72%, 41%)',
    red: 'hsl(356, 69%, 56%)',
  },
  brands: {
    facebook: 'hsl(203, 89%, 53%)',
    twitter: 'hsl(195, 100%, 50%)',
    instagram: 'linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    youtube: 'hsl(348, 97%, 39%)',
  },
  transitions(prop) {
    return `${prop} .35s ease`;
  },
  breakpoints: {
    l: '1440px',
    m: '1024px',
    s: '768px',
    xs: '550px',
  },
};

export default global;

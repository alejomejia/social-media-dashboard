// Importing icons
import iconFacebook from '../assets/icon-facebook.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconInstagram from '../assets/icon-instagram.svg';
import iconYoutube from '../assets/icon-youtube.svg';
import iconUp from '../assets/icon-up.svg';
import iconDown from '../assets/icon-down.svg';

// Condition to render the icon depending on social string on Cards
export const renderSocialIcon = (social) => {
  switch (social) {
    case 'facebook':
      return iconFacebook;
    case 'twitter':
      return iconTwitter;
    case 'instagram':
      return iconInstagram;
    case 'youtube':
      return iconYoutube;
    default:
      console.error('No social string valid.');
  }
};

// Condition to render the icon depending on social string on Cards
export const renderFollowersText = (social) => {
  if (social === 'youtube') {
    return 'Subscribers';
  } else {
    return 'Followers';
  }
};

// Condition to render icon type (up / green or down  / red) on Cards
export const renderTypeIcon = (type) => {
  if (type === 'up') {
    return iconUp;
  } else {
    return iconDown;
  }
};

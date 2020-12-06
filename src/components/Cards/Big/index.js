// Importing from packages
import PropTypes from 'prop-types';

// Importing icons
import iconFacebook from '../../../assets/icon-facebook.svg';
import iconTwitter from '../../../assets/icon-twitter.svg';
import iconInstagram from '../../../assets/icon-instagram.svg';
import iconYoutube from '../../../assets/icon-youtube.svg';
import iconUp from '../../../assets/icon-up.svg';
import iconDown from '../../../assets/icon-down.svg';

// Importing elements from styles
import { Root } from './styles';

// Making Header component
const BigCard = ({ social, username, followers, type, today }) => {
  // Condition to render the icon depending on social string
  const renderSocialIcon = (social) => {
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

  // Condition to render the icon depending on social string
  const renderFollowersText = (social) => {
    if (social === 'youtube') {
      return 'Subscribers';
    } else {
      return 'Followers';
    }
  };

  // Condition to render icon type (up / green or down  / red)
  const renderTypeIcon = (type) => {
    if (type === 'up') {
      return iconUp;
    } else {
      return iconDown;
    }
  };

  return (
    <Root className={`BigCard BigCard--${social}`}>
      <div className="BigCard__wrapper">
        <div className="BigCard__social">
          <div className="BigCard__social-wrapper">
            <img
              className="BigCard__social-icon"
              src={renderSocialIcon(social)}
              alt={`${social} icon`}
            />
          </div>
          <span className="BigCard__social-username">{username}</span>
        </div>
        <div className="BigCard__followers">
          <span className="BigCard__followers-quantity">{followers}</span>
          <span className="BigCard__followers-text">
            {renderFollowersText(social)}
          </span>
        </div>
        <div className={`BigCard__today BigCard__today--${type}`}>
          <img
            className="BigCard__today-icon"
            src={renderTypeIcon(type)}
            alt={`${type} icon`}
          />
          <span className="BigCard__today-quantity">{today}</span>
          <span className="BigCard__today-text">Today</span>
        </div>
      </div>
    </Root>
  );
};

// Adding proptypes to component
BigCard.propTypes = {
  social: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'youtube'])
    .isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  today: PropTypes.string.isRequired,
};

export default BigCard;

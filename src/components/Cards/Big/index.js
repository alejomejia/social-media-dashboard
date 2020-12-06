// Importing from packages
import PropTypes from 'prop-types';

// Importing from services
import {
  renderSocialIcon,
  renderFollowersText,
  renderTypeIcon,
} from '../../../services/';

// Importing elements from styles
import { Root } from './styles';

// Making BigCard component
const BigCard = ({ social, username, followers, type, today }) => {
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

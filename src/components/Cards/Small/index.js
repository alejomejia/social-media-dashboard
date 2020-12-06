// Importing from packages
import PropTypes from 'prop-types';

// Importing from services
import { renderSocialIcon, renderTypeIcon } from '../../../services/';

// Importing elements from styles
import { Root } from './styles';

// Making SmallCard component
const SmallCard = ({ title, social, quantity, type, percent }) => {
  return (
    <Root className="SmallCard">
      <div className="SmallCard__wrapper">
        <div className="SmallCard__header">
          <h3 className="SmallCard__header-title">{title}</h3>
          <img
            className="SmallCard__header-icon"
            src={renderSocialIcon(social)}
            alt={`${social} icon`}
          />
        </div>
        <div className="SmallCard__footer">
          <span className="SmallCard__footer-quantity">{quantity}</span>
          <div
            className={`SmallCard__footer-percent SmallCard__footer-percent--${type}`}
          >
            <img
              className="SmallCard__type-icon"
              src={renderTypeIcon(type)}
              alt={`${type} icon`}
            />
            <span className="SmallCard__type-percent">{percent}</span>
          </div>
        </div>
      </div>
    </Root>
  );
};

// Adding proptypes to component
SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  social: PropTypes.oneOf(['facebook', 'instagram', 'twitter', 'youtube'])
    .isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  percent: PropTypes.string.isRequired,
};

export default SmallCard;

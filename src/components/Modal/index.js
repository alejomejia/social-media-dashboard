// Importing from packages
import PropTypes from 'prop-types';

// Importing from services
import { renderSocialIcon, renderTypeIcon } from '../../services/';

// Importing close icon from assets
import iconClose from '../../assets/icon-close.svg';

// Importing elements from styles
import { Root } from './styles';

// Making Modal component
const Modal = ({ open = false }) => {
  return (
    <>
      {open && (
        <Root className="Modal">
          <div className="Modal__container">
            <div className="Modal__card">
              <div className="Modal__card-close">
                <button className="Modal__card-close-button">
                  <img
                    className="Modal__card-close-icon"
                    src={iconClose}
                    alt="close icon"
                  />
                </button>
              </div>
              <div className="Modal__card-header">
                <h3 className="Modal__title">Facebook followers</h3>
                <div className="Modal__social">
                  <img
                    className="Modal__social-icon"
                    src={renderSocialIcon('facebook')}
                    alt="Facebook icon"
                  />
                  <span className="Modal__social-username">@nathanf</span>
                </div>
                <div className="Modal__data">
                  <div className="Modal__data-item">
                    <div className="Modal__data-quantity">
                      <span className="Modal__data-quantity-number">1987</span>
                    </div>
                    <span className="Modal__data-text">Total followers</span>
                  </div>
                  <div className="Modal__data-item">
                    <div className="Modal__data-quantity Modal__data-quantity--up">
                      <img
                        className="Modal__data-quantity-icon"
                        src={renderTypeIcon('up')}
                        alt="up icon"
                      />
                      <span className="Modal__data-quantity-number">81</span>
                    </div>
                    <span className="Modal__data-text">
                      New followers in the past 10 days
                    </span>
                  </div>
                  <div className="Modal__data-item">
                    <div className="Modal__data-quantity Modal__data-quantity--up">
                      <img
                        className="Modal__data-quantity-icon"
                        src={renderTypeIcon('up')}
                        alt="up icon"
                      />
                      <span className="Modal__data-quantity-number">12</span>
                    </div>
                    <span className="Modal__data-text">
                      New followers TODAY
                    </span>
                  </div>
                </div>
              </div>
              <div className="Modal__card-body">
                <div className="Modal__date">
                  <h4 className="Modal__date-range">May 4 - May 13</h4>
                </div>
                <div className="Modal__chart">CHART HERE</div>
              </div>
            </div>
          </div>
        </Root>
      )}
    </>
  );
};

// Adding proptypes to component
Modal.propTypes = {
  open: PropTypes.bool,
};

export default Modal;
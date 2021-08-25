import EventEmitter from 'events';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Mascot from '../../../components/ui/mascot';
import Button from '../../../components/ui/button';
import {
  INITIALIZE_CREATE_PASSWORD_ROUTE,
  INITIALIZE_SELECT_ACTION_ROUTE,
} from '../../../helpers/constants/routes';

export default class Welcome extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    participateInMetaMetrics: PropTypes.bool,
    welcomeScreenSeen: PropTypes.bool,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.animationEventEmitter = new EventEmitter();
  }

  componentDidMount() {
    const { history, participateInMetaMetrics, welcomeScreenSeen } = this.props;

    if (welcomeScreenSeen && participateInMetaMetrics !== null) {
      history.push(INITIALIZE_CREATE_PASSWORD_ROUTE);
    } else if (welcomeScreenSeen) {
      history.push(INITIALIZE_SELECT_ACTION_ROUTE);
    }
  }

  handleContinue = () => {
    this.props.history.push(INITIALIZE_SELECT_ACTION_ROUTE);
  };

  render() {
    const { t } = this.context;

    return (
      <div className="welcome-page__wrapper">
        <div className="welcome-page">
          {/* <Mascot
            animationEventEmitter={this.animationEventEmitter}
            width="125"
            height="125"
          /> */}
          <div className="XDC-logo">
            <img src="D:\LwHz\HXdc-metamask\XDCPay-metamask\app\images\XDCPay.svg"></img>
          </div>
          <div className="welcome-page__header">{t('termsOfUse')}</div>
          <div className="welcome-page__description">
            <p className="welcome-page__description__terms-of-use">
              Dear <span className="bold-xdc">XDC</span>Pay Users,<br /><br />

              <span className="bold-xdc">XDC</span>Pay is a beta software.<br /><br />

              When you log in to <span className="bold-xdc">XDC</span>Pay, your current account’s address is visible
               to every new site you visit. This can be used to look up your account
               balances of XDC and other tokens.<br /><br />
               
              For your privacy, for now, please sign out of XDC Pay when you’re done
               using a site.<br /><br />
                
              Related Links<br /><br />

              <a href="https://www.xinfin.org/disclaimer.php" target="_blank"><span className="terms-link">Terms of Service</span></a>
            </p>
          </div>
          <Button
            type="primary"
            className="first-time-flow__button"
            onClick={this.handleContinue}
          >
            {t('accept')}
          </Button>
        </div>
      </div>
    );
  }
}


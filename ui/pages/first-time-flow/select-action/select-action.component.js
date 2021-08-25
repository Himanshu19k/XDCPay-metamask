import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/ui/button';
import MetaFoxLogo from '../../../components/ui/metafox-logo';
import { INITIALIZE_METAMETRICS_OPT_IN_ROUTE } from '../../../helpers/constants/routes';

export default class SelectAction extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    isInitialized: PropTypes.bool,
    setFirstTimeFlowType: PropTypes.func,
    nextRoute: PropTypes.string,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  componentDidMount() {
    const { history, isInitialized, nextRoute } = this.props;

    if (isInitialized) {
      history.push(nextRoute);
    }
  }

  handleCreate = () => {
    this.props.setFirstTimeFlowType('create');
    this.props.history.push(INITIALIZE_METAMETRICS_OPT_IN_ROUTE);
  };

  handleImport = () => {
    this.props.setFirstTimeFlowType('import');
    this.props.history.push(INITIALIZE_METAMETRICS_OPT_IN_ROUTE);
  };

  render() {
    const { t } = this.context;

    return (
      <div className="select-action">
        <div className="XDC-logo">
          <img src="D:\LwHz\HXdc-metamask\XDCPay-metamask\app\images\XDCPay.svg"></img>
        </div>
        <div className="den-container">
          <div className="encrypt-den">{t('encryptNewDen')}</div>
          <div class="tooltip">
          <i className="fa fa-question-circle"></i>
          <span class="tooltiptext">{t('yourDenIsYourPassword')}</span>
          </div>
        </div>
        <div className="password">
          <div>
            <input
              className="pwd"
              type="password"
              placeholder="New Password (min 8 chars)"
            ></input>
          </div>
          <div>
            <input
              className="confirm-pwd"
              type="password"
              placeholder="Confirm Password"
            ></input>
          </div>
        </div>
        <div>
          <Button
            type="primary"
            className="create-wallet-btn"
            onClick={this.handleCreate}
          >
            {t('createAWallet')}
          </Button>
        </div>
        <div className="import-existing-den">{t('importExistingDen')}</div>
        {/* <MetaFoxLogo /> */}

        {/* <div className="select-action__wrapper">
          <div className="select-action__body">
            <div className="select-action__body-header">
              {t('newToMetaMask')}
            </div>
            <div className="select-action__select-buttons">
              <div className="select-action__select-button">
                <div className="select-action__button-content">
                  <div className="select-action__button-symbol">
                    <img src="./images/download-alt.svg" alt="" />
                  </div>
                  <div className="select-action__button-text-big">
                    {t('noAlreadyHaveSeed')}
                  </div>
                  <div className="select-action__button-text-small">
                    {t('importYourExisting')}
                  </div>
                </div>
                <Button
                  type="primary"
                  className="first-time-flow__button"
                  onClick={this.handleImport}
                >
                  {t('importWallet')}
                </Button>
              </div>
              <div className="select-action__select-button">
                <div className="select-action__button-content">
                  <div className="select-action__button-symbol">
                    <img src="./images/thin-plus.svg" alt="" />
                  </div>
                  <div className="select-action__button-text-big">
                    {t('letsGoSetUp')}
                  </div>
                  <div className="select-action__button-text-small">
                    {t('thisWillCreate')}
                  </div>
                </div>
                <Button
                  type="primary"
                  className="first-time-flow__button"
                  onClick={this.handleCreate}
                >
                  {t('createAWallet')}
                </Button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

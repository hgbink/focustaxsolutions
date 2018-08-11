// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';

import { appUrl } from '../layouts/utils';

const Submit = ({ className, loading }: { className?: string, loading: boolean }) => (
  <button type="submit" disabled={loading} className={`btn btn-primary btn-round btn-xl ${className || ''}`}>
    {loading ?
      <Trans><i className="fa fa-spin fa-spinner" aria-hidden="true" /> Signing up…</Trans> :
      <Trans>Get Started</Trans>}
  </button>
);
Submit.defaultProps = { className: '' };

export default class extends React.Component<Props, {
  email: string,
  invalid: boolean,
  loading: boolean,
}> {
  state = { email: '', invalid: false, loading: false };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, invalid: false });
  }
  handleSubmit = (e: any) => {
    if (this.state.loading) {
      e.preventDefault();
      return;
    }
    const valid = this.re.test(this.state.email);
    if (!valid) {
      this.setState({ invalid: true });
      e.preventDefault();
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'signup' });
  }
  render = () => {
    const { i18n } = this.props;
    const hiddenDivStyle = {
      display: 'none',
   };
    return (
      <form
        className="input-round py-5"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="https://focustaxsolutions.us19.list-manage.com/subscribe/post?u=a6fa9e25fbcaef891e2ff273b&amp;id=5aca7414dd" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form"
        target="blank"
      >
        <div id="mergeRow-gdpr" className="form-group input-group gap-y p-2 mb-0 checkbox">
          <fieldset name="interestgroup_field">
              <input type="checkbox" id="gdpr_1203" name="gdpr[1203]" value="Y"/>
              <span>&nbsp;Focus tax solutions will use the email information you provide on this form to be in touch with you and to provide updates and marketing.</span> 
          </fieldset>
        </div>
        <div className="form-group input-group bg-white gap-y p-2 mb-0">
          <input
            type="text"
            name="EMAIL"
            className="form-control form-control"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={i18n.t`Enter your email…`}
          />
          <div className="input-group-append d-none d-sm-block">
            <Submit {...this.state} />
          </div>
        </div>
        <div id="mergeRow-gdpr" className="form-group input-group gap-y p-2 mb-0">
          <p>We use MailChimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to MailChimp for processing. Learn more about MailChimp's privacy practices <a href="https://mailchimp.com/legal/" target="_blank">here</a>.</p>
        </div>
            
            <div aria-hidden="true" style={hiddenDivStyle}><input type="text" name="b_a6fa9e25fbcaef891e2ff273b_5aca7414dd" tabIndex="-1" value=""/></div>
        <Submit {...this.state} className="d-sm-none btn-block py-3 mt-2 fs-17" />
        <div className="d-none">
          <div>Don’t fill this out if you’re human: <input name="bot-field" /></div>
          <input name="referrer" />
          <input name="href" />
        </div>
        <small className={`text-danger ${this.state.invalid ? '' : 'invisible'}`}>
          <Trans>Oops. This email address is invalid.</Trans>
        </small>
      </form>
    );
  }
}

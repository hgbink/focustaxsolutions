// @flow

import * as React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { I18nProvider, withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';

import { Title, name, appUrl, blogUrl, demoUrl } from './utils';
import { catalogs, langFromPath, langPrefix, getLocale } from '../i18n-config';
import SignupForm from '../components/SignupForm';

import '../assets/scss/page.scss';

import logoDefault from '../img/fts_black.png';
import logoInverse from '../img/fts_white.png';

const hasFooter = (pathname: string) => !pathname.match(/contact/);


type LayoutProps = {
  ...$Exact<Props>,
  lang: string,
  location: { pathname: string },
}

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-dark" src={logoDefault} width={150} height={60} alt={name} />
    {props.inverse &&
      <img className="logo-light" src={logoInverse} width={150} height={60} alt={name} />}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
    <div className="container">

      <div className="navbar-left">
        <button className="navbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>

      <section className="navbar-mobile">
        <h6 className="d-sm-none">Focus Tax</h6>
        <nav className="nav nav-navbar ml-auto">
          <a className="nav-link" href="mailto:tax@focustaxsolutions.com.au"><i className="fa fa-envelope" />&nbsp;tax@focustaxsolutions.com.au </a>
          <a className="nav-link" href="tel:0420511885"><i className="fa fa-phone" />&nbsp;0420511885</a>
          <a className="nav-link" target="blank" href="https://www.google.com.au/maps/place/Focus+Tax+Solutions/@-33.8778922,151.2080718,15z/data=!4m5!3m4!1s0x0:0xffd76379ccf584fa!8m2!3d-33.8778922!4d151.2080718">
            <i className="fa fa-map-marker" />&nbsp;
            Sydney
          </a>
          <a className="nav-link" target="blank" href="https://www.google.com/maps/place/Focus+Tax+Solutions/@-33.9410548,151.1999627,17z/data=!4m5!3m4!1s0x6b12b1593c2fab05:0x201ef49eab4aa23b!8m2!3d-33.9410548!4d151.2021514?hl=en-AU">
            <i className="fa fa-map-marker" />&nbsp;
            Botany
          </a>
          <a className="nav-link" href="https://www.facebook.com/focustaxsolutionsaustralia">
            <i className="fa fa-facebook" />&nbsp; 
            facebook
          </a>
        </nav>

        <span className="navbar-divider" />

      </section>
    </div>
  </nav>
);


const Footer = (props: LayoutProps) => (
  <div>
    {hasFooter(props.location.pathname) &&
      <section className="section bg-pale-secondary" id="try">
        <div className="container text-center signup py-7">
          <h2><Trans>Contact us</Trans></h2>

          <SignupForm {...props} />

          <p>
            <Trans>
              Still hesitating?&nbsp; Call us on <b>0420511885</b> or email <b>tax@focustaxsolutions.com.au</b>
            </Trans>
          </p>

        </div>
      </section>}
    <footer className="footer py-7">
      <div className="container">
        <div className="row gap-y">

          <div className="col-md-6 col-xl-3">
            <Logo {...props} inverse={false} />
          </div>

          <div className="col-6 col-md-6 col-xl-6">
           
            <div className="nav flex-column">
              <a href="mailto:tax@focustaxsolutions.com.au"><i className="fa fa-envelope" />&nbsp;tax@focustaxsolutions.com.au </a>
              <a className="social" href="tel:0420511885"><i className="fa fa-phone" />&nbsp;0420511885</a>
              <a className="social-google" target="blank" href="https://www.google.com.au/maps/place/Focus+Tax+Solutions/@-33.8778922,151.2080718,15z/data=!4m5!3m4!1s0x0:0xffd76379ccf584fa!8m2!3d-33.8778922!4d151.2080718">
                <i className="fa fa-map-marker" />&nbsp;
                Level 23, 66 Goulburn Street, Sydney
              </a>
              <a className="social-google" target="blank" href="https://www.google.com/maps/place/Focus+Tax+Solutions/@-33.9410548,151.1999627,17z/data=!4m5!3m4!1s0x6b12b1593c2fab05:0x201ef49eab4aa23b!8m2!3d-33.9410548!4d151.2021514?hl=en-AU">
                <i className="fa fa-map-marker" />&nbsp;
                Shop 2, 30 Jasmine Street, Botany
              </a>
              <a className="social-facebook" href="https://www.facebook.com/focustaxsolutionsaustralia">
                <i className="fa fa-facebook" />&nbsp; 
                focustaxsolutionsaustralia
              </a>
            </div>
          </div>

          <div className="col-6 col-md-6 col-xl-2 text-center px-1">
            {props.lang === 'cn' ?
              <Link href to={props.location.pathname.substr(3)} className="btn btn-round btn-outline-primary">English</Link> :
              <Link href to={`cn${props.location.pathname}`} className="btn btn-round btn-outline-primary">中文</Link>}
          </div>

        </div>
      </div>
    </footer>
  </div>
);


type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  data: { site: { siteMetadata: {
    name: string, siteUrl: string,
  } } },
  children: (Object) => React.Node,
  location: { pathname: string },
}

const TemplateWrapper = withI18n()((props: SiteProps) => {
  const { i18n } = props;
  const { siteUrl } = props.data.site.siteMetadata;
  const prefix = langPrefix(props.lang);
  const thumbnailUrl = `${siteUrl}/thumbnail.png`;
  const { pathname } = props.location;
  const EnPathname = `${siteUrl}${pathname.startsWith('/cn') ? pathname.substr(3) : pathname}`;
  return (
    <div>
      <Title
        title={i18n.t`Sydney Accountants | Australia | Focus Tax Solutions`}
        description={i18n.t`Focus Tax Solutions provides unparalleled personalized accounting services to a broad range of clients across Sydney.`}
      />
      <Helmet>
        <html lang={props.lang} />
        <meta name="keywords" content={i18n.t`Accounting · Finance · Accountant`} />
        <meta name="author" content="Focus IT" />

        {/* Facebook social card */}
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnailUrl} />

        <link rel="alternate" href={EnPathname} hrefLang="x-default" />
        <link rel="alternate" href={EnPathname} hrefLang="en" />
        <link rel="alternate" href={`${siteUrl}${pathname.startsWith('/cn') ? '' : '/cn'}${pathname}`} hrefLang="cn" />

        {/* Disable AOS for Google */}
        <noscript>
          {`
            <style>
              [data-aos] {
                  opacity: 1 !important;
                  transform: translate(0) scale(1) !important;
              }
            </style>
          `}
        </noscript>
      </Helmet>
      <Nav {...props} prefix={prefix} />
      {props.children({ ...props, prefix })}
      <Footer {...props} prefix={prefix} />
    </div>
  );
});


export default class extends React.Component<{ location: { pathname: string } }> {
  componentDidMount = () => {
    require('../assets/js/page'); // eslint-disable-line global-require
    require('../assets/js/script'); // eslint-disable-line global-require

    const { pathname } = this.props.location;
    if (getLocale() === 'cn' && !pathname.startsWith('/cn')) {
      navigateTo(`/cn${this.props.location.pathname}`);
    }

  }
  render = () => {
    const lang = langFromPath(this.props.location.pathname);
    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} lang={lang} />
      </I18nProvider>
    );
  }
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

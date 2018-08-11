// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { FeatureLinks } from '../components/Features';
import { demoUrl } from '../layouts/utils';

const Header = ({ i18n, data, prefix }: Props) => (
  <header className="header bg-ledgy pb-0">
    <div className="container">
      <div className="row align-items-end gap-y mt-5 pb-7">

        <div className="col-lg-6 ml-auto">
          <div className="mb-4 text-white">
            <h1><Trans>Your accounting experts</Trans></h1>
            <p>
              <Trans>
                Focus Tax Solutions provides unparalleled personalized accounting services to a broad range of clients across Sydney.
                <br /><br />
                As your certified accountants, we are here to ensure that all of your financial decisions are made carefully and 
                with your best interests in mind. We are ready and able to serve as your financial advisor, tax planner, and guide down your path to success.
              </Trans>
            </p>
          </div>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light" href="#references" target="_blank" rel="noopener noreferrer"><Trans>See our specialties</Trans></a>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light" href="#try"><Trans>Contact us</Trans></a>
        </div>

        <div className="col-lg-6 order-lg-first" data-aos="fade-up">
          <Img {...data.laptop} alt={i18n.t`Focus tax solutions`} />
        </div>


      </div>
    </div>
  </header>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">


      <section className="section py-7" id="references">
        <div className="container">
       
          <FeatureLinks {...props} page="index" />

        </div>
      </section>

    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    ...FeaturesFragment

    laptop: imageSharp(id: { regex: "/laptop.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes_noBase64 }
    }
  }
`;

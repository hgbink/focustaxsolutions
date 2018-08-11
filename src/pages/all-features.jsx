// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';


export default withI18n()(({ i18n }: Props) => (
  <div>
    <Title title={i18n.t`Pricing`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>All Features</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>
                Ledgy can do a lot for you—and more features are constantly being developed.
                Most current features are listed below. Get in touch if your favorite
                feature is missing, we love to hear feedback.
              </Trans>
            </p>
          </header>


          <div className="row gap-y">

            <div className="col-lg-4">
              <div className="pricing-3 border rounded text-left">
                <h4><Trans>Cap Table on Steroids</Trans></h4>
                <ul className="mb-0 mt-5">
                  <li><Trans>Funding Round Modeling</Trans></li>
                  <li><Trans>Full Transaction History</Trans></li>
                  <li><Trans>Consistency Checks</Trans></li>
                  <li><Trans>Transaction Filters</Trans></li>
                  <li><Trans>Convertible Loans</Trans></li>
                  <li><Trans>Stock Split</Trans></li>
                  <li><Trans>Unlimited Share Classes</Trans></li>
                  <li><Trans>Numbered shares</Trans></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 border rounded text-left">
                <h4><Trans>Employee Incentives</Trans></h4>
                <ul className="mb-0 mt-5">
                  <li><Trans>Employee Options</Trans></li>
                  <li><Trans>Approved Capital Pools</Trans></li>
                  <li><Trans>Vesting Schedules</Trans></li>
                  <li><Trans>Fully-diluted View</Trans></li>
                  <li><Trans>Employee Login</Trans></li>
                  <li><Trans>Multiple Administrators</Trans></li>
                  <li><Trans>Read-only Access</Trans></li>
                  <li><Trans>Investor Dashboard</Trans></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 border rounded text-left">
                <h4><Trans>And Much More</Trans></h4>
                <ul className="mb-0 mt-5">
                  <li><Trans>Secure Document Storage</Trans></li>
                  <li><Trans>Attach Documents to Transactions</Trans></li>
                  <li><Trans>Spreadsheet Import</Trans></li>
                  <li><Trans>Customizable PDF Reports</Trans></li>
                  <li><Trans>CSV Export</Trans></li>
                  <li><Trans>Send Holding Confirmations</Trans></li>
                  <li><Trans>Two-Factor Authentication</Trans></li>
                  <li><Trans>Audit Trails</Trans></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>


    </main>
  </div>
));

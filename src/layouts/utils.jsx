// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';

export const name = 'focus';
export const appUrl = 'https://app.focustaxsolutions.com.au';
export const demoUrl = 'https://demo.focustaxsolutions.com.au';
export const blogUrl = 'https://blog.focustaxsolutions.com.au';

export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
}) => (
  <Helmet>
    <title>{props.title} {props.section && `| ${props.section}`} | {name}</title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '' };

// @flow

import * as React from 'react';

export const PrivacyElement = ({ icon, title, body, size }: {
  icon: string,
  title: string | React.Node,
  body?: string | React.Node,
  size?: string
}) => (
  <div className={`col-12 col-lg-${String(size)}`}>
    <div className="media">
      <i className={`${icon} fa-3x fa-fw mr-2 mt-1`} />
      <p className="media-body mb-0">
        <strong className="d-block">{title}</strong>
        {body}
      </p>
    </div>
  </div>
);
PrivacyElement.defaultProps = { body: '', size: '12' };

export const PrivacyRow = ({ children }: {children: React.Element<any>}) => (
  <div className="row gap-y my-4">{children}</div>
);

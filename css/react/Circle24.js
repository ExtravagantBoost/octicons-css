import React from 'react';
export const Circle24 = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`oi ${props.className ? props.className : ''}`}><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z" fillRule="evenodd" /></svg>
);

import { css } from '@linaria/core';

import { mixin } from './mixins/styles';
import icon from '../static/favicon.png';

const header = css`
  text-transform: uppercase;
  background-image: url(${icon});
  
  :hover {
    ${mixin}
  }
`;

console.log(header);

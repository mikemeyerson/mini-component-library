/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MINIMUM = 0;
const MAXIMUM = 100;

const ProgressBar = ({ value, size, ...delegated }) => {
  if (value < MINIMUM || value > MAXIMUM) {
    throw new Error(`ProgressBar value of ${value} was out of boundaries 0-100`);
  }

  if (!['small', 'medium', 'large'].includes(size)) {
    throw new Error(`Invalid size ${size} given`);
  }

  return (
    <Progress
      {...delegated}
      aria-valuemax={MAXIMUM}
      aria-valuemin={MINIMUM}
      aria-valuenow={value}
      role="progressbar"
      style={{
        '--border-radius': OUTER_RADII[size] + 'px',
        '--padding': PADDINGS[size] + 'px',
      }}
    >
      <FillWrapper>
        <Fill style={{
          '--height': HEIGHTS[size] + 'rem',
          '--width': `${value}%`
        }} />
      </FillWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Progress>
  );
};

const Progress = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const FillWrapper = styled.div`
  border-radius: 4px;
  /* Used to trim corners of Fill when it's nearly 100% */
  overflow: hidden;
`;

const Fill = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: var(--height);
  width: var(--width);
`;

const HEIGHTS = {
  small: 8 / 16,
  medium: 12 / 16,
  large: 16 / 16,
};

const PADDINGS = {
  small: 0,
  medium: 0,
  large: 4,
};

const OUTER_RADII = {
  small: 4,
  medium: 4,
  // When we nest elements that use border-radius, we need to tweak the outer, larger element to be more curved than the inner one.
  large: 8,
}

export default ProgressBar;

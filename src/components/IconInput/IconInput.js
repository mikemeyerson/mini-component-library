import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const iconSize = size === 'small' ? 16 : 24;
  const fontSize = size === 'small' ? 14 : 18;

  return (
      <PositionedWrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{ '--size': iconSize + 'px' }}>
          <Icon size={iconSize} strokeWidth={size === 'small' ? 1 : 2} id={icon} />
        </IconWrapper>
        <Input
          placeholder={placeholder}
          style={{
            '--padding': size === 'small' ? '4px' : '8px',
            '--icon-padding': size === 'small' ? '24px' : '36px',
            '--font-size': fontSize / 16 + 'rem',
            '--border-width': size === 'small' ? '1px' : '2px',
            // Josh chose px instead of rem here
            '--width': width / 16 + 'rem'
          }}
          type="text"
          {...delegated}
        />
      </PositionedWrapper>
  );
};

const PositionedWrapper = styled.label`
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

// Don't need pointer-events: none because the containing wrapper is a <label />
const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Input = styled.input`
  color: inherit;
  border: 0px solid ${COLORS.black};
  border-bottom-width: var(--border-width);
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;
  padding: var(--padding);
  padding-left: var(--icon-padding);
  width: var(--width);

  &:focus {
    border-width: 0;
    border-bottom-width: var(--border-width);
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;

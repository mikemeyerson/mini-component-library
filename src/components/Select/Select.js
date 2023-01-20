import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <OutlineWrapper>
      <BaseSelect value={value} onChange={onChange}>
        {children}
      </BaseSelect>
      <VisibleContent aria-hidden>
        {displayedValue}
        <StyledIcon id="chevron-down" size={24} strokeWidth={1} />
      </VisibleContent>
    </OutlineWrapper>
  );
};

const OutlineWrapper = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  isolation: isolate;
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const BaseSelect = styled.select`
  appearance: none;
  border: 0px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  /* greater than Icon */
  z-index: 1;
`;

const VisibleContent = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  ${BaseSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;

  /* Can vertically center with margin auto if fixed height / width */
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width:  var(--size);

  /* top: 50%; */
  /* transform: translateY(-50%); */
`;

export default Select;

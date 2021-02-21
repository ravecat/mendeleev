import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Icon({ alternative, asset, condition, ...rest }) {
  return (
    <Wrapper {...rest} asset={asset}>
      {asset || null}
    </Wrapper>
  );
}

Icon.defaultProps = {
  asset: null,
  alternative: null,
  condition: false
};

Icon.propTypes = {
  asset: PropTypes.node,
  alternative: PropTypes.node,
  condition: PropTypes.bool
};

export default Icon;

const Wrapper = styled.span`
  float: none;
  width: ${({ width, height }) => width || height}px;
  height: ${({ height, width }) => height || width}px;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: inherit;
    height: inherit;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    vertical-align: bottom;

    ${({ pointer }) =>
      pointer &&
      css`
        &:hover {
          cursor: pointer;
        }
      `}
  }

  ${({ asset }) =>
    !asset &&
    css`
      border: 1px dotted gray;
    `}

  ${({ stretch, height }) =>
    stretch &&
    css`
      width: 100%;
      max-height: 100%;
      height: ${height || 'auto'};
    `}
`;

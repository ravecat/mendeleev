import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RegularLink } from 'react-router-dom';
import { Collapse, Accordion as BaseAccordion } from 'styled-components-toolbox';

import RegularIcon from 'components/Icon';
import { ReactComponent as Bars } from 'asset/bars.svg';
import { ReactComponent as Chart } from 'asset/chart.svg';
import Title from 'components/Title';
import Property from 'components/Property';

const Properties = ({ basic, domains, pathname }) => {
  return (
    <Wrapper>
      <Title>Properties</Title>
      <Basic>
        {basic.map(({ label, isMeasurable, path }) => (
          <Property key={label} title={label}>
            {isMeasurable ? (
              <Link to={`${pathname}/${label}`}>
                <Icon asset={<Chart />} pointer />
              </Link>
            ) : null}
            <Link to={`${pathname}/${label}`}>
              <Icon asset={<Bars />} pointer />
            </Link>
          </Property>
        ))}
      </Basic>
      <Accordion>
        {domains.map(({ properties, label: domain }) => (
          <Collapse details key={domain} summary={domain}>
            {properties.map(({ label, isMeasurable }) => (
              <Property key={label} title={label}>
                {isMeasurable ? (
                  <Link to={`${pathname}/${label}`}>
                    <Icon asset={<Chart />} pointer />
                  </Link>
                ) : null}
                <Link to={`${pathname}/${label}`}>
                  <Icon asset={<Bars />} pointer />
                </Link>
              </Property>
            ))}
          </Collapse>
        ))}
      </Accordion>
    </Wrapper>
  );
};

Properties.propTypes = {
  pathname: PropTypes.string.isRequired,
  basic: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isMeasurable: PropTypes.bool
    })
  ).isRequired,
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.arrayOf(PropTypes.shape({})),
      label: PropTypes.string
    })
  ).isRequired
};

export default Properties;

const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  flex-flow: column wrap;
`;

const Basic = styled.div`
  padding: 12px;
`;

const Icon = styled(RegularIcon)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.dividerColor};

  &:hover {
    fill: ${({ theme }) => theme.colors.primaryIcon};
  }
`;

const Link = styled(RegularLink)`
  & + & {
    margin-left: 10px;
  }
`;

const Accordion = styled(BaseAccordion)`
  max-width: 600px;
`;

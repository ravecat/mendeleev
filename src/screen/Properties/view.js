import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse, Accordion as BaseAccordion } from 'styled-components-toolbox';

import Title from 'components/Title';
import Property from 'components/Property';
import ChartBlock from 'components/ChartBlock';

const Properties = ({ basic, domains, pathname }) => {
  return (
    <Wrapper>
      <Title>Properties</Title>
      <Basic>
        {basic.map(({ label, isMeasurable }) => (
          <Property key={label} property={label}>
            <ChartBlock isMeasurable={isMeasurable} label={label} pathname={pathname} />
          </Property>
        ))}
      </Basic>
      <Accordion>
        {domains.map(({ properties, label: domain }) => (
          <Collapse details key={domain} summary={domain}>
            {properties.map(({ label, isMeasurable }) => (
              <Property key={label} property={label}>
                <ChartBlock isMeasurable={isMeasurable} label={label} pathname={pathname} />
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

const Accordion = styled(BaseAccordion)`
  max-width: 600px;
`;

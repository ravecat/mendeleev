import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Collapse, Accordion as BaseAccordion } from 'styled-components-toolbox';

import Value from 'components/Value';

function Domains({ data }) {
  return (
    <Accordion>
      {data.map(({ domain, label }) => (
        <Collapse details key={label} summary={label}>
          {domain.map(({ label: property, value }) => (
            <Property key={property}>
              <span>{property}</span>
              <Value {...value} />
            </Property>
          ))}
        </Collapse>
      ))}
    </Accordion>
  );
}

Domains.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.arrayOf(PropTypes.shape({})),
      label: PropTypes.string
    })
  ).isRequired
};

export default Domains;

const Property = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Accordion = styled(BaseAccordion)`
  max-width: 600px;
`;

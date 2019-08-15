import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Collapse } from 'styled-components-toolbox';
import Value from 'components/Value';

function ElementData({ data }) {
  return (
    <Wrapper>
      {data.map(({ domain, label }) => (
        <Domain key={label}>
          <Collapse header={label}>
            {domain.map(({ label, value }) => (
              <Wrapper key={label}>
                <span>{label}</span>
                <Value {...value} />
              </Wrapper>
            ))}
          </Collapse>
        </Domain>
      ))}
    </Wrapper>
  );
}

ElementData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.arrayOf(PropTypes.shape({})),
      label: PropTypes.string
    })
  )
};

export default ElementData;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Domain = styled.div`
  padding: 1px;
  flex-basis: 50%;
`;

import { applySpec, always } from 'ramda';

import Properties from './view';

import { SCHEMA } from 'common/schema';
import { setProps } from 'common/hoc/setProps';
import { getSchemaBasicProperties, getSchemaDomainProperties } from 'store/selectors/element';

export default setProps(({ location }) =>
  applySpec({
    basic: getSchemaBasicProperties,
    domains: getSchemaDomainProperties,
    pathname: always(location.pathname)
  })(SCHEMA)
)(Properties);

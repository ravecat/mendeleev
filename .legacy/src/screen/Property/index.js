import { equals } from 'ramda';

import Property from './view';

import { GRAPH_VIEW, LIST_VIEW, SCHEMA } from 'common/constants';
import { setProps } from 'common/hoc/setProps';
import { flattenObj } from 'utils/ramda';
import { getUrlSearchParam } from 'utils/path';

export default setProps(({ match, location }) => ({
  property: match?.params?.property,
  isChart: equals(getUrlSearchParam(location.search, 'view', LIST_VIEW), GRAPH_VIEW),
  isMeasurable: equals(flattenObj(SCHEMA)[match?.params?.property], 'number')
}))(Property);

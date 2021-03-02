import React from 'react';

import {withContainer} from '../../hocs/container/container';

const Maintenance = () => {
  return (
    <div className="maintenance">Maintenance, sorry...</div>
  );
};

export {Maintenance};
export default withContainer(Maintenance);

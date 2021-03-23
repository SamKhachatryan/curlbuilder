import React, { memo, useState, useContext } from 'react';

import { requestTypes } from '../shared/constants/request-types';
import { CurlOptionsContext } from '../shared/services/contexts';

const TypeSelector = memo(() => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useContext(CurlOptionsContext);

  const choose = type => {
    setOptions({ ...options, requestType: type });
    setOpen(false);
  };

  return <div className="container is-max-desktop">
    <div className={`dropdown container is-max-desktop ${open ? 'is-active' : ''}`}>
      <div className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
          <span>{options.requestType || 'HTTP Method'}</span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {requestTypes.map(item => <div key={item} className="dropdown-item G-pointer" onClick={() => choose(item)}>
            <p>{item}</p>
          </div>)}
        </div>
      </div>
    </div>
  </div>;
});

export default TypeSelector;
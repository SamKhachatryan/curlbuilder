import React, { memo, useContext } from 'react';

import { CurlOptionsContext } from '../shared/services/contexts';
import Curl from '../shared/services/curl';

const Result = memo(() => {
  const [options] = useContext(CurlOptionsContext);
  const curl = new Curl(options);

  return <div className="container is-max-desktop G-form-element">
    <h3 className="is-size-5">Here you are!</h3>
    <textarea
      placeholder="Body"
      readOnly={true}
      className="textarea has-fixed-size G-form-element"
      value={curl.result}
    />
  </div>;
});

export default Result;
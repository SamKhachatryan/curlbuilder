import React, { memo, useState } from 'react';

import Curl from '../shared/services/curl';
import { CurlOptionsContext } from '../shared/services/contexts';

import Form from './form';
import Result from './result';

const Main = memo(() => (
  <CurlOptionsContext.Provider value={useState(Curl.initialOptions)}>
    <section className="P-main">
      <Form />
      <Result />
    </section>
  </CurlOptionsContext.Provider>
));

export default Main;
import React, { memo, useContext } from 'react';

import Headers from './headers';
import TypeSelector from './type-selector';

import { CurlOptionsContext } from '../shared/services/contexts';

const Form = memo(() => {
  const [options, setOptions] = useContext(CurlOptionsContext);

  const changeURL = e => setOptions({
    ...options,
    url: e.currentTarget.value,
  });

  const changeBody = e => setOptions({
    ...options,
    body: e.currentTarget.value,
  });

  return <div className="container is-max-desktop">
    <TypeSelector />
    <input placeholder="URL" className="input G-form-element" onChange={changeURL} />
    <textarea  placeholder="Body" className="textarea has-fixed-size  G-form-element" onChange={changeBody} />
    <Headers />

    <div className="container is-flex is-flex-direction-column">
      <label className="checkbox G-form-element">
        <input type="checkbox" onChange={() => setOptions({ ...options, jsonContentType: !options.jsonContentType })} />
        &nbsp;JSON Content-Type
      </label>

      <label className="checkbox G-form-element">
        <input type="checkbox" onChange={() => setOptions({ ...options, insecure: !options.insecure })} />
        &nbsp;Accept self-signed certs
      </label>

      <label className="checkbox G-form-element">
        <input type="checkbox" onChange={() => setOptions({ ...options, verbose: !options.verbose })} />
        &nbsp;Verbose
      </label>
    </div>
  </div>;
});

export default Form;
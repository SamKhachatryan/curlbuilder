import { memo, useContext } from "react";

import { CurlOptionsContext } from "../shared/services/contexts";

const Headers = memo(() => {
  const [options, setOptions] = useContext(CurlOptionsContext);

  const addHeader = () => setOptions({
    ...options,
    headers: [
      ...options.headers,
      ['', ''],
    ],
  });

  const removeHeader = index => {
    options.headers.splice(index, 1);
    setOptions({ ...options });
  }

  const changeHeaders = (index, value) => {
    options.headers[index] = value;
    setOptions({ ...options });
  }

  return <>
    {options.headers.map((item, index) => <div key={index} className="container columns is-max-desktop is-flex is-justify-content-space-between"> {/* Key index cause there were nothing else to use) */}
      <input
        placeholder="Header key"
        className="column input is-5 G-form-element"
        onChange={e => changeHeaders(index, [e.currentTarget.value, item[1]])}
      />

      <input
        placeholder="Header value"
        className="column input is-5 G-form-element"
        onChange={e => changeHeaders(index, [item[0], e.currentTarget.value])}
      />

      <button className="column is-1 button is-danger is-fullwidth G-form-element" onClick={() => removeHeader(index)}>REMOVE</button>
    </div>)}

    <button className="button is-info is-fullwidth G-form-element" onClick={addHeader}>ADD CUSTOM HEADER</button>
  </>;
});

export default Headers;
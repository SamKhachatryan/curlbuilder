class Curl {

  result = 'curl';

  constructor({
    requestType,
    url,
    body,
    headers,
    jsonContentType,
    insecure,
    verbose
  }) {
    if (requestType) this.result += ` -X${requestType}`;
    if (url) this.result += ` '${url}'`; 
    if (body) this.result += ` -d '${body}'`;
    if (jsonContentType) this.result += ' -H "Content-type: application/json"';
    if (insecure) this.result += ' --insecure';
    if (verbose) this.result += ' -v';
    if (headers.length) {
      const validHeaders = headers.filter(item => item[0] && item[1]);
      validHeaders.forEach(item => this.result += ` -H '${item[0]}: ${item[1]}'`);
    } 
  }

  static initialOptions = {
    requestType: '',
    url: '',
    body: '',
    headers: [],
    jsonContentType: false,
    insecure: false,
    verbose: false,
  };
};

export default Curl;
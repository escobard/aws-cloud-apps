import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 1800, checkperiod: 0 });

export default cache;

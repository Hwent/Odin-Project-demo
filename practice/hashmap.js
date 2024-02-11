const hashmap = () => {
  let hashkeys = [];
  let values = {};
  const hash = function (key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };
  return {
    hash: (key) => {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }

      return hashCode;
    },
    set: (key, value) => {
      const hashkey = hash(key);
      values[hashkey] = value;
      hashkeys.push(hashkey);
    },
    get: (key) => {
      const hashkey = hash(key);
      return hashkeys.includes(hashkey) ? values[hashkey] : null;
    },
    has: (key) => {
      const hashkey = hash(key);
      return hashkeys.includes(hashkey);
    },
    remove: (key) => {
      const hashkey = hash(key);
      if (values.hasOwnProperty(hashkey)) {
        delete values[hashkey];
        const index = hashkeys.indexOf(hashkey);
        if (index > -1) {
          hashkeys.splice(index, 1);
        }
        return true;
      } else {
        return false;
      }
    },
    length: () => {
      return hashkeys.length;
    },
    clear: () => {
      hashkeys = [];
      values = {};
    },
    keys: () => {
      return hashkeys;
    },
    values: () => {
      return Object.values(values);
    },
    entries: () => {
      let result = [];
      for (let hashkey of hashkeys) {
        result.push([hashkey, values[hashkey]]);
      }
      return result;
    },
  };
};

module.exports = hashmap;

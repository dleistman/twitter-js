const _ = require('lodash');
const data = [];

let id = 0;
function add (name, content) {
    data.push({ name, content, id: String(id) });
    id++;
  }

  function list () {
    return _.cloneDeep(data);
  }

  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }

  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };

  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };

  module.exports = { add, list, find };
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }
  module.exports.add("bob", "is the man.");


// console.log(data);
// console.log(find({name: 'bob'}));

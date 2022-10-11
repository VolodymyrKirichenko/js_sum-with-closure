'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (num1) => {
    count++;

    const x = (num2) => {
      if (count < 3 || count % 2 !== 0) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };

    return x;
  };

  return sum;
}

module.exports = makeRobotAccountant;

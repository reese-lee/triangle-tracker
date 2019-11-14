import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {
  var reusableTriangle;

  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableTriangle);
  });
});

const Stack = require('/Users/gautham/Project-x/TDD/tdd-basics-project/src/stack.js');

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });

  it('can pop off', () =>{
    stack.push('45');
    let r = stack.pop();
    expect(r).toBe('45');
  })

  //it.todo('can pop off');
});

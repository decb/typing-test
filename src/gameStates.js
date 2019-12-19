export const gameStates = {
  BEFORE: 0,
  DURING: 1,
  OVER: 2
};

export function makeStateTransition(from, to, setter, current) {
  if (current === from) {
    setter(to);
  }
}

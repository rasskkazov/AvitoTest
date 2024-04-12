export function debounce<Args extends unknown[], Result>(
  fn: (...Args: Args) => Result,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

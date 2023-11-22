export function getRuntime(time: number) {
  const hours = ~~(time / 60),
    minutes = time % 60;
  let runtime = +hours + ' Hour';
  if (hours != 1) runtime += 's';
  runtime += ' ' + minutes + ' Minutes';
  return runtime;
}

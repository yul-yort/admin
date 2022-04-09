/**
 * Возвращает рандомное время для задержки запроса от 0 до 10 сек. .
 *
 * @param delay - переданное время. Если этот аргумент передан, то в качестве задержки будет использоваться переданное значение.
 */
export const getTimeout = (delay?: number): number => {
  if (delay || delay === 0) {
    return delay;
  }

  return Math.floor(Math.random() * 3000);
};

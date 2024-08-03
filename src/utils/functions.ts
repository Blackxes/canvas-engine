/**
 * Several simple functions without specific context
 *
 * @Author Alexander Bassov Wed Jul 31 2024
 * @Email blackxes.dev@gmail.com
 */

/**
 * Generates a random number inside the thresholds
 * @param max Upper threshold (Exclusive)
 * @param min Lower threshold (Inclusive)
 */
export const getRandom = (max: number, min: number = 0) =>
  Math.random() * (max - min) + min;

/**
 * Generates a floored random number inside the thresholds
 * @param max Upper threshold (Exclusive)
 * @param min Lower threshold (Inclusive)
 */
export const getRandomFloored = (max: number, min: number = 0) =>
  Math.floor(getRandom(max, min));

export * from "./axios";
export * from "./dates";

export function flatten<T>(arr: T[][]): T[] {
  return ([] as T[]).concat(...arr);
}

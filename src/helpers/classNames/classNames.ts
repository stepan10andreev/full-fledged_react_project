type TMods = Record<string, boolean | string>

export function classNames(mainClassName: string, mods: TMods, extraClassNames: string[]): string {
  return [
    mainClassName,
    ...extraClassNames,
    Object.entries(mods).filter(([className, value]) => Boolean(value)).map(([className]) => className)
  ].join(' ');
}
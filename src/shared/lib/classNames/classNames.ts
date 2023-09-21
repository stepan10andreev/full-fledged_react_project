type TMods = Record<string, boolean | string>

export function classNames(
  mainClassName: string,
  mods: TMods = {},
  extraClassNames: string[] = []
): string {
  return [
    mainClassName,
    ...extraClassNames.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}

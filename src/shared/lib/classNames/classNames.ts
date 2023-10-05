type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    const mod: string[] = [];
    Object.entries(mods).forEach(([key, value]) => {
        if (value) {
            mod.push(key);
        }
    });

    return [cls, ...mod, ...additional].join(" ");
}

// Пример как должна вызываться подобная функция
// className("app", { hovered: true, selected: false }, ["something additional"]); => 'add hovered something additional'

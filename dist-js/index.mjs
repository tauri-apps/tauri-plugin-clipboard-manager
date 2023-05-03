import { invoke } from '@tauri-apps/api/tauri';

// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
/**
 * Writes plain text to the clipboard.
 * @example
 * ```typescript
 * import { writeText, readText } from 'tauri-plugin-clipboard-api';
 * await writeText('Tauri is awesome!');
 * assert(await readText(), 'Tauri is awesome!');
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 1.0.0.
 */
async function writeText(text, opts) {
    return invoke("plugin:clipboard|write", {
        data: {
            kind: "PlainText",
            options: {
                label: opts === null || opts === void 0 ? void 0 : opts.label,
                text,
            },
        },
    });
}
/**
 * Gets the clipboard content as plain text.
 * @example
 * ```typescript
 * import { readText } from 'tauri-plugin-clipboard-api';
 * const clipboardText = await readText();
 * ```
 * @since 1.0.0.
 */
async function readText() {
    const kind = await invoke("plugin:clipboard|read");
    return kind.options;
}

export { readText, writeText };
//# sourceMappingURL=index.mjs.map

'use strict';

var primitives = require('@tauri-apps/api/primitives');

// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Read and write to the system clipboard.
 *
 * @module
 */
/**
 * Writes plain text to the clipboard.
 * @example
 * ```typescript
 * import { writeText, readText } from '@tauri-apps/plugin-clipboard-manager';
 * await writeText('Tauri is awesome!');
 * assert(await readText(), 'Tauri is awesome!');
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
async function writeText(text, opts) {
    return primitives.invoke("plugin:clipboard|write", {
        data: {
            plainText: {
                label: opts?.label,
                text,
            },
        },
    });
}
/**
 * Gets the clipboard content as plain text.
 * @example
 * ```typescript
 * import { readText } from '@tauri-apps/plugin-clipboard-manager';
 * const clipboardText = await readText();
 * ```
 * @since 2.0.0
 */
async function readText() {
    const kind = await primitives.invoke("plugin:clipboard|read");
    return kind.plainText.text;
}

exports.readText = readText;
exports.writeText = writeText;

'use strict';

var core = require('@tauri-apps/api/core');
var image = require('@tauri-apps/api/image');

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
    return core.invoke("plugin:clipboard-manager|write_text", {
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
    const kind = await core.invoke("plugin:clipboard-manager|read_text");
    return kind.plainText.text;
}
/**
 * Gets the clipboard content as Uint8Array image.
 * @example
 * ```typescript
 * import { readImage } from '@tauri-apps/plugin-clipboard-manager';
 *
 * const clipboardImage = await readImage();
 * const blob = new Blob([clipboardImage.bytes], { type: 'image' })
 * const url = URL.createObjectURL(blob)
 * ```
 * @since 2.0.0
 */
async function readImage() {
    return await core.invoke("plugin:clipboard-manager|read_image").then((rid) => new image.Image(rid));
}
/**
 * Writes image buffer to the clipboard.
 * @example
 * ```typescript
 * import { writeImage } from '@tauri-apps/plugin-clipboard-manager';
 * const buffer = [
 *   // A red pixel
 *   255, 0, 0, 255,
 *
 *  // A green pixel
 *   0, 255, 0, 255,
 * ];
 * await writeImage(buffer);
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
async function writeImage(image$1) {
    return core.invoke("plugin:clipboard-manager|write_image", {
        data: {
            image: {
                image: image.transformImage(image$1),
            },
        },
    });
}
/**
 * * Writes HTML or fallbacks to write provided plain text to the clipboard.
 * @example
 * ```typescript
 * import { writeHtml, readHtml } from '@tauri-apps/plugin-clipboard-manager';
 * await writeHtml('<h1>Tauri is awesome!</h1>', 'plaintext');
 * await writeHtml('<h1>Tauri is awesome!</h1>', '<h1>Tauri is awesome</h1>'); // Will write "<h1>Tauri is awesome</h1>" as plain text
 * assert(await readText(), '<h1>Tauri is awesome!</h1>');
 * ```
 *
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
async function writeHtml(html, altHtml) {
    return core.invoke("plugin:clipboard-manager|write_html", {
        data: {
            html: {
                html,
                altHtml,
            },
        },
    });
}
/**
 * Clears the clipboard.
 * @example
 * ```typescript
 * import { clear } from '@tauri-apps/plugin-clipboard-manager';
 * await clear();
 * ```
 * @since 2.0.0
 */
async function clear() {
    await core.invoke("plugin:clipboard-manager|clear");
    return;
}

exports.clear = clear;
exports.readImage = readImage;
exports.readText = readText;
exports.writeHtml = writeHtml;
exports.writeImage = writeImage;
exports.writeText = writeText;

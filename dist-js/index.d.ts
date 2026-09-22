import { Image } from '@tauri-apps/api/image';
/**
 * Writes plain text to the clipboard.
 * @example
 * ```typescript
 * import { writeText, readText } from '@tauri-apps/plugin-clipboard-manager';
 * await writeText('Tauri is awesome!');
 * assert(await readText(), 'Tauri is awesome!');
 * ```
 *
 * @param text The plain text to write to the clipboard.
 * @param opts Additional configuration for the write operation.
 * @param opts.label A label describing the copied content. **Android only**, ignored on other platforms.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
declare function writeText(text: string, opts?: {
    label?: string;
}): Promise<void>;
/**
 * Gets the clipboard content as plain text.
 * @example
 * ```typescript
 * import { readText } from '@tauri-apps/plugin-clipboard-manager';
 * const clipboardText = await readText();
 * ```
 * @returns A promise resolving to the clipboard contents as plain text.
 * @since 2.0.0
 */
declare function readText(): Promise<string>;
/**
 * Writes image buffer to the clipboard.
 *
 * #### Platform-specific
 *
 * - **Android / iOS:** Not supported.
 *
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
 * ```
 *
 * @param image The image to write, as a path, raw RGBA bytes, or an existing {@link Image}.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
declare function writeImage(image: string | Image | Uint8Array | ArrayBuffer | number[]): Promise<void>;
/**
 * Gets the clipboard content as Uint8Array image.
 *
 * #### Platform-specific
 *
 * - **Android / iOS:** Not supported.
 *
 * @example
 * ```typescript
 * import { readImage } from '@tauri-apps/plugin-clipboard-manager';
 *
 * const clipboardImage = await readImage();
 * const blob = new Blob([await clipboardImage.rgba()], { type: 'image' })
 * const url = URL.createObjectURL(blob)
 * ```
 * @returns A promise resolving to the clipboard contents as an {@link Image}.
 * @since 2.0.0
 */
declare function readImage(): Promise<Image>;
/**
 * * Writes HTML or fallbacks to write provided plain text to the clipboard.
 *
 * #### Platform-specific
 *
 * - **Android / iOS:** Not supported.
 *
 * @example
 * ```typescript
 * import { writeHtml } from '@tauri-apps/plugin-clipboard-manager';
 * await writeHtml('<h1>Tauri is awesome!</h1>', 'plaintext');
 * // The following will write "<h1>Tauri is awesome</h1>" as plain text
 * await writeHtml('<h1>Tauri is awesome!</h1>', '<h1>Tauri is awesome</h1>');
 * // we can read html data only as a string so there's just readText(), no readHtml()
 * assert(await readText(), '<h1>Tauri is awesome!</h1>');
 * ```
 *
 * @param html The HTML markup to write to the clipboard.
 * @param altText The plain text fallback written alongside the HTML, used by targets that cannot render it.
 * @returns A promise indicating the success or failure of the operation.
 *
 * @since 2.0.0
 */
declare function writeHtml(html: string, altText?: string): Promise<void>;
/**
 * Clears the clipboard.
 *
 * #### Platform-specific
 *
 * - **Android:** Only supported on SDK 28+. For older releases we write an empty string to the clipboard instead.
 *
 * @example
 * ```typescript
 * import { clear } from '@tauri-apps/plugin-clipboard-manager';
 * await clear();
 * ```
 * @since 2.0.0
 */
declare function clear(): Promise<void>;
export { writeText, readText, writeHtml, clear, readImage, writeImage };

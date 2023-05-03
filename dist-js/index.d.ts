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
declare function writeText(text: string, opts?: {
    label?: string;
}): Promise<void>;
/**
 * Gets the clipboard content as plain text.
 * @example
 * ```typescript
 * import { readText } from 'tauri-plugin-clipboard-api';
 * const clipboardText = await readText();
 * ```
 * @since 1.0.0.
 */
declare function readText(): Promise<string>;
export { writeText, readText };

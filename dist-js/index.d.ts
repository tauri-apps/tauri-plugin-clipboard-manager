/**
 * Read and write to the system clipboard.
 *
 * @module
 */
declare global {
    interface Window {
        __TAURI_INVOKE__: <T>(cmd: string, args?: unknown) => Promise<T>;
    }
}
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
 * @since 2.0.0
 */
declare function readText(): Promise<string>;
export { writeText, readText };

/**
 * Recursively find all files matching a pattern in a directory
 */
export declare function findFiles(dir: string, regex: RegExp): string[];
/**
 * Recursively find all .md files in a directory
 */
export declare function findMarkdownFiles(dir: string): string[];
/**
 * Get all files of a specific type from a directory
 */
export declare function getFilesFromDirectory(dirPath: string, extension?: string): string[];
/**
 * Read and parse a file safely
 */
export declare function readFileSafely(filePath: string): string | null;
/**
 * Check if a file exists
 */
export declare function fileExists(filePath: string): boolean;
/**
 * Get relative path from base directory
 */
export declare function getRelativePath(filePath: string, baseDir: string): string;
//# sourceMappingURL=fileUtils.d.ts.map
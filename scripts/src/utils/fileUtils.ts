import fs from 'fs';
import path from 'path';

/**
 * Recursively find all files matching a pattern in a directory
 */
export function findFiles(dir: string, regex: RegExp): string[] {
    let results: string[] = [];
    
    if (!fs.existsSync(dir)) {
        return results;
    }
    
    const list = fs.readdirSync(dir);
    
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
            results = results.concat(findFiles(filePath, regex));
        } else if (regex.test(filePath.replace(process.cwd() + '/', '')) || regex.test(filePath)) {
            results.push(filePath);
        }
    });
    
    return results;
}

/**
 * Recursively find all .md files in a directory
 */
export function findMarkdownFiles(dir: string): string[] {
    const files: string[] = [];
    
    if (!fs.existsSync(dir)) {
        return files;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...findMarkdownFiles(fullPath));
        } else if (item.endsWith('.md')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

/**
 * Get all files of a specific type from a directory (recursively)
 */
export function getFilesFromDirectory(dirPath: string, extension: string = '.md'): string[] {
    if (!fs.existsSync(dirPath)) {
        return [];
    }
    
    const allFiles: string[] = [];
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Recursively search subdirectories
            allFiles.push(...getFilesFromDirectory(fullPath, extension));
        } else if (item.endsWith(extension)) {
            // Extract just the filename without extension
            allFiles.push(item.replace(extension, ''));
        }
    }
    
    return allFiles.sort();
}

/**
 * Read and parse a file safely
 */
export function readFileSafely(filePath: string): string | null {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null;
    }
}

/**
 * Check if a file exists
 */
export function fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
}

/**
 * Get relative path from base directory
 */
export function getRelativePath(filePath: string, baseDir: string): string {
    return path.relative(baseDir, filePath);
}

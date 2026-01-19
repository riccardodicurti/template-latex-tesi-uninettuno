#!/usr/bin/env node

/**
 * Script di build avanzato per LaTeX
 * Gestisce la compilazione con controlli di errore e output colorato
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colori per output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
    log(`✅ ${message}`, 'green');
}

function logError(message) {
    log(`❌ ${message}`, 'red');
}

function logInfo(message) {
    log(`ℹ️  ${message}`, 'blue');
}

function logWarning(message) {
    log(`⚠️  ${message}`, 'yellow');
}

function cleanTempFiles() {
    const tempFiles = [
        '*.aux', '*.log', '*.out', '*.toc', 
        '*.fdb_latexmk', '*.fls', '*.synctex.gz'
    ];
    
    logInfo('Pulizia file temporanei...');
    try {
        execSync(`rm -f ${tempFiles.join(' ')}`, { stdio: 'pipe' });
        logSuccess('File temporanei rimossi');
    } catch (error) {
        logWarning('Alcuni file temporanei potrebbero non essere stati rimossi');
    }
}

function compileLatex(filename = 'tesi.tex', passes = 1) {
    logInfo(`Compilazione LaTeX: ${filename} (${passes} passaggio/i)`);
    
    for (let i = 1; i <= passes; i++) {
        logInfo(`Passaggio ${i}/${passes}...`);
        
        try {
            const output = execSync(`pdflatex -interaction=nonstopmode ${filename}`, { 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            
            if (i === passes) {
                logSuccess(`Compilazione completata (passaggio ${i})`);
            }
        } catch (error) {
            logError(`Errore durante il passaggio ${i}`);
            logError(error.stdout || error.message);
            return false;
        }
    }
    
    return true;
}

function checkPdfExists() {
    const pdfPath = 'tesi.pdf';
    if (fs.existsSync(pdfPath)) {
        const stats = fs.statSync(pdfPath);
        const sizeKB = Math.round(stats.size / 1024);
        logSuccess(`PDF generato: ${pdfPath} (${sizeKB} KB)`);
        return true;
    }
    return false;
}

function openPdf() {
    if (process.platform === 'darwin') {
        execSync('open tesi.pdf', { stdio: 'pipe' });
        logSuccess('PDF aperto con visualizzatore predefinito');
    } else if (process.platform === 'win32') {
        execSync('start tesi.pdf', { stdio: 'pipe' });
        logSuccess('PDF aperto con visualizzatore predefinito');
    } else {
        logInfo('Apri manualmente tesi.pdf');
    }
}

// Main function
function main() {
    const args = process.argv.slice(2);
    const command = args[0] || 'build';
    
    log('🏴‍☠️  LaTeX Build System', 'cyan');
    log('========================', 'cyan');
    
    switch (command) {
        case 'build':
            cleanTempFiles();
            if (compileLatex('tesi.tex', 3)) {
                checkPdfExists();
            }
            break;
            
        case 'quick':
            if (compileLatex('tesi.tex', 1)) {
                checkPdfExists();
            }
            break;
            
        case 'clean':
            cleanTempFiles();
            break;
            
        case 'pdf':
            cleanTempFiles();
            if (compileLatex('tesi.tex', 3)) {
                if (checkPdfExists()) {
                    openPdf();
                }
            }
            break;
            
        case 'help':
            log('Comandi disponibili:', 'bright');
            log('  build  - Compilazione completa (3 passaggi)');
            log('  quick  - Compilazione rapida (1 passaggio)');
            log('  clean  - Pulisce file temporanei');
            log('  pdf    - Compila e apre il PDF');
            log('  help   - Mostra questo aiuto');
            break;
            
        default:
            logError(`Comando sconosciuto: ${command}`);
            log('Usa "node build.js help" per vedere i comandi disponibili');
    }
}

main();

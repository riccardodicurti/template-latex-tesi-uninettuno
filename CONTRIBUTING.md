# Contributing to Template LaTeX Tesi UNINETTUNO

Prima di tutto, grazie per il tuo interesse nel contribuire a questo progetto! 🎉

Questo template è nato per aiutare gli studenti UNINETTUNO e ogni contributo è benvenuto.

---

## 🤝 Come Contribuire

### 1. Segnala un Bug

Hai trovato un errore? Apri una [Issue](https://github.com/riccardodicurti/template-latex-tesi-uninettuno/issues/new?template=bug_report.md) usando il template "Bug Report".

**Cosa includere:**
- Descrizione chiara del problema
- Passi per riprodurlo
- Comportamento atteso vs comportamento attuale
- Screenshot se applicabile
- Versione di LaTeX/OS utilizzata

### 2. Proponi una Nuova Funzionalità

Hai un'idea per migliorare il template? Apri una [Issue](https://github.com/riccardodicurti/template-latex-tesi-uninettuno/issues/new?template=feature_request.md) usando il template "Feature Request".

**Cosa includere:**
- Descrizione della funzionalità
- Motivazione (perché sarebbe utile?)
- Esempi di utilizzo
- Alternative considerate

### 3. Contribuisci con Codice

Vuoi implementare una modifica? Fantastico! Segui questi passi:

#### Setup Iniziale

```bash
# 1. Fork il progetto su GitHub

# 2. Clona il tuo fork
git clone https://github.com/TUOUSERNAME/template-latex-tesi-uninettuno.git
cd template-latex-tesi-uninettuno

# 3. Aggiungi il repository originale come upstream
git remote add upstream https://github.com/riccardodicurti/template-latex-tesi-uninettuno.git

# 4. Installa le dipendenze
npm install
```

#### Workflow di Sviluppo

```bash
# 1. Crea un branch per la tua feature
git checkout -b feature/nome-feature

# 2. Fai le tue modifiche
# Testa sempre con: npm run build

# 3. Committa con messaggi chiari
git commit -m "✨ Aggiunta funzionalità X"

# 4. Pusha sul tuo fork
git push origin feature/nome-feature

# 5. Apri una Pull Request su GitHub
```

#### Convenzioni per i Commit

Usa emoji e messaggi chiari:

- ✨ `:sparkles:` - Nuova funzionalità
- 🐛 `:bug:` - Fix di bug
- 📝 `:memo:` - Documentazione
- 🎨 `:art:` - Miglioramenti estetici/formattazione
- ⚡ `:zap:` - Miglioramenti performance
- 🔧 `:wrench:` - Configurazione
- ♻️ `:recycle:` - Refactoring
- 🚀 `:rocket:` - Deploy/Release

Esempio:
```bash
git commit -m "✨ Aggiunto supporto per bibliografia BibTeX"
git commit -m "🐛 Fix errore compilazione su Windows"
git commit -m "📝 Migliorata documentazione GitHub Actions"
```

---

## 💡 Cosa Puoi Migliorare

### Priorità Alta
- 🐛 **Bug fix** - Correzioni di errori
- 📝 **Documentazione** - Miglioramenti al README o guide
- ✨ **Compatibilità** - Supporto per altri sistemi operativi
- 🎨 **Esempi** - Nuovi capitoli di esempio

### Priorità Media
- ⚡ **Performance** - Ottimizzazioni build
- 🔧 **Configurazione** - Nuove opzioni configurabili
- 🌐 **Internazionalizzazione** - Supporto altre lingue
- 📦 **Pacchetti** - Integrazione nuovi pacchetti LaTeX utili

### Priorità Bassa
- 🎨 **Estetica** - Miglioramenti visivi
- 🚀 **Automazione** - Nuovi workflow CI/CD
- 📚 **Esempi avanzati** - Template per casi d'uso specifici

---

## 📋 Linee Guida

### Codice LaTeX

- ✅ Mantieni la **compatibilità** con le linee guida UNINETTUNO
- ✅ Usa **commenti chiari** in italiano
- ✅ Testa la **compilazione** prima di fare PR
- ✅ Mantieni la **struttura modulare** esistente
- ✅ Documenta le **nuove funzionalità** nel README

### Documentazione

- ✅ Scrivi in **italiano** (README principale)
- ✅ Usa **esempi pratici** e screenshot quando possibile
- ✅ Mantieni il **tono friendly** e accessibile
- ✅ Aggiorna l'**indice** se aggiungi nuove sezioni

### Pull Request

- ✅ **Una feature per PR** - Non mescolare modifiche non correlate
- ✅ **Descrizione chiara** - Spiega cosa cambia e perché
- ✅ **Test effettuati** - Indica come hai testato le modifiche
- ✅ **Screenshot** - Aggiungi se le modifiche sono visive
- ✅ **Riferimenti** - Linka eventuali issue correlate

---

## 🧪 Testing

Prima di fare una PR, assicurati che:

```bash
# 1. Il PDF compila senza errori
npm run build

# 2. Non ci sono file temporanei committati
git status

# 3. Il README è aggiornato se necessario

# 4. Le regole Cursor funzionano (se modificate)
```

---

## 🎯 Aree di Contributo

### Per Principianti

- 📝 Correzioni typo nel README
- 🐛 Segnalazione bug
- 💬 Miglioramenti alla documentazione
- 📚 Aggiunta esempi semplici

### Per Esperti LaTeX

- 🎨 Ottimizzazioni pacchetti
- 📦 Nuove configurazioni avanzate
- 🔧 Miglioramenti build system
- 🚀 Nuovi workflow GitHub Actions

### Per Esperti AI/Cursor

- 🤖 Miglioramenti regole Cursor
- 🧠 Nuove regole per casi d'uso specifici
- 📖 Documentazione best practices AI

---

## 📞 Hai Domande?

- 💬 Apri una [Discussion](https://github.com/riccardodicurti/template-latex-tesi-uninettuno/discussions)
- 📧 Contatta il maintainer
- 🐛 Apri una Issue per chiarimenti

---

## 🙏 Riconoscimenti

Tutti i contributori saranno menzionati nel README! Grazie per il tuo supporto! ❤️

---

## 📄 Licenza

Contribuendo a questo progetto, accetti che i tuoi contributi siano rilasciati sotto la [Licenza MIT](LICENSE).

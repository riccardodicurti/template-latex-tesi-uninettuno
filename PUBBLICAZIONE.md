# 🚀 Guida alla Pubblicazione

Istruzioni per pubblicare il template su GitHub.

---

## 📋 Prerequisiti

- [x] Repository creata su GitHub: `template-latex-tesi-uninettuno`
- [x] Screenshot del frontespizio salvato in `docs/images/frontespizio.png`
- [x] Tutti i file committati localmente

---

## 🔑 Setup SSH (Una Tantum)

Se non hai ancora configurato SSH con GitHub:

```bash
# 1. Genera chiave SSH (se non ce l'hai)
ssh-keygen -t ed25519 -C "riccardodicurti@gmail.com"

# 2. Copia la chiave pubblica
cat ~/.ssh/id_ed25519.pub

# 3. Vai su GitHub → Settings → SSH and GPG keys → New SSH key
# 4. Incolla la chiave e salva
```

---

## 📤 Pubblicazione - Repository Esistente

Usa questi comandi (forniti da GitHub):

```bash
# 1. Vai nella directory del progetto
cd /Users/riccardodicurti/Documents/github/template-latex-tesi-uninettuno

# 2. Aggiungi il remote origin
git remote add origin git@github.com:riccardodicurti/template-latex-tesi-uninettuno.git

# 3. Rinomina il branch in main (se necessario)
git branch -M main

# 4. Pusha tutto su GitHub
git push -u origin main
```

---

## 🏷️ Crea la Prima Release

```bash
# 1. Crea un tag per la versione 1.0.0
git tag -a v1.0.0 -m "🎉 Prima versione pubblica del template

Template LaTeX professionale per tesi UNINETTUNO con:
✨ Build automatico con hot-reload
🤖 Regole Cursor AI pre-configurate
🚀 GitHub Actions per compilazione automatica
📚 Documentazione completa in italiano
🛠️ Supporto vscode-pdf per preview live
📦 Struttura modulare e professionale"

# 2. Pusha il tag
git push origin v1.0.0
```

---

## ✅ Verifica Pubblicazione

1. **Repository**: Vai su https://github.com/riccardodicurti/template-latex-tesi-uninettuno
2. **Actions**: Verifica che il workflow compili il PDF
3. **Releases**: Controlla che sia stata creata la release v1.0.0 con il PDF allegato

---

## 🎨 Configurazione Repository GitHub

### Description
```
Template LaTeX professionale per tesi triennali UNINETTUNO. Include build automatico con hot-reload, regole Cursor AI pre-configurate, GitHub Actions per compilazione automatica e release. Conforme alle linee guida ufficiali con struttura modulare e documentazione completa in italiano.
```

### Topics
```
latex
template
uninettuno
tesi
thesis
università
italian
github-actions
cursor-ai
automation
academic
```

### Website (opzionale)
```
https://www.uninettunouniversity.net/
```

---

## 📸 Screenshot

Assicurati di aver aggiunto lo screenshot del frontespizio:

```bash
# Verifica che esista
ls -lh docs/images/frontespizio.png

# Se manca, aggiungilo e committa
git add docs/images/frontespizio.png
git commit -m "📸 Aggiunto screenshot frontespizio"
git push
```

---

## 🎉 Fatto!

Il template è ora pubblico e disponibile per tutti gli studenti UNINETTUNO! 🚀

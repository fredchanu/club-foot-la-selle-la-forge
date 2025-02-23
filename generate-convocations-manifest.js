const fs = require('fs');
const path = require('path');

// Chemin du dossier contenant vos convocations JSON
const convocationsDir = path.join(__dirname, 'content', 'convocations');
// Chemin du fichier manifeste à générer
const outputFile = path.join(__dirname, 'convocations.json');

// Lire la liste des fichiers dans le dossier convocations
fs.readdir(convocationsDir, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du dossier convocations :", err);
    process.exit(1);
  }

  const convocations = [];

  // Pour chaque fichier dans le dossier
  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(convocationsDir, file);
      try {
        // Lire et parser le fichier JSON
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        // Utiliser le champ title ou une valeur par défaut
        const title = data.title || 'Sans titre';
        // Ajouter la convocation au manifeste avec le chemin relatif
        convocations.push({
          title: title,
          file: `/content/convocations/${file}`
        });
      } catch (e) {
        console.error("Erreur lors du parsing JSON dans le fichier " + file, e);
      }
    }
  });

  // Écrire le manifeste JSON dans le fichier outputFile
  fs.writeFileSync(outputFile, JSON.stringify(convocations, null, 2), 'utf8');
  console.log(`Manifest généré avec ${convocations.length} convocation(s).`);
});

const fs = require('fs');
const path = require('path');

// Chemin du dossier contenant vos convocations, organisées par catégorie
const convocationsDir = path.join(__dirname, 'content', 'convocations');
// Chemin du fichier manifeste à générer
const outputFile = path.join(__dirname, 'convocations.json');

let convocations = [];

// Parcourir chaque sous-dossier (catégorie)
fs.readdirSync(convocationsDir).forEach(category => {
  const categoryPath = path.join(convocationsDir, category);
  if (fs.lstatSync(categoryPath).isDirectory()) {
    // Pour chaque fichier JSON dans ce sous-dossier
    fs.readdirSync(categoryPath).forEach(file => {
      if (path.extname(file) === '.json') {
        const filePath = path.join(categoryPath, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const data = JSON.parse(content);
          // Utiliser le champ title ou une valeur par défaut
          const title = data.title || 'Sans titre';
          // Ajouter la propriété category et le chemin relatif au fichier
          convocations.push({
            title: title,
            file: `/content/convocations/${category}/${file}`,
            category: category
          });
        } catch (e) {
          console.error(`Erreur lors du parsing JSON dans le fichier ${filePath}:`, e);
        }
      }
    });
  }
});

// Écrire le manifeste JSON
fs.writeFileSync(outputFile, JSON.stringify(convocations, null, 2), 'utf8');
console.log(`Manifest généré avec ${convocations.length} convocation(s).`);


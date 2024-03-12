const teleprompterText = document.getElementById('teleprompterText');

const keywords = [
  "Storytelling", "Newsletter", "Branding", "Marketing", "Site internet", "Stratégie de marque",
  "Réseaux sociaux", "Logo", "Campagnes publicitaires", "Identité visuelle", "Sites e-commerce",
  "Positionnement", "Image de marque", "Sites responsives", "Intégration web", "Médias sociaux",
  "Création graphique", "Analyse des performances", "Logotype", "Montage vidéo", "Sites vitrines",
  "Animations", "Effets spéciaux", "SEO/SEA", "Chartes graphiques", "Illustrations", "Stratégie marketing",
  "Infographie"
];

const fullText = keywords.join(' | ');
const repeatedKeywords = Array.from({ length: 10 }, () => fullText).join(' | ');

teleprompterText.innerHTML = `<div class="teleprompter-wrapper">${repeatedKeywords}</div>`;

function scrollText() {
  const textWidth = teleprompterText.clientWidth;
  const containerWidth = teleprompterText.parentNode.clientWidth;

  let currentPosition = containerWidth;

  function moveText() {
    currentPosition--;
    teleprompterText.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition + containerWidth > 0) {
      requestAnimationFrame(moveText);
    } else {
      currentPosition = containerWidth;
      requestAnimationFrame(moveText);
    }
  }

  moveText();
}

scrollText();
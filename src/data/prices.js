// Prix standards pour les rigs
const standardRigPrices = {
  rigBlenderHuman: 100,
  rigBlenderHumanoid: 150,
  rigBlenderSpecial: 400,
  rigMayaHuman: 100,
  rigMetahumanHuman: 125,
  rigMetahumanHumanoid: 200,
  rigMetahumanOther: 300,
};

// Génération automatique des prix basic (-25%) et epic (+50%)
const generateAllRigPrices = () => {
  const allPrices = {};
  
  Object.entries(standardRigPrices).forEach(([key, standardPrice]) => {
    allPrices[`${key}Basic`] = Math.round(standardPrice * 0.75); // -25%
    allPrices[`${key}Standard`] = standardPrice;
    allPrices[`${key}Epic`] = Math.round(standardPrice * 1.5); // +50%
  });
  
  return allPrices;
};

export const prices = {
  // Prix existants pour les autres étapes
  blockingBasic: 60,
  blockingStandard: 240,
  blockingEpic: 360,
  
  highpolyBasic: 225,
  highpolyStandard: 375,
  highpolyEpic: 500,
  
  retopologyBasic: 50,
  retopologyStandard: 150,
  retopologyEpic: 300,
  
  uvBasic: 50,
  uvStandard: 100,
  uvEpic: 150,
  
  texturingBasic: 125,
  texturingStandard: 250,
  texturingEpic: 375,
  
  // Nouveaux prix pour Haircut
  haircutBlenderParticleBasic: 100,
  haircutBlenderParticleStandard: 200,
  haircutBlenderParticleEpic: 350,
  
  haircutBlenderHaircardBasic: 150,
  haircutBlenderHaircardStandard: 250,
  haircutBlenderHaircardEpic: 400,
  
  haircutMayaParticleBasic: 120,
  haircutMayaParticleStandard: 220,
  haircutMayaParticleEpic: 370,
  
  haircutMayaHaircardBasic: 170,
  haircutMayaHaircardStandard: 270,
  haircutMayaHaircardEpic: 420,
  
  // Prix pour Extra Props (par prop)
  extraPropsBasic: 50,
  extraPropsStandard: 100,
  extraPropsEpic: 175,
  
  // Ajout des prix de rig générés automatiquement
  ...generateAllRigPrices()
};

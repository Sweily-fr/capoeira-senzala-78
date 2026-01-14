// Fichier principal qui importe toutes les données des cours par ville
import { CoursParVille } from './types';

// Import des données des cours par ville
import saintGermain from './cours/saint-germain.json';
import carrieresPoissy from './cours/carrieres-poissy.json';
import jouy from './cours/jouy.json';
import poissy from './cours/poissy.json';
import vaucresson from './cours/vaucresson.json';
import billy from './cours/bailly.json';
import gaillon from './cours/gaillon.json';
import verneuil from './cours/verneuil.json';
import vernouillet from './cours/vernouillet.json';
import guyancourt from './cours/guyancourt.json';
import chatou from './cours/chatou.json';
import mesnil from './cours/mesnil.json';
import triel from './cours/triel.json';
import carrieresSeine from './cours/carrieres-seine.json';
import coubron from './cours/coubron.json';
import saintNomLaBreteche from './cours/saint-nom-la-breteche.json';
import villeAvray from './cours/ville-avray.json';
import montesson from './cours/montesson.json';
import leVesinet from './cours/le-vesinet.json';
import maisonsLaffitte from './cours/maisons-laffitte.json';
import croissySeine from './cours/croissy-seine.json';
// Import du fichier batucada
import batucada from './cours/batucada.json';

/**
 * Objet contenant toutes les données des cours par ville
 * @type {CoursParVille}
 */
const coursParVille = {
  'saint-germain': saintGermain,
  'carrieres-poissy': carrieresPoissy,
  'jouy': jouy,
  'poissy': poissy,
  'vaucresson': vaucresson,
  'bailly': billy,
  'gaillon': gaillon,
  'verneuil': verneuil,
  'vernouillet': vernouillet,
  'guyancourt': guyancourt,
  'chatou': chatou,
  'mesnil': mesnil,
  'triel': triel,
  'carrieres-seine': carrieresSeine,
  'coubron': coubron,
  'saint-nom-la-breteche': saintNomLaBreteche,
  'ville-avray': villeAvray,
  'montesson': montesson,
  'le-vesinet': leVesinet,
  'maisons-laffitte': maisonsLaffitte,
  'croissy-seine': croissySeine,
  'batucada': batucada
};

export default coursParVille;

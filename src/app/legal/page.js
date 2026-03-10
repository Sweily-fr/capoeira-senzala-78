import Footer from '@/components/Footer';
import HeroWithPartners from '@/components/blocks/HeroWithPartners';

export const metadata = {
  title: 'Mentions Légales | Capoeira Senzala 78',
  description: 'Mentions légales du site Capoeira Senzala 78',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-blue text-white">
      <main className="flex-1">
        <HeroWithPartners
          title="Mentions Légales"
          subtitle="Informations légales relatives au site www.capoeirasenzala78.fr"
          heroImage="/images/hero-section-img/contact.jpg"
        />

        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-12 text-gray-300 leading-relaxed">

            {/* Éditeur */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Éditeur</h2>
              <p>
                Le site internet www.capoeirasenzala78.fr est édité et diffusé par Kevin PAM en
                collaboration avec l&apos;Association Capoeira Saint Germain (ou Association Escola
                de Capoeira Grupo Senzala).
              </p>
              <p className="mt-4">
                <strong className="text-white">Directeur de la publication :</strong> Marcio Da Silva
              </p>
              <p className="mt-4">
                Capoeira Senzala est une marque déposée. L&apos;intégralité du site et de son contenu
                téléchargeable est la propriété exclusive de l&apos;Association Escola de Capoeira
                Grupo Senzala 78. Aucune reproduction ou représentation, même partielle ne peut avoir
                lieu sans le consentement écrit et préalable de l&apos;Association Escola de Capoeira
                Grupo Senzala 78.
              </p>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Fournisseur d&apos;hébergement</h2>
              <p>
                OVH S.A.S. au capital de 10 000 000 euros, ayant son siège social au 2 Rue Kellermann
                – 59100 ROUBAIX, immatriculée au Registre du commerce et des sociétés de LILLE sous le
                numéro B 424 761 419
              </p>
              <p className="mt-2">
                Site :{' '}
                <a
                  href="https://www.ovh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:underline"
                >
                  www.ovh.com
                </a>
              </p>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Collecte et utilisation des données à caractère personnel
              </h2>
              <p>
                Une simple consultation du site « www.capoeirasenzala78.fr » n&apos;entraîne pas
                d&apos;enregistrement de données à caractère personnel.
              </p>
              <p className="mt-4">
                Toutefois, en cas de prise de contact via le formulaire prévu à cet effet ou
                enregistrement via l&apos;interface « Mon Compte ». La société éditrice,
                l&apos;Association Escola de Capoeira Grupo Senzala 78, collectera auprès de chaque
                utilisateur un certain nombre de données utiles à caractère personnel (nom, email,
                coordonnées …).
              </p>
              <p className="mt-4">
                En cas de demande d&apos;informations ou de documentation, la société éditrice peut
                être amenée à utiliser ces données pour transmettre une réponse.
              </p>
            </div>

            {/* CNIL */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Informatique, fichiers et libertés
              </h2>
              <p>
                L&apos;Association Escola de Capoeira Grupo Senzala 78 a effectué les procédures et
                obtenu les autorisations légales et administratives requises et notamment la déclaration
                relative à la mise en œuvre de traitement automatisé de données nominatives auprès de la
                Commission Nationale Informatique et Libertés (CNIL).
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Propriété Intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments, textes, données et illustrations mis en ligne par
                l&apos;Association Escola de Capoeira Grupo Senzala 78 sont protégés par le droit
                d&apos;auteur et par le droit protégeant les bases de données dont l&apos;Association
                Escola de Capoeira Grupo Senzala 78 est productrice au sens des articles L 341-1 et
                suivants du Code de la Propriété Intellectuelle.
              </p>
              <p className="mt-4">
                Les références présentées par l&apos;Association Escola de Capoeira Grupo Senzala 78,
                ou les produits revendus par ces références, ainsi que tous les logos, figurant sur le
                site sont des marques (semi-figuratives ou non) déposées. Toute reproduction ou
                représentation totale ou partielle de ces marques, toute modification, toute altération
                de ces marques et/ou logos sans l&apos;autorisation expresse de l&apos;Association
                Escola de Capoeira Grupo Senzala 78 ou de leur propriétaire est donc prohibée au sens
                de l&apos;article L.713-2 du Code de la propriété intellectuelle.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p>
                Un cookie ne permet pas d&apos;identifier un individu mais d&apos;enregistrer des
                informations relatives à la navigation d&apos;un ordinateur. Ces cookies ne sont pas
                enregistrés sur le serveur de l&apos;Association Escola de Capoeira Grupo Senzala 78
                mais uniquement sur l&apos;ordinateur client.
              </p>
            </div>

            {/* Liens hypertextes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Liens hypertextes</h2>
              <p>
                L&apos;Association Escola de Capoeira Grupo Senzala 78 décline toute responsabilité sur
                le contenu des sites dont il n&apos;est pas l&apos;éditeur et qui sont accessibles par
                l&apos;intermédiaire de liens hypertextes.
              </p>
              <p className="mt-4">
                Les utilisateurs du site « www.capoeirasenzala78.fr » ne peuvent mettre en place un
                hyperlien en direction de ce site sans l&apos;autorisation expresse et préalable de
                l&apos;Association Escola de Capoeira Grupo Senzala 78.
              </p>
              <p className="mt-4">
                La structure générale ainsi que les logiciels, textes, images, sons, graphismes et tout
                autre élément composant le site sont la propriété exclusive de l&apos;Association Escola
                de Capoeira Grupo Senzala 78, ou bien sont régulièrement exploités sous licence.
              </p>
              <p className="mt-4">
                Toute représentation totale ou partielle de ce site par quelque procédé que ce soit,
                sans l&apos;autorisation expresse de l&apos;Association Escola de Capoeira Grupo
                Senzala 78, est interdite et constituerait une contrefaçon sanctionnée par les articles
                L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </div>

            {/* Licences */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Licences</h2>
              <p className="italic mb-4">
                Note complémentaire : Toutes les autres marques, logos, photos, vidéos et créations
                musicales sont la propriété de leurs détenteurs respectifs.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Polices</h3>
              <p>Le site de l&apos;Association Escola de Capoeira Grupo Senzala 78 utilise la police suivante :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong className="text-white">Lato</strong> : Créée par Łukasz Dziedzic – Utilisée
                  sous licence SIL Open Font 1.1
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Scripts</h3>
              <p>Le site utilise les technologies suivantes :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Script JQuery UI open-source utilisé sous licence MIT</li>
                <li>
                  Google Maps API : Utilisation libre de droit. Scripts sous licences Apache 2.0.
                </li>
                <li>
                  Google Font API : Utilisation libre de droit (condition d&apos;utilisation liée à la
                  police choisie). Scripts sous licences Apache 2.0.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Images</h3>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Planche 41 – Tome 2 — « Voyage pittoresque et historique au Brésil » par
                  Jean-Baptiste Debret
                </li>
                <li>Œuvre « Danse de la Guerre » par Johann Moritz Rugendas</li>
                <li>
                  Photo de Mestre Pastinha : Tous droits réservés à Pierre Verger ©.{' '}
                  <a
                    href="http://www.pierreverger.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:underline"
                  >
                    pierreverger.org
                  </a>
                </li>
                <li>
                  Photo de Mestre Bimba : Aucun auteur trouvé. Tous droits réservés à son auteur
                  original.
                </li>
                <li>
                  Illustration Maculélé et Forro : Signée par Robert Sardu © – Tous droits réservés.
                </li>
                <li>
                  Photo de Frévo : Signée Sérgio Bernardo © – Tous droits réservés. Utilisée sous
                  licence Creative Commons Attribution 2.5
                </li>
                <li>
                  Illustration Batucada : Signée Marie-Églé de Lardemelle © – Tous droits réservés.
                </li>
                <li>
                  Photo d&apos;entrée dans la ronde : Pascal Vo (alias Professor Deitado) – © Tous
                  droits réservés.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Vidéos</h3>
              <p>
                Toute vidéo partagée sur le site respecte les conditions de la licence Creative Commons
                Attribution 2.5. Les droits en reviennent à leurs auteurs respectifs.
              </p>


            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

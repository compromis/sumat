<template>
  <section>
    <div class="gdpr">
      <h4>1. Responsable del tractament</h4>
      <p>
        Compromís: Més-Iniciativa-VerdsEquo, amb CIF V98725781, amb domicili social a València, plaça del Pilar núm.
        1, 46001, València
      </p>

      <h4>2. Finalitats del tractament de les dades</h4>

      <ul>
        <li>
          Gestionar l'afiliació o alta com a simpatitzant a la base de dades de Compromís.
        </li>
        <li>Informar sobre les activitats electorals de Compromís.</li>
        <li>Tramitar els contractes civils de subscripció de microcrèdits.</li>
        <li>Gestionar els cobraments i les devolucions a través de les entitats financeres.</li>
        <li>Gestionar i controlar l'accés a les pàgines web de Compromís.</li>
      </ul>

      <p>
        Les dades personals proporcionades es conservaran durant el temps necessari per a
        complir amb la finalitat per a la qual es recapten i per a determinar les possibles
        responsabilitats que es pogueren derivar de la finalitat.
      </p>

      <h4>3. Legitimació del tractament (base jurídica)</h4>

      <ul>
        <li>Compliment d'una obligació legal.</li>
        <li>Execució dels drets i obligacions estatutàries.</li>
        <li>
          Consentiment de les persones inscrites en els casos de tractaments que ho requerisquen.
          La persona que es registra accepta el tractament de les seues dades personals per als fins
          indicats, per part de Compromís i dels seus encarregats de tractament, i accepta la recepció
          de missatges i comunicacions per via electrònica o telefonia mòbil.
        </li>
      </ul>

      <h4>4. Destinataris de cessions o transferències de dades</h4>

      <p>
        Les dades seran tractades pels òrgans de Compromís encarregats de la gestió financera.
        Compromís no cedirà les dades a terceres persones excepte obligació legal i en els
        següents casos:
      </p>

      <ul>
        <li>
          Comunicacions de dades econòmiques i bancàries a les entitats financeres per a la gestió
          dels microcrèdits.
        </li>
        <li>Declaracions tributàries a l'Agència Tributària.</li>
        <li>
          Informació requerida pel Tribunal de Comptes i altres òrgans de fiscalització de l'activitat,
          en els casos previstos en la Llei.
        </li>
        <li>Requeriments de les autoritats.</li>
        <li>
          Entitats d'allotjament segur de servidors informàtics i telecomunicacions, mitjançant
          encàrrec de tractament.
        </li>
      </ul>
      <p>
        No es produiran transferències a tercers països o organitzacions internacionals que no
        oferisquen garanties adequades.
      </p>

      <h4>5. Drets de les persones interessades</h4>
      <ul>
        <li>Accedir a les dades personals relatives a l'interessat</li>
        <li>Rectificació de les dades</li>
        <li>Supressió de les dades</li>
        <li>Limitació del seu tractament (dret a l'oblit)</li>
        <li>Oposició al tractament</li>
        <li>Portabilitat de les dades</li>
        <li>
          Revocar el consentiment atorgat per alguna finalitat específica
          Podeu exercitar els vostres drets enviant personalment una petició per correu electrònic a
          l'adreça administracio@coaliciocompromis.net. En tots dos casos hauràs d'acreditar la teua
          identitat adjuntant una còpia del document legal d'identitat que hages utilitzat per a la teua
          inscripció (DNI, NIE o passaport) o qualsevol altre document legal que permeta acreditar
          inequívocament la teua identitat.
        </li>
      </ul>

      <h4>6. Procedència de les dades</h4>
      <ul>
        <li>Persones interessades a través dels formularis de registre</li>
        <li>Informació remesa per correu postal o electrònic i per missatgeria electrònica</li>
        <li>Empreses de prestació de serveis d'internet i telecomunicacions</li>
      </ul>

      <p>
        En registrar-te declares i garanteixes que les dades personals que has indicat en el formulari
        són vertaders, exactes, complets i actualitzats, i et fas responsable dels danys i perjudicis, ja
        siguen directes o indirectes, que pogueres ocasionar a Compromís com a conseqüència de
        la utilització de dades falses o errònies.
      </p>
      <p>
        Categories de dades que tractem: nom, cognoms, adreça, DNI, telèfon, correu electrònic,
        número IBAN del compte bancari, adreça IP, login, data i hora d'accés a la web de
        Compromís.
      </p>

      <p>Per a més informació escriu a <a href="mailto:administracio@compromis.net">administracio@compromis.net</a></p>
    </div>
    <div>
      <input id="privacyAccept" type="checkbox" required>
      <label for="privacyAccept">Accepte la <a href="https://compromis.net/avis-legal/">política de privacitat</a></label>
    </div>
    <hr>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .gdpr {
    font-size: .75rem;
    line-height: 1.25;
    border: 1px var(--gray-300) solid;
    max-height: 300px;
    overflow-y: auto;
    border-radius: .75rem;
    padding: 1rem;
    margin: 2rem 0 1rem;
    color: var(--gray-800);

    h4 {
      font-size: 1em;
      font-weight: 900;
    }
  }
</style>

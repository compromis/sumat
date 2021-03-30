export default {
  hero: {
    title: 'Suma’t',
    leadin: 'A Compromís apostem per una nova manera de fer política. I sabem que el nostre principal actiu ets tu. Per això pensem que la millor manera de donar a conèixer el nostre projecte és confiar en la teua implicació, il·lusió i desig de canvi. Ens ajudes?'
  },
  party: {
    title: 'Partit',
    show: 'Mostra més partits',
    hide: 'Amaga els partits'
  },
  type: {
    title: "Tipus d'afiliació",
    supporter: 'Simpatitzant',
    member: 'Adherit/da',
    affiliate: 'Afiliat/da',
    rights: {
      14: 'Com a adherit/da tindràs tots els drets i deures recollits en les {0}',
      2: 'Com a afiliat/da tindràs tots els drets i deures recollits en les {0}',
      3: 'Com a afiliat/da tindràs tots els drets i deures recollits en les {0}',
      4: 'Com a afiliat/da tindràs tots els drets i deures recollits en les {0}'
    },
    supporters: {
      14: "Si encara no t'has decidit adherir-te a Compromís, pots participar com a simpatitzant.",
      2: "Si encara no t'has decidit afiliar-te al BLOC, pots participar com a simpatitzant.",
      3: "Si encara no t'has decidit afiliar-te a Iniciativa, pots participar com a simpatitzant.",
      4: "Si encara no t'has decidit afiliar-te a VerdsEquo, pots participar com a simpatitzant."
    },
    bylaws: {
      14: 'bases de Compromís',
      2: 'bases del BLOC',
      3: 'bases de Iniciativa',
      4: 'bases de VerdsEquo'
    }
  },
  errors: "👇 Alguns camps contenen errors. Revisa el formulari i torna'l a enviar",
  help: 'Ajuda',
  personal: {
    title: 'Dades personals',
    name: 'Nom',
    surname: 'Cognoms',
    birthday: 'Data de naixement',
    gender: 'Gènere',
    address: 'Adreça',
    city: 'Població',
    postal: 'Codi postal',
    genders: {
      M: 'Home',
      F: 'Dona',
      A: 'No binari'
    }
  },
  contact: {
    title: 'Informació de contacte',
    repeatemail: "Repeteix l'e-mail",
    mobilephone: 'Mòbil',
    phone: 'Fixe (opcional)',
    stoneage: 'No tinc e-mail ni/o mòbil'
  },
  collectiu: {
    title: 'Col·lectiu',
    help: 'Si no trobes el teu municipi, sel·lecciona el col·lectiu més proper a tu.',
    select: 'Selecciona un col·lectiu'
  },
  fees: {
    title: 'Domiciliació bancària',
    name: 'Titular del compte',
    fee: 'Quota',
    normal: 'Quota normal',
    biannual: 'Cada sis mesos',
    reduced: 'Quota reduïda',
    reducedinfo: '(estudiants, parats, jubilats)'
  },
  avals: {
    title: 'Avals',
    prompt: 'Vols adjuntar avals?',
    close: 'No vull adjuntar avals',
    tooltip: "Si ja coneixes a dos adherits a Compromís, pots introduir el seus DNIs perquè confirmen la teua alta. Si no, serà el portaveu del teu col·lectiu local l'encarregat de confirmar l'alta."
  },
  tel: {
    prefix: 'Prefixe interncional',
    number: 'Telèfon'
  },
  offline: {
    ok: 'Entès',
    instructions: 'L’e-mail i el mòbil són camps requerits si vols donar-te d’alta a través d’internet. No obstant, pots donar-te d’alta sense e-mail o mòbil imprimint el {0} i enviant-lo signat a la següent adreça:',
    forms: {
      2: 'formulari del BLOC',
      3: 'formulari d’Iniciativa',
      4: 'formulari de VerdsEquo',
      14: 'formulari d’adhesió a Compromís'
    }
  },
  notice: {
    ssl: 'Les teues dades s’enviaran de forma segura a través d’una connexió xifrada SSL',
    privacy: `{0} en compliment del que estableix la {1}, de {2}, li informem que les dades
      personals que va a proporcionar-nos seran incorporades a un fitxer automatitzat de {0},
      que com a responsable del fitxer, tractarà els mateixos a fi de tramitar la seua afiliació,
      permetre l'exercici dels drets i deures, gestionar la seua participació i oferir-li informació
      sobre les nostres activitats, ja siga per correu ordinari, electrònic, SMS o un altre mitjà de
      comunicació equivalent. Així mateix, li informem que podrà exercir els drets que li assisteixen d'accés,
      rectificació, cancel·lació i oposició al tractament de la informació que li concerneix a través del
      seu usuari de l'Espai Compromís o dirigint un escrit bé per correu postal a Compromís (Plaça del
      Pilar, 1 - 46001 València) o bé per mitjà d'un correu electrònic a {3}, acompanyant una fotocòpia
      del document que acredite la seua identitat. Més informació en {4}`,
    law: 'Llei Orgànica 3/2018 del 5 de desembre',
    law_name: 'Protecció de Dades Personals i Drets Digitals',
    privacy_link: 'Avís legal i política de privacitat'
  },
  verify_id: {
    title: 'Adjunta el teu DNI / NIE',
    front: 'Anvers',
    back: 'Revers',
    submit: 'Adjunta fitxers',
    instructions_desktop: 'Arrosega o selecciona una foto',
    instructions_mobile: 'Fes una foto o selecciona un arxiu',
    filetypes: 'Fitxers {0}, {1}, {2}, o {3} fins a {4}.',
    uploading: 'Pujant...',
    uploaded: 'Fitxer adjuntat'
  },
  verify_sms: {
    title: 'T’hem enviat un codi de signatura digital al {number}',
    new_code: "T'hem enviat un nou codi.",
    label: 'Codi SMS',
    sign: 'Signa el formulari',
    after_minute: 'Podràs demanar un nou codi si no reps cap SMS en un minut',
    retry: 'No he rebut cap codi',
    modify: 'Modificar mòbil',
    instruction: 'Escriu la posició {digit} del codi SMS'
  },
  additional_info: {
    generic: {
      title: 'Vols afegir més informació?',
      all_optional: 'Tots els camps són opcionals',
      labor_code: 'Professió',
      labor: 'Descripció...',
      studies: 'Estudis',
      union: 'Sindicat',
      movements: 'Moviments'
    },
    public_employee: {
      title: 'Ets funcionari/a?',
      yesno: 'Funcionari/a',
      department: 'Administració',
      category: 'Categoria',
      type: 'Tipus',
      departments: [
        'Administració de l’Estat',
        'Administració autonòmica',
        'Administració provincial',
        'Administració local',
        'Sanitat',
        'Educació',
        'Justícia',
        'Altre'
      ],
      types: {
        C: 'Carrera',
        I: 'Interinatge'
      }
    },
    sectorials: {
      title: 'Vols apuntar-te a una sectorial?',
      label: 'Sectorials'
    },
    submit: 'Adjunta informació',
    skip: 'Omet aquest pas'
  },
  success: {
    thankyou: 'Gràcies pel teu compromís',
    greetings: {
      M: 'Benvingut',
      F: 'Benvinguda',
      A: 'Benvingues'
    },
    activate: 'Activa’t a l’Espai Compromís',
    step1: 'Revisa el teu correu i estableix una contrasenya',
    goto: 'Ves a {emailDomain}',
    processing: 'Hem rebut les teues dades i estem processant la teua afiliació. Tan pronte com s’accepte rebràs un e-mail de confirmació per activar el teu usuari.',
    meanwhile: 'Mentrestant, pots seguir-nos a les xarxes'
  },
  nav: {
    title: 'Formulari d’adhesió'
  },
  footer: {
    help: 'Necessites ajuda? Contacta amb {0}'
  }
}

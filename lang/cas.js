export default {
  hero: {
    title: 'Súmate',
    leadin: 'En Compromís apostamos por una nueva manera de hacer política. Y sabemos que nuestro principal activo eres tu. Por eso pensamos que la mejor manera de dar a conocer nuestro proyecto es confiar en tu implicación, ilusión y deseo de cambio. ¿Nos ayudas?'
  },
  party: {
    title: 'Partido',
    show: 'Muestra más partidos',
    hide: 'Muestra menos partidos'
  },
  type: {
    title: 'Tipo de afiliación',
    supporter: 'Simpatizante',
    member: 'Adherido/a',
    affiliate: 'Afiliado/a',
    rights: {
      14: 'Como adherido/a tendrás todos los derechos y deberes recogidos en las {0}',
      2: 'Como afiliado/a tendrás todos los derechos y deberes recogidos en las {0}',
      3: 'Como afiliado/a tendrás todos los derechos y deberes recogidos en las {0}',
      4: 'Como afiliado/a tendrás todos los derechos y deberes recogidos en las {0}'
    },
    supporters: {
      14: 'Si aún no te has decidido a adherirte a Compromís, puedes participar como simpatizante.',
      2: 'Si aún no te has decidido afiliarte a Més, puedes participar como simpatizante.',
      3: 'Si aún no te has decidido afiliarte a Iniciativa, puedes participar como simpatizante.',
      4: 'Si aún no te has decidido afiliarte a VerdsEquo, puedes participar como simpatizante.'
    },
    bylaws: {
      14: 'bases de Compromís',
      2: 'bases de Més-Compromís',
      3: 'bases de Iniciativa',
      4: 'bases de VerdsEquo'
    }
  },
  errors: '👇 Algunos campos contienen errores. Revisa el formulario y vuelve a enviarlo',
  help: 'Ayuda',
  personal: {
    title: 'Datos personales',
    name: 'Nombre',
    surname: 'Apellidos',
    birthday: 'Fecha de nacimiento',
    gender: 'Género',
    address: 'Dirección',
    city: 'Localidad',
    postal: 'Código postal',
    genders: {
      M: 'Hombre',
      F: 'Mujer',
      A: 'No binario'
    }
  },
  contact: {
    title: 'Información de contacto',
    repeatemail: 'Repite el e-mail',
    mobilephone: 'Móvil',
    phone: 'Fijo (opcional)',
    stoneage: 'No tengo e-mail ni/o móvil'
  },
  collectiu: {
    title: 'Colectivo',
    help: 'Si no encuentras tu municipio, selecciona el colectivo más cercano a ti.',
    select: 'Selecciona un colectivo'
  },
  fees: {
    title: 'Domiciliación bancaria',
    name: 'Titular de la cuenta',
    fee: 'Cuota',
    normal: 'Cuota normal',
    biannual: 'Cada seis meses',
    reduced: 'Cuota reducida',
    reducedinfo: '(estudiantes, parados, jubilados)'
  },
  avals: {
    title: 'Avales',
    prompt: '¿Quieres adjuntar avales?',
    close: 'No quiero adjuntar avales',
    tooltip: 'Si ya conoces a dos adheridos a Compromís, puedes introducir sus DNIs porque confirman tu alta. Si no, será el portavoz de tu colectivo local el encargado de confirmar el alta.'
  },
  tel: {
    prefix: 'Prefijo interncional',
    number: 'Teléfono'
  },
  offline: {
    ok: 'Entendido',
    instructions: 'El e-mail i el móvil son campos obligatorios si quieres darte de alta a través de internet. No obstante, puedes registrarte sin e-mail ni móvil imprimiendo el {0} y enviándolo firmado a la siguiente dirección:',
    forms: {
      2: 'formulario de Més',
      3: 'formulario de Iniciativa',
      4: 'formulario de VerdsEquo',
      14: 'formulario de adhesión a Compromís'
    }
  },
  notice: {
    ssl: 'Tus datos se enviarán de forma segura a través de una conexión cifrada SSL',
    privacy: `{0} con cumplimiento con lo que establece la {1}, de {2}, le informamos que los datos
      personales que va a proporcionarnos serán incorporados a un fichero automatizado de {0},
      que como responsable del fichero, tratará los mismos con el fin de tramitar su afiliación,
      permitiendo el ejercicio de derechos y deberes, gestionar su participación y ofrecerle información
      sobre nuestras actividades, ya sea por correo ordinario, electrónico, SMS u otro medio de
      comunicación equivalente. Asimismo, le informamos que podrá ejercer los derechos que le asisten de acceso,
      rectificación, cancelación y oposición al tratamiento de la información que le concierne a través de
      su usuario del Espai Compromís o dirigiendo un escrito o bien por correo postal a Compromís (Plaza del
      Pilar, 1 - 46001 València) o mediante correo electrónico a {3}, acompañado de una fotocopia
      de un documento que acredite su identidad. Más información en {4}`,
    law: 'Ley Orgánica 3/2018 del 5 de diciembre',
    law_name: 'Protección de Datos Personales y Derechos Digitales',
    privacy_link: 'Aviso legal y política de privacidad'
  },
  verify_id: {
    title: 'Adjunta tu DNI / NIE',
    front: 'Anverso',
    back: 'Reverso',
    submit: 'Adjuntar archivos',
    instructions_desktop: 'Arrastra o selecciona una foto',
    instructions_mobile: 'Haz una foto o selecciona un archivo',
    filetypes: 'Archivos {0}, {1}, {2}, o {3} hasta {4}.',
    uploading: 'Subiendo...',
    uploaded: 'Archivo adjuntado'
  },
  verify_sms: {
    title: 'Te hemos enviado un código de firma digital al {number}',
    new_code: 'Te hemos enviado un código nuevo.',
    label: 'Código SMS',
    sign: 'Firmar formulario',
    after_minute: 'Podrás pedir un código nuevo si no recibes el SMS en un minuto',
    retry: 'No he recibido ningún código',
    modify: 'Modificar móvil',
    instruction: 'Escribe la posición {digit} del código SMS'
  },
  additional_info: {
    generic: {
      title: '¿Quieres añadir información?',
      all_optional: 'Todos los campos son opcionales',
      labor_code: 'Profesión',
      labor: 'Descripción...',
      studies: 'Estudios',
      union: 'Sindicato',
      movements: 'Movimientos'
    },
    public_employee: {
      title: '¿Eres funcionario/a?',
      yesno: 'Funcionario/a',
      department: 'Administración',
      category: 'Categoría',
      type: 'Tipo',
      departments: [
        'Administración del Estado',
        'Administración autonómica',
        'Administración provincial',
        'Administración local',
        'Sanidad',
        'Educación',
        'Justicia',
        'Otro'
      ],
      types: {
        C: 'Carrera',
        I: 'Interinaje'
      }
    },
    sectorials: {
      title: '¿Quieres apuntarte a una sectorial?',
      label: 'Sectoriales'
    },
    submit: 'Adjuntar información',
    skip: 'Omitir este paso'
  },
  success: {
    thankyou: 'Gracias por tu compromiso',
    greetings: {
      M: 'Bienvenido',
      F: 'Bienvenida',
      A: 'Bienvenidas'
    },
    activate: 'Actívate al Espai Compromís',
    step1: 'Revisa tu correo correu y establece una contraseña',
    goto: 'Ir a {emailDomain}',
    processing: 'Hemos recibido tus datos y estamos procensando tu afiliación. Tan pronto como se acepte recibirás un e-mail de confirmación para activar tu usuario.',
    meanwhile: 'Mientras tanto, puedes seguirnos en redes sociales'
  },
  nav: {
    title: 'Formulario de adhesión'
  },
  footer: {
    help: '¿Necesitas ayuda? Contacta con {0}'
  }
}

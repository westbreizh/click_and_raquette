import * as yup from 'yup'


const shemaInputLogin = yup.object().shape({

  email: yup
    .string()
    .email("Veuillez fournir un format d'e-mail valide ")
    .required("Veuillez saisir votre email, merci!"),

  password: yup
    .string()
    /*
    .required("Veuillez saisir votre mot de passe, merci!")
    .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
    .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
      .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
      .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
      .min(8, "le mot de passe doit contenir au moins 8 caractères"),
    */
});
  
export {shemaInputLogin}

const shemaInputSignup = yup.object().shape({

  civilite: yup
  .string()
  .required("Veuillez renseigner votre civilité, merci!"),

  forename: yup
      .string()
      .required("Veuillez saisir votre prénom")
      .max(30, "Votre prénom ne peut contenir 30 caratères au maximum"),

  lastname: yup
  .string()
  .required("Veuillez saisir votre nom, merci!")
  .max(30, "Votre nom ne peut contenir 30 caratères au maximum"),

  email: yup
      .string()
      .email("Veuillez fournir un format d'e-mail valide ")
      .required("Veuillez saisir votre email, merci!"),

  password: yup
    .string(),
    /*
    .required("Veuillez saisir votre mot de passe, merci!")
    .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
    .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
      .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
      .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
      .min(8, "le mot de passe doit contenir au moins 8 caractères"),
      */

  passwordConfirm: yup
    .string()
    .required('veuillez resaisir le mot de passe')
    .oneOf([yup.ref('password')], 'Les mots de passes doivent être identiques'),

  });
  
export {shemaInputSignup}

  
const shemaInputChangeEmail= yup.object().shape({

  email: yup
    .string()
    .email("Veuillez fournir un format d'e-mail valide ")
    .required("Veuillez saisir votre email, merci!"),

  new_email: yup
    .string()
    .email("Veuillez fournir un format d'e-mail valide ")
    .required("Veuillez saisir votre nouvel e-mail, merci!"),

  confirm_new_email: yup
    .string()
    .email("Veuillez fournir un format d'e-mail valide ")
    .required("Veuillez resaisir votre nouvel e-mail, merci!")
    .oneOf([yup.ref('new_email')], 'Les e-mails doivent être identiques'),

});
  
export {shemaInputChangeEmail}


const shemaInputChangePassword= yup.object().shape({

  password: yup
  .string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
    .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
    .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
    .min(8, "le mot de passe doit contenir au moins 8 caractères"),
  */
  new_password: yup
  .string(),
  /*
  .required("Veuillez saisir votre mot de passe, merci!")
  .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
  .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
  .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
  .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
  .min(8, "le mot de passe doit contenir au moins 8 caractères"),
*/

  new_passwordConfirm: yup
    .string()
    .required('veuillez resaisir le mot de passe')
    .oneOf([yup.ref('new_password')], 'Les mots de passes doivent être identiques'),

});
  
export {shemaInputChangePassword}


const shemaInputResetPasswordEmail= yup.object().shape({
  email: yup
    .string()
    .email("Veuillez fournir un format d'e-mail valide ")
    .required("Veuillez saisir votre email, merci!"),
});
  
export {shemaInputResetPasswordEmail}
  

const shemaInputResetPassword= yup.object().shape({

  new_password: yup
    .string(),
    /*
    .required("Veuillez saisir votre mot de passe, merci!")
    .matches(/^(?=.{4,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/, "Votre  mot de passe doit contenir au moins 8 caractères, 1 chiffre, une majuscule et un caractère spéciale")
    .matches(/[a-z]/, "le mot de passe doit contenir au moins une minuscule")
     .matches(/[A-Z]/, "le mot de passe doit contenir au moins une majuscule")
     .matches(/[0-9]/, "le mot de passe doit contenir au moins un chiffre")
     .min(8, "le mot de passe doit contenir au moins 8 caractères"),
   */

  confirm_new_password: yup
    .string()
    .required('veuillez resaisir le mot de passe')
    .oneOf([yup.ref('new_password')], 'Les mots de passes doivent être identiques'),
  });
  
export {shemaInputResetPassword}


const shemaInputStringing = yup.object().shape({
  club: yup
    .string()
    .required("Veuillez choisir un club, merci!"),
});

export {shemaInputStringing}



const shemaInputCoordonate = yup.object().shape({

  road: yup
  .string()
  .max(30, "le champs ne peut contenir que 30 caratères"),
  city: yup
  .string()
  .required("Veuillez saisir votre ville")
  .max(30, "le champs ne peut contenir que 30 caratères"),

  postalCode: yup
  .string()
  .max(30, "le champs ne peut contenir que 30 caratères"),

  telephone: yup
  .string()
  .matches(/^[0-9]{10}$/, "Le numéro de téléphone doit contenir 10 chiffres"),

  });
  
export {shemaInputCoordonate}
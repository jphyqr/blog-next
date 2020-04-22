const stockModals = {
  RegisterModal: "RegisterModal",
};

export const verificationMap = {
  //in order, things that should be set true
  //in our account
  Password: "Password",
  DisplayName: "DisplayName",
  //if setPassword is false in DB, launch a model to setpassword
};

export const modals = Object.assign(stockModals, verificationMap);

export const verificationCheck = (profile, checks, dispatch) => {
  console.log("verification check", checks);

  let verified = true;
  let failedAt;
  checks.forEach((check) => {
    if (!profile[`${check}`]) {
      verified = false;
      failedAt = check;
    }
  });

  const failFunction = () => {
    dispatch({
      type: "SET_MODAL",
      payload: check,
    });
  };

  console.log("IS IT VERFIED?", verified);

  if (!verified) {
    console.log("CALL FAIL FUNCTION");
    failFunction();
  }

  return verified;
};

export const Button = (prop) => {
  const enabledLable = prop.enabledLable || "Submit";
  const disabledLable = prop.disabledLable || "Submitting..";
  const isSubmitting = prop.isSubmitting || false;
  let btn = isSubmitting ? (
    <button disabled type="submit" className="btn btn-secondary btn-block">
      {disabledLable}
    </button>
  ) : (
    <button type="submit" className="btn btn-secondary btn-block">
      {enabledLable}
    </button>
  );
  return btn;
};

import React, { ReactElement } from "react";

interface Props {
  name: string;
  touched: { [key: string]: any | undefined };
  errors: { [key: string]: any | undefined };
  index?: number;
  keyName?: string;
}

function FormikValidationError(props: Props): ReactElement {
  const { name, touched, errors } = props;

  return touched[name] && errors[name] ? (
    <div className="text-left">
      <span className="error font-weight-semibold" style={{color: " #c0392b "}}>
        {" "}
        <span className="ic-error"></span>{" "}
        {errors[name] }
      </span>
    </div>
  ) : (
    <></>
  );
}

export function FormikFieldArrayValidationError(props: Props): ReactElement {
  const { name, touched, errors, index, keyName } = props;
  if (
    `${keyName}` in errors &&
    `${keyName}` in touched &&
    errors[keyName!][index!]
  ) {
    return (
      <span className="error font-weight-bold" style={{ fontStyle: "normal" }}>
        {" "}
        {errors[keyName!][index!][name] && (
          <span className="ic-error"></span>
        )}{" "}
        {errors[keyName!][index!][name] as string}
      </span>
    );
  }

  return <span></span>;
}

export default FormikValidationError;

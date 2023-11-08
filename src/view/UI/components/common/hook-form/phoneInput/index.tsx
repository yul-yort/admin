//FIXME: задача будет доделана в рамках PHONE-FORM
import { FC } from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry, {
  ReactHookFormComponentProps,
} from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import css from "./styles.module.scss";
import { ICreateOrEditAgencyFormFields } from "../../../shared";

const DEFAULT_COUNTRY = "RU";

const validatePhoneNumber = (value: string) =>
  !value ? false : isValidPhoneNumber(value);

const PhoneInputHF: FC<
  ReactHookFormComponentProps<ICreateOrEditAgencyFormFields>
> = ({ ...rest }) => {
  return (
    <PhoneInputWithCountry
      {...rest}
      defaultCountry={DEFAULT_COUNTRY}
      placeholder="Телефон"
      international
      countryCallingCodeEditable={false}
      className={css.test}
      rules={{
        validate: validatePhoneNumber,
      }}
    />
  );
};

export { PhoneInputHF };

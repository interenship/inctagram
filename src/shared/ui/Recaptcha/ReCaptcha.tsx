import { forwardRef } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

import { Typography } from "../Typography";
import { RECAPTCHA_SITE_KEY } from "./config";

type Props = {
  error?: boolean;
  language?: string;
} & Partial<ReCAPTCHAProps>;

const ReCaptcha = forwardRef<ReCAPTCHA, Props>((props, ref) => {
  const { error = false, language = "en", ...rest } = props;

  const translations: { [key: string]: string } = {
    en: "Please verify that you are not a robot",
    ru: "Пожалуйста, подтвердите, что вы не робот",
  };

  return (
    <div>
      <div className="h-[86px] w-[320px] rounded-[2px] border border-dark-300 bg-[#222222]">
        <div
          className="w-[304px] pl-[10px] pt-[6px]"
          style={{ clipPath: "inset(8px 2px 4px 12px)" }}
        >
          <ReCAPTCHA ref={ref} theme="dark" hl={language} {...rest} sitekey={RECAPTCHA_SITE_KEY} />
        </div>
      </div>
      {error && (
        <Typography.SMALL className="mt-2 text-danger-500">
          {translations[language] ?? translations.en}
        </Typography.SMALL>
      )}
    </div>
  );
});

ReCaptcha.displayName = "ReCaptcha";

export { ReCaptcha };

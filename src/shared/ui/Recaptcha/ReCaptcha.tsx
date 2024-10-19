import { forwardRef } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

import { Typography } from "../Typography";

type Props = {
  error?: boolean;
  language?: string;
} & Partial<ReCAPTCHAProps>;

const ReCaptcha = forwardRef<ReCAPTCHA, Props>((props, ref) => {
  const { error = false, language = "en", ...rest } = props;

  const translations = {
    en: "Please verify that you are not a robot",
    ru: "Пожалуйста, подтвердите, что вы не робот",
  };

  const key = "6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ";

  return (
    <div>
      <div className="h-[86px] w-[320px] rounded-[2px] border border-dark-300 bg-[#222222]">
        <div
          className="w-[304px] pl-[10px] pt-[6px]"
          style={{ clipPath: "inset(8px 2px 4px 12px)" }}
        >
          <ReCAPTCHA ref={ref} theme="dark" hl={language} {...rest} sitekey={key} />
        </div>
      </div>
      {error && (
        <Typography.SMALL className="mt-2 text-danger-500">
          {language === "en" ? translations.en : translations.ru}
        </Typography.SMALL>
      )}
    </div>
  );
});

ReCaptcha.displayName = "ReCaptcha";

export { ReCaptcha };

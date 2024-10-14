import { forwardRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Typography } from "../Typography";

type Props = {
  error?: boolean;
};

const ReCaptcha = forwardRef<ReCAPTCHA, Props>(({ error = false }: Props, ref) => {
  const key = "6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ";

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <div className="h-[86px] w-[320px] rounded-[2px] border border-dark-300 bg-[#222222]">
        <div
          className="w-[304px] pl-[10px] pt-[6px]"
          style={{ clipPath: "inset(8px 2px 4px 12px)" }}
        >
          <ReCAPTCHA ref={ref} theme="dark" hl="en" sitekey={key} onChange={handleCaptchaChange} />
        </div>
      </div>
      {error && (
        <Typography.SMALL className="mt-2 text-danger-600">
          Please verify that you are not a robot
        </Typography.SMALL>
      )}
    </>
  );
});

ReCaptcha.displayName = "ReCaptcha";

export { ReCaptcha };

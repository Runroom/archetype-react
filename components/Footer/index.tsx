import React from "react";

import useTranslation from "../../lib/hooks/useTranslation";
import Anchor from "../../ui/Anchor";
import Wrapper from "../../ui/Wrapper";
import { Footer } from "./styles";

const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      <Wrapper>
        {t("madeBy")}{" "}
        <Anchor
          href="https://runroom.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Runroom
        </Anchor>
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;

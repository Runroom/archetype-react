import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";

import LocaleSwitcher from "../LocaleSwitcher";
import useTranslation from "../../lib/hooks/useTranslation";
import Anchor from "../../ui/Anchor";
import routes from "../../config/routes.json";

const Navigation = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { locale, t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <a onClick={() => toggleTheme()}>Toggle</a>
      <Link href={routes.home} as={`/${locale}`}>
        <Anchor isActive={!!(pathname === routes.home)}>
          {t("home.menu")}
        </Anchor>
      </Link>
      <Link href={routes.about} as={`/${locale}/about`}>
        <Anchor isActive={!!(pathname === routes.about)}>
          {t("about.menu")}
        </Anchor>
      </Link>
      <Anchor
        href="https://github.com/ads1018/next-apollo-example"
        target="__blank"
        rel="noopener noreferrer"
      >
        Github
      </Anchor>
      <LocaleSwitcher />
    </>
  );
};

export default Navigation;

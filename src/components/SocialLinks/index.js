import React from "react";
import icons from "./icons";
import links from "./content";

import * as S from "./styled";

const SocialLinks = () => (
  <S.SocialList>
    {links.map((link, i) => {
      const Icon = icons[link.label];

      return (
        <S.SocialItem key={i}>
          <S.SocialLink
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLink>
        </S.SocialItem>
      );
    })}
  </S.SocialList>
);

export default SocialLinks;

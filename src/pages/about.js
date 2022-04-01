import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FiActivity } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { TiMortarBoard } from "react-icons/ti";
import {
  FaRegBookmark,
  FaUniversity,
  FaVuejs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";

import { DiJavascript1, DiReact } from "react-icons/di";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import * as S from "../components/About/styled";

const About = () => {
  const icons = [
    { label: "Javascript", icon: DiJavascript1 },
    { label: "HTML", icon: FaHtml5 },
    { label: "CSS", icon: FaCss3 },
    { label: "Git", icon: FaGitAlt },
    { label: "React JS", icon: DiReact },
    { label: "Vue Js", icon: FaVuejs },
  ];

  const baseColor = () => {
    return typeof window !== "undefined"
      ? window
          .getComputedStyle(document.body)
          .getPropertyValue("--sidebarBackground")
      : "#e74c3c";
  };

  return (
    <Layout>
      <SEO title="About" />
      <S.AboutContainer>
        <S.About>
          <S.Title>Quem sou?</S.Title>
          <S.Text>
            Como você já deve ter notado, me chamo Cristiano Gonçalves. Sou Tech
            Lead & desenvolvedor Front End na
            <a href="https://zak.app/"> Zak </a>e bacharel em Sistemas de
            Informação pela Universidade do Estado da Bahia. Atualmente moro em
            Alagoinhas, interior da Bahia, e trabalho de forma remota.
          </S.Text>
          <S.SkillsList>
            {icons.map((item) => {
              const Icon = item.icon;
              return (
                <li title={item.label}>
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </li>
              );
            })}
          </S.SkillsList>

          <S.Text>
            Mais informações no meu{" "}
            <a
              href="https://github.com/crisgon/personal-blog/blob/master/static/Curriculo%20-%20Front%20-%20Cristiano.pdf"
              target="_blank"
            >
              {" "}
              currículo
            </a>
            .
          </S.Text>
        </S.About>

        <S.TimelineContainer>
          <Timeline>
            <TimelineEvent
              title="Enfim, Tech Lead"
              titleStyle={{ color: baseColor() }}
              createdAt="Junho de 2021"
              iconColor={baseColor()}
              icon={<MdComputer />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Depois de muito trabalho duro eu recebi a oportunidade que tanto
              almejava... Enfim Tech Lead!
            </TimelineEvent>

            <TimelineEvent
              title="Cheguei na Zak"
              titleStyle={{ color: baseColor() }}
              createdAt="Abril de 2021"
              iconColor={baseColor()}
              icon={<MdComputer />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Após completar um ciclo na cubos foi hora de alçar um novo voo no
              desafio da zak no papel de maior referência de frontend do nosso
              produto.
            </TimelineEvent>

            <TimelineEvent
              title="Entrei na Cubos"
              titleStyle={{ color: baseColor() }}
              createdAt="Dezembro de 2018"
              iconColor={baseColor()}
              icon={<MdComputer />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Aceitei um novo desafio, trabalhar com uma stack totalmente
              desconhecida pra mim. React + Typsecript + Mobx. Fiz uma ótima
              escolha, tenho aprendido bastante e cada vez gosto mais dessa
              stack.
            </TimelineEvent>

            <TimelineEvent
              title="Finalmente formado!"
              titleStyle={{ color: baseColor() }}
              createdAt="Novembro de 2018"
              iconColor={baseColor()}
              icon={<TiMortarBoard />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Depois de muito sofrimento...
            </TimelineEvent>

            <TimelineEvent
              title="Meu Primeiro emprego como FrontEnd"
              titleStyle={{ color: baseColor() }}
              createdAt="Julho de 2018"
              iconColor={baseColor()}
              icon={<MdComputer />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Iniciei meu primeiro emprego formal, depois de alguns anos como
              bolsita estagiário. Foi um grande desafio, onde trabalhei
              remotamente utilizando Vue JS.
            </TimelineEvent>

            <TimelineEvent
              title="Comecei o curso de Sistemas de Informação"
              titleStyle={{ color: baseColor() }}
              createdAt="Janeiro de 2012"
              iconColor={baseColor()}
              icon={<FaUniversity />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Iniciei um curso superior sem saber exatemente tudo que ia
              encontrar lá, mas já tinha o desejo de trabalhar com web.
            </TimelineEvent>

            <TimelineEvent
              title="Criei meu primeiro Blog"
              titleStyle={{ color: baseColor() }}
              createdAt="2011"
              iconColor={baseColor()}
              icon={<FaRegBookmark />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Sempre fui ligado em animes e coisas do tipo, por isso logo quando
              tive meu primeiro computador eu decidi que iria criar um site
              sobre animes. Pra isso entrei em cursinhos de informática e
              devorei todos os cursos na metade do tempo, isso me possibilitou
              uma confiança para criar meu primeiro site. Ele tinha um fundo
              preto e vermelho e as letras eram amarelas, não era nada bonito,
              mas foi o meu começo. Logo depois eu parti para o Blogger e fui
              aprendendo um pouco mais sobre HTML e CSS.
            </TimelineEvent>

            <TimelineEvent
              title="Meu Nascimento"
              titleStyle={{ color: baseColor() }}
              createdAt="Maior de 1995"
              iconColor={baseColor()}
              icon={<FiActivity />}
              contentStyle={{
                lineHeight: "1.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Aqui começava a caminhada de um menino que queria ser astronauta,
              cientista ou veterinário..
            </TimelineEvent>
          </Timeline>
        </S.TimelineContainer>
      </S.AboutContainer>
    </Layout>
  );
};

export default About;

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
  FaGitAlt
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
    { label: "Vue Js", icon: FaVuejs }
  ];
  return (
    <Layout>
      <SEO title="About" />
      <S.AboutContainer>
        <S.About>
          <S.Title>Quem sou?</S.Title>
          <S.Text>
            Como você já deve ter notado, me chamo Cristiano Gonçalves. Sou
            desenvolvedor Front End na
            <a href="https://cubos.io/"> Cubos Tecnologia </a>e bacharel em
            Sistemas de Informação pela Universidade do Estado da Bahia.
            Atualmente moro em Alagoinhas, interior da Bahia, e trabalho de
            forma remota.
          </S.Text>
          <S.SkillsList>
            {icons.map(item => {
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
            <a href="https://drive.google.com/file/d/10N-hlUnYc4sH1JMv_Xa0U4LRW-R4He78/view?usp=sharing">
              {" "}
              currículo
            </a>
            .
          </S.Text>
        </S.About>

        <S.TimelineContainer>
          <Timeline>
            <TimelineEvent
              title="Meu Nascimento"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="Maior de 1995"
              iconColor="#e74c3c"
              icon={<FiActivity />}
              contentStyle={{ lineHeight: "1.5rem" }}
            >
              Aqui começava a caminhada de um menino que queria ser astronauta,
              cientista ou veterinário..
            </TimelineEvent>

            <TimelineEvent
              title="Criei meu primeiro Blog"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="2011"
              iconColor="#e74c3c"
              icon={<FaRegBookmark />}
              contentStyle={{ lineHeight: "1.5rem" }}
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
              title="Comecei o curso de Sistemas de Informação"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="Janeiro de 2012"
              iconColor="#e74c3c"
              icon={<FaUniversity />}
              contentStyle={{ lineHeight: "1.5rem" }}
            >
              Iniciei um curso superior sem saber exatemente tudo que ia
              encontrar lá, mas já tinha o desejo de trabalhar com web.
            </TimelineEvent>

            <TimelineEvent
              title="Meu Primeiro emprego como FrontEnd"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="Julho de 2018"
              iconColor="#e74c3c"
              icon={<MdComputer />}
              contentStyle={{ lineHeight: "1.5rem" }}
            >
              Iniciei meu primeiro emprego formal, depois de alguns anos como
              bolsita estagiário. Foi um grande desafio, onde trabalhei
              remotamente utilizando Vue JS.
            </TimelineEvent>

            <TimelineEvent
              title="Finalmente formado!"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="Novembro de 2018"
              iconColor="#e74c3c"
              icon={<TiMortarBoard />}
              contentStyle={{ lineHeight: "1.5rem" }}
            >
              Depois de muito sofrimento...
            </TimelineEvent>

            <TimelineEvent
              title="Entrei na Cubos"
              titleStyle={{ color: "#e74c3c" }}
              createdAt="Dezembro de 2018"
              iconColor="#e74c3c"
              icon={<MdComputer />}
              contentStyle={{ lineHeight: "1.5rem" }}
            >
              Aceitei um novo desafio, trabalhar com uma stack totalmente
              desconhecida pra mim. React + Typsecript + Mobx. Fiz uma ótima
              escolha, tenho aprendido bastante e cada vez gosto mais dessa
              stack.
            </TimelineEvent>
          </Timeline>
        </S.TimelineContainer>
      </S.AboutContainer>
    </Layout>
  );
};

export default About;

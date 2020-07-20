import React from "react";
import PropTypes from "prop-types";

import { LeftArrowAlt as Prev } from "styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt as Next } from "styled-icons/boxicons-regular/RightArrowAlt";

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled";

const Paginate = ({
  isFirst,
  isLast,
  currentPage,
  totalPages,
  nextPage,
  prevPage
}) => {
  return (
    <S.Paginate>
      {!isFirst && (
        <S.Link
          to={prevPage}
          fade
          duration={0.6}
          bg={getThemeColor()}
        >
          <S.IconWrapper>
            <Prev />
          </S.IconWrapper>
          Página Anterior
        </S.Link>
      )}
      <S.TotalPages>
        {currentPage} de {totalPages}
      </S.TotalPages>
      {!isLast && (
        <S.Link
          to={nextPage}
          fade
          duration={0.6}
          bg={getThemeColor()}
        >
          Próxima Página
          <S.IconWrapper>
            <Next />
          </S.IconWrapper>
        </S.Link>
      )}
    </S.Paginate>
  );
};

Paginate.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default Paginate;

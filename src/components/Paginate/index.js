import React from "react";
import PropTypes from "prop-types";

import { LeftArrowAlt as Prev } from "styled-icons/boxicons-regular/LeftArrowAlt";
import { RightArrowAlt as Next } from "styled-icons/boxicons-regular/RightArrowAlt";

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
        <S.Link to={prevPage}>
          <S.IconWrapper>
            <Prev />
          </S.IconWrapper>
          Página Anterior
        </S.Link>
      )}
      <span>
        {currentPage} de {totalPages}
      </span>
      {!isLast && (
        <S.Link to={nextPage}>
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

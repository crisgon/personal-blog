import styled from "styled-components";

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 1rem;
  }
  .ais-SearchBox {
    padding-top: 2rem;
  }
  .ais-Stats {
    color: var(--black);
  }

  .ais-SearchBox-input {
    background: var(--white);
    border: none;
    border-radius: 5px;
    color: var(--black);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--gray);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem;

  body#grid & {
    .ais-Hits {
      .ais-Hits-list {
        display: grid;
        grid-area: posts;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }
`;

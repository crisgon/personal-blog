import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom";

import Hit from "./Hit";
import * as S from "./styled";

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
};

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <S.SearchWrapper>
      <SearchBox autoFocus translations={{ placeholder: "Procurando algo?" }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
          }
        }}
      />
    </S.SearchWrapper>

    <Hits hitComponent={Hit} />
  </InstantSearch>
);

export default Search;

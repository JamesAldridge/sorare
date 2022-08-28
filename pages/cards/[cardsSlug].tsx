import type { NextPage } from "next";
import gql from "graphql-tag";
import { useGQLQuery } from "../../hooks/useGLQuery.ts";
import { useRouter } from "next/router";
import Card from "../../components/card";
import { useState } from "react";
import { Typography, Box } from "../../node_modules/@mui/material/index";

const GET_CARDS = gql`
  query ($slugs: [String!]!) {
    cards(slugs: $slugs) {
      id
      name
      age
      grade
      onSale
      position
      rarity
      season {
        name
      }
      player {
        activeClub {
          name
        }
        matchName
        country {
          code
        }
        pictureUrl
      }
    }
  }
`;

const CardsPage: NextPage = () => {
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const { query } = useRouter();
  const { data } = useGQLQuery(
    "cards",
    GET_CARDS,
    {
      slugs:
        typeof query.cardsSlug === "string" ? query.cardsSlug?.split(",") : "",
    },
    { enabled: dataFetched }
  );
  
  return (
    <>
      <Typography variant='h1'>Sorare</Typography>
      <button onClick={() => setDataFetched((old) => !old)}>
        Click to Reveal
      </button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}> 
        {typeof query.cardsSlug === "string" &&
          query.cardsSlug?.split(",").map((cardSlug: string, i) => (
                  <Card card={data?.cards[i]} />
          ))}
      </Box>
    </>
  );
};

export default CardsPage;
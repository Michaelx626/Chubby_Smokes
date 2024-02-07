import { gql } from "@apollo/client";

export const QUERY_ALL_VAPES = gql`
  query getAllVapes{
    getAllVapes{
      _id
      brand
      flavor
      capacity_mL
      battery_life
      nicotine_percentage
      puffs
      price
      image
    }
  }
`;

export const QUERY_ALL_JUICES = gql`
  query getAllJuices{
    getAllJuices{
      _id
      brand
      flavor
      size
      nicotine_percentage
      price
      image
    }
  }
`;
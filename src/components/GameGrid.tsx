import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  result: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.result))
      .catch((err) => setError(err.massage));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.length > 0 ? (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li>No games found.</li>
        )}
      </ul>
    </>
  );
};

export default GameGrid;

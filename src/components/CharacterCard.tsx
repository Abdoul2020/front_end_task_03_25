import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Character } from "../models/character";
import { Badge } from "./ui/badge";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  // Helper function to determine status color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold truncate">{character.name}</CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <span className={`inline-block w-3 h-3 rounded-full ${getStatusColor(character.status)}`} />
          <span className="text-sm">{character.status} - {character.species}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-2 flex-grow">
        <div className="text-sm space-y-2">
          <div>
            <p className="text-gray-500">Gender:</p>
            <p>{character.gender}</p>
          </div>
          <div>
            <p className="text-gray-500">Origin:</p>
            <p className="truncate">{character.origin.name}</p>
          </div>
          <div>
            <p className="text-gray-500">Location:</p>
            <p className="truncate">{character.location.name}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Badge variant="outline" className="mr-1">
          ID: {character.id}
        </Badge>
      </CardFooter>
    </Card>
  );
}
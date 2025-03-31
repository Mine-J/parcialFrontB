export type definitions = {
  definition: string;
  example: string;
}

export type meanings = {

  definitions: definitions[];
  partOfSpeech: string;
  synonyms: string[];
}

export type respuesta = {
  word: string;
  meanings: meanings[];
}


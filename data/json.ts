export type JsonObject = {
    [key: string]: Json;
};

export type Json =
    | string
    | number
    | boolean
    | null
    | JsonObject
    | Json[];
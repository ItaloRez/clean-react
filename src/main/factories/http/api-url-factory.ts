import { RemoteAuthentication } from "@/data/usecases/authentication/remote-authentication";
import { makeAxiosHttpClient } from "@/main/factories/http/axios-http-client-factory";
import { Authentication } from "@/domain/usecases";

export const makeApiUrl = (): string => {
  return "http://localhost:5050/api/login";
};

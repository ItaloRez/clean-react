import { faker } from "@faker-js/faker";
import axios from "axios";

export const mockHttpResponse = (): any => ({
  status: faker.random.numeric(),
  data: {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.post.mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};

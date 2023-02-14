import { faker } from "@faker-js/faker";
import axios from "axios";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.post.mockResolvedValue({
    status: faker.random.numeric(),
    data: {
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });
  return mockedAxios;
};

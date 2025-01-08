import { faker } from "@faker-js/faker";

export const listName = Array.from({ length: 1000 }, () => ({
  name: faker.person.fullName(),
}));

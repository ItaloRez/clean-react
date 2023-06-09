import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation,
} from "@/validation/validators";
import { faker } from "@faker-js/faker";
import { ValidationBuilder as sut } from "./validation-builder";

describe("ValidationBuilder", () => {
  test("Should return RequireFieldValidation", () => {
    const field = faker.database.column();
    const validations = sut.field(field).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(field)]);
  });

  test("Should return EmailValidation", () => {
    const field = faker.database.column();

    const validations = sut.field(field).email().build();
    expect(validations).toEqual([new EmailValidation(field)]);
  });

  test("Should return MinLengthValidation", () => {
    const field = faker.database.column();
    const length = parseInt(faker.random.numeric());

    const validations = sut.field(field).min(length).build();
    expect(validations).toEqual([new MinLengthValidation(field, length)]);
  });

  test("Should return a list of validations", () => {
    const field = faker.database.column();
    const length = parseInt(faker.random.numeric());

    const validations = sut.field(field).required().min(length).email().build();
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field),
    ]);
  });
});

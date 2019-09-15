const moxios = require("moxios");
const api = require("../api.config");
const CharactersRepository = require("./CharactersService");

describe("Characters Service", () => {
  beforeEach(() => {
    moxios.install(api);
  });

  afterEach(() => {
    moxios.uninstall(api);
  });

  test("should return characters from a given name", async () => {
    const name = 'name';
    const expectedResults = [{ id: 1, name }, { id: 2, name }, { id: 3, name }];

    moxios.stubRequest(/characters.*/, {
      status: 200,
      response: {
        data: expectedResults
      }
    });

    const charactersRepository = new CharactersRepository();
    const actualResults = await charactersRepository.findAll(name);

    expect(actualResults).toEqual(expectedResults);
  });

  test("should return a character from a given id", async () => {
    const id = 1234;
    const expectedResults = { id }

    moxios.stubRequest(/characters\/1.*/, {
      status: 200,
      response: {
        data: {
          results: [expectedResults]
        }
      }
    });

    const charactersRepository = new CharactersRepository();
    const actualResults = await charactersRepository.findById(id);

    expect(actualResults).toEqual(expectedResults);
  });
});

import mockAxios from "axios";


it("fetches data from unsplash", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { results: ["cat.jpg"] }
    })
  );

  // work
  const images = await unsplash("cats");

  // expect
  expect(images).toEqual(["cat.jpg"]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: "cats"
      }
    }
  );
});


export default {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };
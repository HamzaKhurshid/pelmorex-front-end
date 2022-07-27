test("List component, API Endpoint must return a valid players data", async () => {
  const data = await fetch(`${process.env.REACT_APP_PUBLIC_API_BASEURL}/players`);
  const { data: playersList = [] } = await data.json() || {};
  expect(playersList.length).toBeGreaterThanOrEqual(1);
});
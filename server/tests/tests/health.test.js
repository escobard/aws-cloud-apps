export default describe("health route", () => {
  it(">> smoke test, has DB, is running in test environment", async () => {
    let {status, text} = await request(server).get('/');
    expect(status).toEqual(200)
    return expect(text).toEqual('Healthy!');
  });
});

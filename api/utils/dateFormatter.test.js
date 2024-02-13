import { dataFormatter } from './dataFormatter';

describe('dataFormatter', () => {
  it('should format data correctly', () => {
    const data = {
      'created_at': 1643148480000, // Unix timestamp for 2022-01-25T18:08:00.000Z
      'updated_at': 1643148480000, // Unix timestamp for 2022-01-25T18:08:00.000Z
      'some_key': 'some value'
    };

    const expectedOutput = {
      createdAt: new Date(data.created_at).toLocaleString("en-US"),
      updatedAt: new Date(data.updated_at).toLocaleString("en-US"),
      someKey: 'some value'
    };

    expect(dataFormatter(data)).toEqual(expectedOutput);
  });

  it('should return an empty object when input is an empty object', () => {
    const data = {};
    const expectedOutput = {};

    expect(dataFormatter(data)).toEqual(expectedOutput);
  });

});
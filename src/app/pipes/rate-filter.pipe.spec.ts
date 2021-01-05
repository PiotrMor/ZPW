import { Trip } from '../model/Trip';
import { RateFilterPipe } from './rate-filter.pipe';

describe('RateFilterPipe', () => {
  const pipe = new RateFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('Transform empty stream', () => {
    let trips: Trip[] = [];
    expect(pipe.transform(trips, 0)).toEqual([]);
  });

  it('Filter at least 3 start', () => {
    let trips: Trip[];
  })
});

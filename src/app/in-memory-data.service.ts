import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', poster: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
      { id: 12, name: 'Narco', poster: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
      { id: 13, name: 'Bombasto', poster: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
      { id: 14, name: 'Celeritas', poster: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
      { id: 15, name: 'Magneta', poster: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
    ];
    return {heroes};
  }
}

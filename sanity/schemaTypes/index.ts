import { type SchemaTypeDefinition } from 'sanity';
import products from './products'
import order from './order';
import customer from './customer';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, customer, order, ],
}

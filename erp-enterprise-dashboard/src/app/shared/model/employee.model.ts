// ✅ TypeScript interface to describe the shape of a data used across the app to ensuring type safety when handling API data or state [Shared]
export interface Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

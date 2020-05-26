interface Pet {
  name: string;
  breed?: string;
  gender?: string;
  color?: string;
  location?: string;
  notes?: string;
  weight?: number;
  age: number;
}
interface Species {
  species: string;
  pet: Pet;
}

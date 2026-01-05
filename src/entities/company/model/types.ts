export interface ICompany {
  id: string;
  name: string;
  logo_url: string;
  slug: string;
  industry?: string;
  website?: string;
  location?: string;
  founded?: string;
  description?: string;
  employees?: number;
}

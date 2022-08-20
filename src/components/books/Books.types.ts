interface Format {
  mimeType: "image/jpeg";
}
export interface book {
  id: number;
  title: string;
  authors: Person[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}
interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}
interface results {
  count: number;
  next: string | null;
  previous: string | null;
  results: book[];
}
export default results;

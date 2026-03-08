export interface Track {
  title: string;
  duration?: string;
  featured?: boolean;
}

export interface Album {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  coverSymbol?: string;
  coverSubtext?: string;
  status: "available" | "coming-soon";
  year: string;
  language: string;
  tracks: Track[];
  teaserVerse?: {
    text: string;
    attribution?: string;
  };
  closingNote?: string;
}

export const albums: Album[] = [
  {
    slug: "hanuman-bhajan",
    title: "Hanuman Bhajan",
    subtitle: "Volume I",
    description:
      "A devotional album in praise of Lord Hanuman — strength, surrender, and the silence between prayers.",
    longDescription:
      "This collection draws from the ancient tradition of Hanuman bhajans — verses that carry the weight of devotion and the lightness of faith. Each bhajan is an act of surrender. Each word, a step closer to the strength that comes from letting go.",
    coverSymbol: "ॐ",
    coverSubtext: "जय हनुमान",
    status: "coming-soon",
    year: "2026",
    language: "Hindi",
    tracks: [{ title: "Track details arriving soon" }],
    teaserVerse: {
      text: "मन की शक्ति, तन की शक्ति\nसब जग जाने हनुमान।",
    },
    closingNote:
      "Some offerings take time to prepare.\nThis one is being made with devotion.",
  },
];

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((a) => a.slug === slug);
}

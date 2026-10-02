import { blogPosts, type BlogPost } from "@/data/blogPosts";

export function getPostWordCount(post: BlogPost): number {
  let count = post.title.split(/\s+/).length + post.excerpt.split(/\s+/).length;
  for (const section of post.sections) {
    if (section.heading) count += section.heading.split(/\s+/).length;
    for (const paragraph of section.body) {
      count += paragraph.split(/\s+/).filter(Boolean).length;
    }
  }
  return count;
}

export function calculateReadingTime(post: BlogPost): number {
  const words = getPostWordCount(post);
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllCategories(): string[] {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  return categories.sort();
}

export function getAdjacentPosts(currentSlug: string): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const currentIndex = blogPosts.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined,
  };
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return blogPosts.slice(0, limit);

  // Match same category first, excluding current post
  const sameCategory = blogPosts.filter(
    (p) => p.category === current.category && p.slug !== currentSlug
  );

  const otherCategory = blogPosts.filter(
    (p) => p.category !== current.category && p.slug !== currentSlug
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

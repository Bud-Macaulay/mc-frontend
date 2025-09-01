import Fuse from "fuse.js";
import data from "../data/learn-manifest.json";

/**
 * Reusable search function for video/section entries
 * @param {Array} dataArray - Array of entries
 * @param {string} query - search term
 */
export function search(dataArray, query) {
  if (!query) return [];

  const fuse = new Fuse(dataArray, {
    // Include nested fields
    keys: [
      "title",
      "description",
      "category",
      "type",
      "slug",
      "speakers.first_name",
      "speakers.last_name",
      "speakers.title",
    ],
    threshold: 0.3, // tweak for fuzzy sensitivity
    includeScore: true,
  });

  // Return only matched items
  return fuse.search(query).map((result) => result.item);
}

// Export the raw data for client use
export { data };

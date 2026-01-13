/**
 * Travel Time Helper (Stub)
 *
 * In a real system, this would call a maps API (Google Maps, Mapbox, etc.)
 * to calculate actual travel time between locations.
 *
 * For this exercise, it returns a fixed value.
 * Use this helper for Extension 1 if you have time.
 */

/**
 * Returns travel time in minutes between two locations.
 *
 * @param {string} fromLocation - Starting location name
 * @param {string} toLocation - Destination location name
 * @returns {number} Travel time in minutes
 *
 * @example
 * getTravelTime("Grand Palace", "Wat Pho");
 * // => 30
 */
function getTravelTime(fromLocation, toLocation) {
  // Stub: returns fixed 30 minutes for any journey
  // In production, this would call an external API
  return 30;
}

// ES Module export
export { getTravelTime };

// CommonJS export (uncomment if using Node.js require)
// module.exports = { getTravelTime };

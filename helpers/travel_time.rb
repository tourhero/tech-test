# Travel Time Helper (Stub)
#
# In a real system, this would call a maps API (Google Maps, Mapbox, etc.)
# to calculate actual travel time between locations.
#
# For this exercise, it returns a fixed value.
# Use this helper for Extension 1 if you have time.

module TravelTime
  # Returns travel time in minutes between two locations
  #
  # @param from_location [String] Starting location name
  # @param to_location [String] Destination location name
  # @return [Integer] Travel time in minutes
  #
  # Example:
  #   TravelTime.get_travel_time("Grand Palace", "Wat Pho")
  #   # => 30
  #
  def self.get_travel_time(from_location, to_location)
    # Stub: returns fixed 30 minutes for any journey
    # In production, this would call an external API
    30
  end
end

# Alternative functional style:
def get_travel_time(from_location, to_location)
  30
end

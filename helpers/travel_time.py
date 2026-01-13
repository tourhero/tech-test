"""
Travel Time Helper (Stub)

In a real system, this would call a maps API (Google Maps, Mapbox, etc.)
to calculate actual travel time between locations.

For this exercise, it returns a fixed value.
Use this helper for Extension 1 if you have time.
"""


def get_travel_time(from_location: str, to_location: str) -> int:
    """
    Returns travel time in minutes between two locations.

    Args:
        from_location: Starting location name
        to_location: Destination location name

    Returns:
        Travel time in minutes

    Example:
        >>> get_travel_time("Grand Palace", "Wat Pho")
        30
    """
    # Stub: returns fixed 30 minutes for any journey
    # In production, this would call an external API
    return 30

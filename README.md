# Itinerary Feasibility Checker

## Background

At TourHero, we help travelers plan and customize trip itineraries. Each itinerary consists of multiple days, and each day contains scheduled activities (tours, meals, transfers, etc.).

In production, our `ActivityScheduler` system handles conflict detection, auto-rescheduling, and supports constraints like preferred time slots, activity dependencies, and dynamic travel time calculations. It's a core part of our trip planning infrastructure.

For this exercise, you'll build a version of this system.

## Your Task

Design and implement a **feasibility checking system** that determines whether a travel itinerary can actually be completed as scheduled.

**Time: 30-40 minutes**

### Requirements

Your system should analyze itinerary data and determine feasibility. You have access to:

- Each activity's `start_time`, `duration_minutes`, and `location`
- Each day's `accommodation` with a `location` (where travelers begin their morning)
- A `get_travel_time(from, to)` helper function that returns travel time in minutes
- Travelers depart their accommodation at **07:00** each morning

The system should handle the various scenarios present in the test data and produce well-structured output indicating feasibility status and any issues found.

Helper stubs for the travel time function are provided in `helpers/` for Ruby, Python, and JavaScript.

### Input

The input is a JSON file containing multiple itineraries. See `data/itineraries.json`.

```json
{
  "itineraries": [
    {
      "id": "thailand_adventure",
      "name": "Thailand Adventure",
      "days": [
        {
          "day_number": 1,
          "accommodation": {
            "name": "Bangkok Riverside Hotel",
            "location": "Riverside, Bangkok"
          },
          "activities": [
            {
              "id": "act_1",
              "name": "Grand Palace Tour",
              "start_time": "09:00",
              "duration_minutes": 180,
              "location": "Grand Palace"
            }
          ]
        }
      ]
    }
  ]
}
```

### Output

Your system should produce clear, well-structured output for each itinerary indicating:
- The itinerary being checked
- Whether it's feasible
- If not feasible, detailed information about the issues found

The output format is up to you - design something appropriate for the problem.

### Test Data

The `data/itineraries.json` file contains 4 itineraries representing different scenarios. Your system should correctly handle all of them.

## Evaluation Criteria

We'll be evaluating:

- **Correctness**: Does the system correctly identify feasibility issues?
- **Code structure**: Is the solution well-organized and maintainable?
- **Problem solving**: How do you approach the problem?
- **Output quality**: Are issues communicated clearly?
- **Technical decisions**: Can you explain and justify your design choices?

## Extensions (if time permits)

If you complete the core requirements early, try one of these extensions using the activity catalog in `data/activity_db.json`:

### 1. Suggest Replacement Activities

For activities that cause feasibility issues, find a replacement from the catalog that would make the schedule work.

### 2. Suggest Similar Replacements

Same as above, but the replacement should be similar to the original activity (consider the `type` and `tags` fields in the catalog).

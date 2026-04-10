/** Order of service cards on the home page */
export const SERVICE_KEYS = [
  "location_research",
  "equipment",
  "drone",
  "staffing",
  "fixers",
  "logistics",
  "customs",
  "filming_permits",
  "lodging",
  "locations",
  "transport",
  "security",
  "visas",
  "casting",
  "catering",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

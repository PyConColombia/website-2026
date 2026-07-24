export type ScheduleRoomLocation = {
  name: string;
  lat: number;
  lng: number;
};

/** Campus destinations for schedule rooms (Universidad EAFIT, Medellín). */
const FUNDADORES: ScheduleRoomLocation = {
  name: "Main Auditorium (Fundadores)",
  lat: 6.200277,
  lng: -75.5788236,
};

/** https://www.google.com/maps/dir//6.2016024,-75.5783229 */
const BLOQUE_38: ScheduleRoomLocation = {
  name: "Bloque 38",
  lat: 6.2016024,
  lng: -75.5783229,
};

/** https://www.google.com/maps/dir//6.2012795,-75.5788686 */
const BLOQUE_35: ScheduleRoomLocation = {
  name: "Bloque 35",
  lat: 6.2012795,
  lng: -75.5788686,
};

const scheduleRoomLocations: Record<string, ScheduleRoomLocation> = {
  "Main Auditorium (Fundadores)": FUNDADORES,
  "Auxiliar Room (101 - Bloque 38)": {
    ...BLOQUE_38,
    name: "Auxiliar Room (101 - Bloque 38)",
  },
  "Auxiliar Room (110 - Bloque 38)": {
    ...BLOQUE_38,
    name: "Auxiliar Room (110 - Bloque 38)",
  },
};

for (let room = 1; room <= 15; room += 1) {
  const name = `Room ${room} - Workshops`;
  scheduleRoomLocations[name] = { ...BLOQUE_35, name };
}

export function getScheduleRoomLocation(
  room: string,
): ScheduleRoomLocation | undefined {
  return scheduleRoomLocations[room];
}

export function getScheduleRoomMapEmbedUrl(location: ScheduleRoomLocation) {
  const query = `${location.lat},${location.lng}`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
}

export function getScheduleRoomDirectionsUrl(
  location: ScheduleRoomLocation,
  origin?: { lat: number; lng: number },
) {
  const destination = `${location.lat},${location.lng}`;

  if (origin) {
    return `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destination}`;
  }

  return `https://www.google.com/maps/dir//${destination}`;
}

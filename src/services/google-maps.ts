/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves an embedded Google Maps URL for a given location.
 *
 * @param location The location for which to retrieve the embedded map URL.
 * @returns A promise that resolves to a string containing the embedded map URL.
 */
export async function getGoogleMapsEmbedURL(location: Location): Promise<string> {
  // TODO: Implement this by calling the Google Maps API.

  return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6767550341673!2d90.39332647443762!3d23.79578228624571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70ede89a1bd%3A0x40811993c8f8c693!2sUttara%20Sector%2013%20Rd%2014%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1719219941229!5m2!1sen!2sbd';
}

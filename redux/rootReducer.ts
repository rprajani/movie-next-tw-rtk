/* Instruments */
import { listingApi } from "@/services/ListingServices/movieListing";

export const reducer = {
  [listingApi.reducerPath]: listingApi.reducer,
}

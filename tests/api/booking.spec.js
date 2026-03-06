import { test, expect } from '@playwright/test';
import { BookingAPI } from '../../api/booking.api.js';
import { bookingData, updatedBookingData } from '../../data/booking.data.js';
import { authData } from '../../data/auth.data.js';

test.describe('Restful Booker API Lifecycle', () => {

  test('Create → Get → Update → Delete Booking', async ({ request }) => {

    const bookingAPI = new BookingAPI(request);

    // CREATE TOKEN
    const tokenResponse = await bookingAPI.createToken(authData);
    expect(tokenResponse.status()).toBe(200);

    const token = (await tokenResponse.json()).token;

    console.log("Token:", token);

    // CREATE BOOKING
    const createBookingResponse = await bookingAPI.createBooking(bookingData);
    expect(createBookingResponse.status()).toBe(200);

    const bookingId = (await createBookingResponse.json()).bookingid;

    console.log("Booking ID:", bookingId);

    // GET BOOKING
    const getBookingResponse = await bookingAPI.getBooking(bookingId);
    expect(getBookingResponse.status()).toBe(200);

    const bookingResponse = await getBookingResponse.json();
    expect(bookingResponse.firstname).toBe(bookingData.firstname);


    // UPDATE BOOKING
    const updateResponse = await bookingAPI.updateBooking(
      bookingId,
      token,
      updatedBookingData
    );

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();
    expect(updateBody.lastname).toBe(updatedBookingData.lastname);


    // // DELETE BOOKING
    // const deleteResponse = await bookingAPI.deleteBooking(bookingId, token);
    // expect(deleteResponse.status()).toBe(201);

  });

});
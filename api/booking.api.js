export class BookingAPI {

  constructor(request) {
    this.request = request;
  }

  async createToken(data) {
    return await this.request.post('/auth', {
      data
    });
  }

  async createBooking(data) {
    return await this.request.post('/booking', {
      data
    });
  }

  async getBooking(id) {
    return await this.request.get(`/booking/${id}`);
  }

  async updateBooking(id, token, data) {
    return await this.request.put(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      },
      data
    });
  }

  async deleteBooking(id, token) {
    return await this.request.delete(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });
  }

}
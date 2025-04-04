export async function getAllCars() {
  const response = await fetch(
    `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_CARS_ENDPOINT}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.cars;
}

export const getAllComments = async () => {
  const response = await fetch(
    `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_COMMENTS_ENDPOINT}`,

    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.Comments;
};

export const getAllBookings = async () => {
  const response = await fetch(
    `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_BOOKING_ENDPOINT}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.Booking;
};

export const getBookById = async (_id: string | number | undefined) => {
  const response = await fetch(
    `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_BOOKING_ENDPOINT}/${_id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.Booking;
};

export async function getCarById(_id: string | number | undefined) {
  const response = await fetch(
    `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_CARS_ENDPOINT}/${_id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.car;
}

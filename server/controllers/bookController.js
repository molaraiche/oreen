const Booking = require("../model/bookModel");
const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;

const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendWhatsAppNotification = async (phone, status) => {
  try {
    const message =
      status === "approved"
        ? "لقد تم قبول طلبكم لكراء السيارة رقم 8 المرجو الاتصال بينا في مدة زمنية اقل من 4 ساعات"
        : "Your booking request has been rejected. Please contact us for more details.";

    const response = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${phone}`,
      body: message,
    });

    console.log("WhatsApp message sent:", response.sid);
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
};

const showBooks = async (req, res) => {
  try {
    const response = await Booking.find().exec();
    res.status(200).json({ Booking: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Bookings fetching",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Booking.findById(id).exec();
    res.status(200).json({ Booking: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Bookings fetching",
      error: error.message,
    });
  }
};
const demandBook = async (req, res) => {
  try {
    const { carName, name, phone, from, to, message } = req.body;
    if (!from || !to) {
      return res
        .status(400)
        .json({ message: "Both 'from' and 'to' dates are required." });
    }
    const fromDate = new Date(from);
    const toDate = new Date(to);
    if (toDate < fromDate) {
      return res
        .status(400)
        .json({ message: "'To' date cannot be before 'From' date." });
    }
    const newDemand = new Booking({
      carName,
      name,
      phone,
      from,
      to,
      message,
      status: "pending",
    });
    await newDemand.save();
    res
      .status(201)
      .json({ message: "Booking request submitted and pending approval." });
  } catch (error) {
    res.status(500).json({
      message: "There was an error submitting the booking request.",
      error: error.message,
    });
  }
};
const updateBookingStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (status === "approved") {
      await sendWhatsAppNotification(booking.phone, status);
    }
    res.json({ message: `Booking ${status}`, booking });
  } catch (error) {
    res.status(500).json({
      message: "Error updating booking status",
      error: error.message,
    });
  }
};

const deletedBookings = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Booking.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "The selected book has been deleted", response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in the operation to delete the selected book",
      error: error.message,
    });
  }
};

module.exports = {
  showBooks,
  getBookById,
  demandBook,
  updateBookingStatus,
  deletedBookings,
};

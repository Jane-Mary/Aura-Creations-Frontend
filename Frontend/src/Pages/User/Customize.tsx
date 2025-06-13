import { useState, useEffect } from "react";
import Navbar from "../../reusable-components/navbar";
import { Box, Input, Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import axios from "axios";

interface EventPlanner {
  id: string;
  name: string;
}

const Custom = () => {
  const [eventPlanners, setEventPlanners] = useState<EventPlanner[]>([]);
  const [eventData, setEventData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userNumber: "",
    theme: "",
    date: "",
    size: "",
    location: "",
    status: "",
    eventPlannerId: "",
  });

  // Fetch event planners
  useEffect(() => {
    const fetchEventPlanners = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/event-planners"
        );
        setEventPlanners(response.data);
      } catch (error) {
        console.error("Error fetching event planners", error);
      }
    };
    fetchEventPlanners();
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/events/create",
        eventData
      );
      console.log("Event Customised", response.data);
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  return (
    <>
      <div className="bg-white h-max ">
        <Navbar />
        <Box
          as="form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center h-screen light"
        >
          <div className="w-full max-w-2xl bg-[#e0dfdf] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Customization Form
            </h2>

            <div className="flex flex-row justify-between">
              <FormControl>
                <FormLabel className="text-black">Name</FormLabel>
                <Input
                  className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                  type="text"
                  name="userName"
                  value={eventData.userName}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel className="text-black">Email</FormLabel>
                <Input
                  className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                  type="email"
                  name="userEmail"
                  value={eventData.userEmail}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </div>

            <div className="flex flex-row justify-between">
              <FormControl>
                <FormLabel className="text-black">Password</FormLabel>
                <Input
                  className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                  type="password"
                  name="userPassword"
                  value={eventData.userPassword}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel className="text-black">Number</FormLabel>
                <Input
                  className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                  type="text"
                  name="userNumber"
                  value={eventData.userNumber}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </div>

            <FormControl>
              <FormLabel className="text-black">Theme</FormLabel>
              <Input
                className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                type="text"
                name="theme"
                value={eventData.theme}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel className="text-black">Date</FormLabel>
              <Input
                className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel className="text-black">Size</FormLabel>
              <select
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 w-full focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                name="size"  
                value={eventData.size} 
                onChange={handleChange}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Over 100+">Over 100+</option>
              </select>
            </FormControl>

            <FormControl>
              <FormLabel className="text-black">Location</FormLabel>
              <Input
                className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel className="text-black">Status</FormLabel>
              <Input
                className="bg-gray-100 text-black border-black  rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                type="text"
                name="status"
                value={eventData.status}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel className="text-black">Event Planner</FormLabel>
              <select
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 w-full focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="product"
                name="eventPlannerId"
                value={eventData.eventPlannerId}
                onChange={handleChange}
                required
              >
                <option value="">Select an event planner</option>
                {eventPlanners.map((planner) => (
                  <option key={planner.id} value={planner.id}>
                    {planner.name}
                  </option>
                ))}
              </select>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Customize Event
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};


export default Custom;

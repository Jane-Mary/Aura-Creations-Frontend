import { useState, useEffect } from "react"
import Navbar from "../../reusable-components/navbar"
import { Box, Input, Button, Select } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,

} from '@chakra-ui/form-control';

const Custom = () => {

        const [eventPlanners, setEventPlanners] = useState([]);
        const [eventData, setEventData] = useState({
          theme: '',
          date: '',
          size: '',
          location: '',
          status: '',
          eventPlannerId: '',
        });
      
        // Fetch event planners
        useEffect(() => {
          const fetchEventPlanners = async () => {
            const response = await fetch('/api/event-planners');
            const data = await response.json();
            setEventPlanners(data);
          };
          fetchEventPlanners();
        }, []);
      
        const handleChange = (e: { target: { name: any; value: any; }; }) => {
          const { name, value } = e.target;
          setEventData({ ...eventData, [name]: value });
        };
      
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          try {
            const response = await fetch('/api/events', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(eventData),
            });
            const result = await response.json();
            console.log('Event customized:', result);
          } catch (error) {
            console.error('Error customizing event:', error);
          }
        };
      

    return (
        <>
        <Navbar/>

        <Box as="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <Input
          name="theme"
          value={eventData.theme}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Size</FormLabel>
        <Input
          name="size"
          value={eventData.size}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Status</FormLabel>
        <Input
          name="status"
          value={eventData.status}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel>Event Planner</FormLabel>
        {/* <Select
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
        </Select> */}
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Customize Event
      </Button>
    </Box>
        </>
    )
}

export default Custom
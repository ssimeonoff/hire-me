import React, { useState, useEffect } from 'react';

const TimeSelector = ({selectedTime, setSelectedTime}) => {
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    const generateTimeOptions = () => {
      const currentTime = new Date();
      const endTime = new Date();
      endTime.setHours(18, 30, 0, 0); // Set end time to 18:00:00
      
      const timeOptions = [];

      // Ensure that currentTime is no less than 7:00
      if (currentTime.getHours() < 7) {
        currentTime.setHours(7, 0, 0, 0);
      } else {
        // Round up to the nearest 30 minutes
        currentTime.setMinutes(
        currentTime.getMinutes() + (30 - (currentTime.getMinutes() % 30))
        );
      }

      while (currentTime <= endTime) {
        const formattedTime = currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });

        timeOptions.push({
          label: formattedTime,
          value: formattedTime,
        });

        currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment by 30 minutes
      }

      setOptions(timeOptions);
    };

    generateTimeOptions();
  }, []);

  return (
    <div>
      <label>pickup time: </label>
      <select
        onChange={(e) => setSelectedTime(e.target.value)}
        value={selectedTime || ''}
        required
      > 
        <option value="" disabled hidden>Select Time</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
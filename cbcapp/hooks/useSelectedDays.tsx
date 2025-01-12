import React from "react";

export const useSelectedDays = () => { 

      const [selectedDays, setSelectedDays] = React.useState<string[]>([]);
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSelectedDays(
          selectedDays.includes(value)
            ? selectedDays.filter((day) => day !== value)
            : [...selectedDays, value]
        );
      };

        return { selectedDays, handleChange };
}

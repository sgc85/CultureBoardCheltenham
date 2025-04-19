type datetime = {
    seconds: number,
    nanoseconds: number
  }
  
export type eventType = {
    id: string;
    cost: number;
    datetime: datetime;
    duration: string;
    maxAge: number;
    minAge: number;
    eventName: string;
    description: string;
    location: string;
    organiser: string;
  };
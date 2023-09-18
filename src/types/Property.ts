export type PropertyType = {
  amenities: number[];
  contactName: string;
  phoneNumber: string;
  physicalAddress: string;
  propertyName: string;
  availableDates: string;
  buildings: [
    {
      roomType: string;
      roomName: string;
      beds: [
        {
          quantity: number;
          name: string;
        }
      ];
    }
  ];
};

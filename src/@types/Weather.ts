export type Weather = {
  id?: number;
  name?: string;
  cod?: number;
  weather?: [
    {
      main?: string;
      description?: string;
      icon?: string;
    }
  ];
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
  };
  wind?: {
    speed?: number;
    deg?: number;
  };
  rain?: {
    "1h"?: number;
  };

  sys?: {
    country?: string;
  };
};

interface Sun {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
}

interface Moon {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
    Phase: string;
    Age: number;
}

interface Temperature {
    Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
}

interface RealFeelTemperature {
    Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    };
    Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    };
}

interface RealFeelTemperatureShade {
    Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    };
    Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    };
}

interface DegreeDaySummary {
    Heating: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Cooling: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
}

interface AirAndPollen {
    Name: string;
    Value: number;
    Category: string;
    CategoryValue: number;
    Type?: string;
}

interface DayInfo {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    WindGust: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    HoursOfSnow: number;
    HoursOfIce: number;
    CloudCover: number;
    Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
}

interface NightInfo {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    WindGust: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    HoursOfSnow: number;
    HoursOfIce: number;
    CloudCover: number;
    Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
    SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
    };
}

export interface Day {
    Date: string;
    EpochDate: number;
    Sun: Sun;
    Moon: Moon;
    Temperature: Temperature;
    RealFeelTemperature: RealFeelTemperature;
    RealFeelTemperatureShade: RealFeelTemperatureShade;
    HoursOfSun: number;
    DegreeDaySummary: DegreeDaySummary;
    AirAndPollen: AirAndPollen[];
    Day: DayInfo;
    Night: NightInfo;
}


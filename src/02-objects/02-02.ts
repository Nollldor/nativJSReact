export type StreetType = {
    title: string
}

export type AddressHouseType = {
    number: number,
    street: StreetType
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressHouseType
}

export type BuildingAddressType = {
    street: StreetType
}

export type BuildingType = {
    type: "HOSPITAL" | "FIRE-STATION",
    budget: number,
    staffCount: number,
    address: BuildingAddressType
}

export type CityType = {
    title: string,
    citizensNumber: number,
    governmentBuildings: Array<BuildingType>,
    houses: Array<HouseType>
}
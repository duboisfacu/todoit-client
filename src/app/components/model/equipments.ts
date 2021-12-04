export interface Equipments  {
  filter: any;
  [index: number]: {
  equipmentId: number,
  mark: string,
  model: string,
  failure: string,
  travelEquipmentDTOs: [
    {
      id: number,
      operationDate: string,
      observation: string,
      cadete: string,
      operator: {
        id: number,
        email: string,
        fullName: string,
        address: string,
        cellPhone: string
      },
      equipment: string,
      statusTravel: number
    }]}}
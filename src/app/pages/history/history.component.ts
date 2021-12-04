import {
  Component,
  OnInit
} from '@angular/core';
import {
  Equipments
} from 'src/app/components/model/equipments';
import {
  SignUpService
} from 'src/app/services/sign-up.service';
import {
  FormControl
} from '@angular/forms';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  onChange(search: string) {

    const filteredData = this.list.filter((value: {
      mark: string | null;model: string | null;failure: string | null;travelEquipmentDTOs: [{
        operationDate: string;statusTravel: string;statusEquipment: string
      }]
    }) => {
      const searchStr = search.toLowerCase()
      let dateMatches = false
      let markMatches = false
      let modelMatches = false
      let statusTravelMatches = false
      let statusEquipmentMatches = false

      if (value.mark || value.model) {
        dateMatches = value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].operationDate!.substring(0, 10).includes(searchStr);
        markMatches = value.mark!.toLowerCase().includes(searchStr);
        modelMatches = value.model!.toLowerCase().includes(searchStr);
        statusTravelMatches = value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusTravel!.toLowerCase().includes(searchStr);
        statusEquipmentMatches = value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusEquipment!.toLowerCase().includes(searchStr);

      }
      if (search != "") {
        this.cross = true
      } else {
        this.cross = false
      }
      return markMatches || modelMatches || dateMatches || statusTravelMatches || statusEquipmentMatches


    });
    this.list2 = filteredData
    return true
  }

  onDelete(search: string) {
    const filteredData = this.list.filter((value: {
      mark: string
    }) => {
      const searchStr = search
      let clearMatches
      if (value.mark || value.mark) {
        clearMatches = value.mark.toLowerCase().includes(searchStr);
      }
      this.list2 = searchStr
      this.cross = false
      return clearMatches
    });
    this.list2 = filteredData
    return true
  }

  title = 'client';
  opened = true
  toggleSidebar() {
    this.opened = !this.opened;
  }

  public list!: Equipments
  public list2! : any
  public cross!: boolean
  public textInputControl: FormControl = new FormControl();


  constructor(private rq: SignUpService) {}

  ngOnInit(): void {
    this.rq.status((JSON.parse(localStorage.getItem('token') || '{}')))
      .subscribe((respo: Equipments) => {
        this.list = respo


        this.list2 = this.list.filter((value: {
          mark: string | null;model: string | null;failure: string | null;travelEquipmentDTOs: [{
            operationDate: string;statusTravel: string;statusEquipment: string
          }]
        }) => {


          let statusTravelNumber = parseInt(value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusTravel)
          let statusEquipmentNumber = parseInt(value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusTravel)

          value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusTravel = statusTravelNumber < 3 || (statusTravelNumber > 5 && statusTravelNumber < 8) || statusTravelNumber === 10 ? 'Pendiente' :
            statusTravelNumber == 3 ? 'En curso' : 'Entregado'

          value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusEquipment = statusEquipmentNumber > 4 && statusEquipmentNumber < 9 ? 'A reparar' : 'Reparado'

          let dateMatches = false
          let markMatches = false
          let modelMatches = false
          let statusTravelMatches = false
          let statusEquipmentMatches = false
          if (value.mark || value.model) {
            dateMatches = value.travelEquipmentDTOs[0].operationDate!.substring(0, 10).includes("");
            markMatches = value.mark!.toLowerCase().includes("");
            modelMatches = value.model!.toLowerCase().includes("");
            statusTravelMatches = value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusTravel!.includes("");
            statusEquipmentMatches = value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1].statusEquipment!.includes("");
          }
          return markMatches || modelMatches || dateMatches || statusTravelMatches || statusEquipmentMatches
        })
      })
  }

}
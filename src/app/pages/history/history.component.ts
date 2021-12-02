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
  Equipment
} from 'src/app/components/model/equipment';
import {
  filter
} from 'rxjs/operators';
import {
  FormControl
} from '@angular/forms';
import {
  isNull
} from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  onChange(search: string) {

    const filteredData = this.list.filter((value: {
      mark: string | null;model: string | null;failure: string | null;travelEquipmentDTOs: {
        0: {
          operationDate: string;statusTravel: string
        }
      }
    }) => {
      const searchStr = search.toLowerCase()
      // const statusTravelNumber : number = parseInt(value.travelEquipmentDTOs[0].statusTravel)
      // const status = () => (
      //   statusTravelNumber > 3 || (statusTravelNumber  > 5 && statusTravelNumber < 10) || statusTravelNumber  === 5 ? 'Pendiente'
      //   : statusTravelNumber == 3 || statusTravelNumber == 8? 'En curso' : 'Entregado')

      // const travel = () => (statusTravelNumber > 4 && statusTravelNumber <9 ? 'A reparar' : 'Reparado')

      // console.log(value.travelEquipmentDTOs[0].statusTravel)
      // const statusMatches = value.travelEquipmentDTOs[0].statusTravel(searchStr); 
      let failureMatches = false
      let dateMatches = false
      let markMatches = false
      let modelMatches = false
      if (value.mark || value.model) {
        // failureMatches = value.failure!.toLowerCase().includes(searchStr) 
        dateMatches = value.travelEquipmentDTOs[0].operationDate!.substring(0, 10).includes(searchStr);
        markMatches = value.mark!.toLowerCase().includes(searchStr);
        modelMatches = value.model!.toLowerCase().includes(searchStr);
      }
      if (search != "") {
        this.cross = true
      } else {
        this.cross = false
      }
      return markMatches || modelMatches || dateMatches

    });
    this.list2 = filteredData
    return true
  }

  onDelete(search: any) {
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
  public list2!: any
  public cross!: boolean
  // public status !: number
  public textInputControl: FormControl = new FormControl();


  constructor(private rq: SignUpService) {}

  ngOnInit(): void {
    this.rq.status((JSON.parse(localStorage.getItem('token') || '{}')))
      .subscribe((respo: Equipments) => {
        this.list = respo
        this.list2 = this.list.filter((value: {
          mark: string | null;model: string | null;failure: string | null;travelEquipmentDTOs: {
            0: {
              operationDate: string;statusTravel: string
            }
          }
        }) => {
          let dateMatches = false
          let markMatches = false
          let modelMatches = false
          if (value.mark || value.model) {
            dateMatches = value.travelEquipmentDTOs[0].operationDate!.substring(0, 10).includes("");
            markMatches = value.mark!.toLowerCase().includes("");
            modelMatches = value.model!.toLowerCase().includes("");
          }
          return markMatches || modelMatches || dateMatches
        })

      })
  }

}
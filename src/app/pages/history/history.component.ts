import { Component, OnInit } from '@angular/core';
import { Equipments } from 'src/app/components/model/equipments';
import { SignUpService } from 'src/app/services/sign-up.service';
import { FormControl } from '@angular/forms';
import { Equipment } from 'src/app/components/model/equipment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
})
export class HistoryComponent implements OnInit {
  onClick(travelId: number, cadeteId: number) {
    this.rq.postTravel(travelId, cadeteId).subscribe((resp) => {
      this.onLoad();
    });
  }

  onChange(search: string) {
    const filteredData = this.list.filter(
      (value: {
        mark: string | null;
        model: string | null;
        failure: string | null;
        travelEquipmentDTOs: [
          {
            operationDate: string;
            statusTravel: string;
            statusEquipment: string;
          }
        ];
      }) => {
        const searchStr = search.toLowerCase();
        let dateMatches = false;
        let markMatches = false;
        let modelMatches = false;
        let statusTravelMatches = false;
        let statusEquipmentMatches = false;

        if (value.mark || value.model) {
          dateMatches = value.travelEquipmentDTOs[
            value.travelEquipmentDTOs.length - 1
          ]
            .operationDate!.substring(0, 10)
            .includes(searchStr);
          markMatches = value.mark!.toLowerCase().includes(searchStr);
          modelMatches = value.model!.toLowerCase().includes(searchStr);
          statusTravelMatches = value.travelEquipmentDTOs[
            value.travelEquipmentDTOs.length - 1
          ]
            .statusTravel!.toLowerCase()
            .includes(searchStr);
          statusEquipmentMatches = value.travelEquipmentDTOs[
            value.travelEquipmentDTOs.length - 1
          ]
            .statusEquipment!.toLowerCase()
            .includes(searchStr);
        }
        if (search != '') {
          this.cross = true;
        } else {
          this.cross = false;
        }
        return (
          markMatches ||
          modelMatches ||
          dateMatches ||
          statusTravelMatches ||
          statusEquipmentMatches
        );
      }
    );
    this.list2 = filteredData;
    return true;
  }

  onDelete(search: string) {
    const filteredData = this.list.filter((value: { mark: string }) => {
      const searchStr = search;
      let clearMatches;
      if (value.mark || value.mark) {
        clearMatches = value.mark.toLowerCase().includes(searchStr);
      }
      this.list2 = searchStr;
      this.cross = false;
      return clearMatches;
    });
    this.list2 = filteredData;
    return true;
  }

  title = 'client';
  opened = true;
  toggleSidebar() {
    this.opened = !this.opened;
  }

  public haveTravels = true;
  public loading = true;
  public list!: any;
  public list2!: any;
  public cross!: boolean;
  public textInputControl: FormControl = new FormControl();

  constructor(private rq: SignUpService) {}

  onLoad() {
    this.rq
      .status(JSON.parse(localStorage.getItem('token') || '{}'))
      .subscribe((respo: Equipments) => {
        this.list = respo;
        this.loading = false;

        this.list2 = this.list.sort(function (a: Equipment, b: Equipment) {
          return (
            Date.parse(
              a.travelEquipmentDTOs[a.travelEquipmentDTOs.length - 1]
                .operationDate
            ) -
            Date.parse(
              b.travelEquipmentDTOs[b.travelEquipmentDTOs.length - 1]
                .operationDate
            )
          );
        });

        this.list2 = this.list.filter(
          (value: {
            mark: string | null;
            model: string | null;
            failure: string | null;
            creationDate: string;
            travelEquipmentDTOs: [
              {
                operationDate: string;
                statusTravel: string;
                statusEquipment: string;
                statusTravelNumber: number;
                cadete: { id: number };
              }
            ];
          }) => {
            let statusTravelNumber = parseInt(
              value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1]
                .statusTravel
            );
            let statusEquipmentNumber = parseInt(
              value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1]
                .statusTravel
            );
            value.travelEquipmentDTOs[
              value.travelEquipmentDTOs.length - 1
            ].statusTravelNumber = statusEquipmentNumber;
            value.travelEquipmentDTOs[
              value.travelEquipmentDTOs.length - 1
            ].statusTravel =
              statusTravelNumber == 1
                ? 'Retiro pendiente'
                : statusTravelNumber == 2
                ? 'Retiro asignado'
                : statusTravelNumber == 3
                ? 'Pendiente de entrega'
                : statusTravelNumber == 4
                ? 'En todoit'
                : statusTravelNumber == 5
                ? 'En todoit'
                : statusTravelNumber == 6
                ? 'Cadete asignado'
                : statusTravelNumber == 7
                ? 'En viaje'
                : statusTravelNumber == 8
                ? 'En tu posesión'
                : 'Completado';

            value.travelEquipmentDTOs[
              value.travelEquipmentDTOs.length - 1
            ].statusEquipment =
              statusEquipmentNumber > 4 && statusEquipmentNumber < 10
                ? 'Reparado'
                : 'A reparar';

            return (
              value.travelEquipmentDTOs[value.travelEquipmentDTOs.length - 1]
                .statusTravelNumber === 9
            );
          }
        );
        this.haveTravels = this.list2.length > 0 ? true : false;
      });
  }

  ngOnInit(): void {
    this.onLoad();
  }
}

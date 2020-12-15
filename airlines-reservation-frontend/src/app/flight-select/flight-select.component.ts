import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from 'app/flight'
import { FlightPreference } from 'app/flight-preference';
import { FlightService } from 'app/flight.service';
import { ReservationService } from 'app/reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {
  flights: Flight[]
  selectedFlightId: number
  selectedFlight: Observable<Flight>
  flightPreference: FlightPreference
  userId = 67

  constructor(private reservationService: ReservationService, private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.flights = JSON.parse(localStorage.getItem('flightsByPreference'))
    this.flightPreference = JSON.parse(localStorage.getItem('flightPreference'))
    this.selectedFlight = this.flightService.getFlightById(this.selectedFlightId)
  }

  selectFlight(flight: Flight) {
    this.selectedFlightId = flight.id
    localStorage.setItem('flightId', '' + flight.id)
    localStorage.setItem('flightObject', JSON.stringify(flight))
    localStorage.setItem('userId', '' + this.userId) 
    // this.router.navigate(['/flights/add-passengers'])
    this.router.navigate(['/flights/select-seats'])

    // if(localStorage.getItem('userID')) {
      // this.reservationService.makeReservation(65, id, this.selectedFlightId.cabinClass, )
    // }
    
  }

}

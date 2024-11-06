import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';


@Component({
  selector: 'app-serie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  series: Serie[] = [];
  promedioSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit() {

    this.serieService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.promedioSeasons = this.calcularPromedioTemporadas();
    });
  }

  calcularPromedioTemporadas(): number {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }
}

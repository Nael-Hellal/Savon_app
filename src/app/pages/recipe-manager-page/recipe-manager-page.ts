import { Component, OnInit } from '@angular/core';
import { Recette } from '../../src/app/models/recette.model';
import { RecetteService } from '../../services/recette.service.ts';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

@Component({
  selector: 'app-recipe-manager-page',
  imports: [CommonModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage implements OnInit {
  public recettes: Recette[] = []
  constructor(private recetteService: RecetteService) { }
  ngOnInit(): void {
    this.chargerRecettes();
  }
  chargerRecettes(): void {
    this.recetteService.getRecettes().subscribe(data => {
      this.recettes = data;
      // On attend un court instant que le DOM se mette à jour avec le @for
      setTimeout(() => {
        this.recettes.forEach(r => this.initChart(r));
      }, 100);
    });
  }
  supprimerRecette(id: number): void {
    if (confirm("Supprimer cette recette ?")) {
      this.recetteService.deletteRecette(id).subscribe(() =>
        this.chargerRecettes());
    }
  }
  public recetteSelectionnee: Recette | null = null;
  /**
  * Définit la recette sélectionnée pour l'affichage des détails
  */
  ouvrirModale(recette: Recette): void {
    this.recetteSelectionnee = recette;
  }
  /**
  * Réinitialise la sélection à la fermeture
  */
  fermerModale(): void {
    this.recetteSelectionnee = null;
  }
  initChart(recette: Recette): void {
    const ctx = document.getElementById(`chart-${recette.id}`) as
      HTMLCanvasElement;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: recette.resultats.map(res => res.caracteristique.nom),
        datasets: [{
          label: 'Scores',
          data: recette.resultats.map(res => res.score),
          fill: true,
          backgroundColor: 'rgb(0, 183, 255)',
          borderColor: 'rgb(0, 51, 255)',
          pointBackgroundColor: 'rgb(0, 180, 0)',
          pointBorderColor: 'rgb(0, 180, 0)',
          pointHoverBackgroundColor: 'rgb(255, 255, 255)',
          pointHoverBorderColor: 'rgb(0, 180, 0)'
        }]
      },
      options: {
        elements: { line: { borderWidth: 2 } },
        scales: {
          r: {
            suggestedMin: 0, suggestedMax: 100, ticks: { stepSize: 1 }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../../src/app/models/recette.model';
import { RecetteServiceTs } from '../../services/recette.service.ts';

@Component({
  selector: 'app-recipe-manager-page',
  imports: [CommonModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage implements OnInit {
  public recetteSelectionnee: Recette | null = null;
  public recettes: Recette[] = [];
  constructor(private recetteServiceTs: RecetteServiceTs) { }
  ouvrirModale(recette: Recette): void {
    this.recetteSelectionnee = recette;
  }

  ngOnInit(): void {
    this.recetteServiceTs.getRecettes();
  }

  getRecettes(): void {
    this.recetteServiceTs.getRecettes().subscribe({
      next: (data) => {
        this.recettes = data;
        console.log("Recettes récupérés avec succès !")
      },
      error: (err) => {
        console.error("Erreur API : ", err);
      }
    }
    )
    supprimerRecette(id: number): void {
      if(confirm("Supprimer cet recettes ?")) {
      this.recetteServiceTs.supprimerRecette(id).subscribe(() =>
        this.getRecettes());
    }
    /**
    * Réinitialise la sélection à la fermeture
    */
    fermerModale(): void {
      this.recetteSelectionnee = null;
    }

  }

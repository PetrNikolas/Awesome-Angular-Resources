import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeBoxesComponent } from '../home-boxes/home-boxes.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, RouterModule, HomeHeroComponent, HomeBoxesComponent],
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

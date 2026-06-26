import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeBoxesComponent } from '../home-boxes/home-boxes.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule, HomeHeroComponent, HomeBoxesComponent],
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

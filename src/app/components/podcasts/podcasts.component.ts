import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PodcastsComponent {

  redirect(link: string) {
    window.open(link, '_blank');
  }

}

import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  goToServers() {
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }

  goToUsers() {
    this.router.navigate(['/users'], { relativeTo: this.route });
  }

  reloadServers() {
    this.router.navigate(['../servers'], { relativeTo: this.route });
  }
}

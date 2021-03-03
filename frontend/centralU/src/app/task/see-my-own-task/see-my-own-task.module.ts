import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeMyOwnTaskPageRoutingModule } from './see-my-own-task-routing.module';
import { MaterialModule } from '../../material.module';
import { SeeMyOwnTaskPage } from './see-my-own-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SeeMyOwnTaskPageRoutingModule
  ],
  declarations: [SeeMyOwnTaskPage]
})
export class SeeMyOwnTaskPageModule {}

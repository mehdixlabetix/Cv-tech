import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cv/cv.component";
import {ColorComponent} from "./color/color.component";



const APP_ROUTIING: Routes = [
    {path:'cv', redirectTo:'/', pathMatch:'full'},
  {path:'',component:CvComponent},
  {path:'color',component: ColorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTIING);

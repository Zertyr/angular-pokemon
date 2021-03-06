import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';

import { AuthGuard } from '../auth-guard.service';

// routes definition
const pokemonsRoutes: Routes = [
    {
        path: 'pokemon', //prefixe pour toute les routes ci dessous
        canActivate: [AuthGuard], // on active le guard pour les path children
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent},
            { path: ':id', component: DetailPokemonComponent}
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }
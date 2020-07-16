import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'masuk',
    loadChildren: () => import('./auth/masuk/masuk.module').then( m => m.MasukPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./auth/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'lupasandi',
    loadChildren: () => import('./lupasandi/lupasandi.module').then( m => m.LupasandiPageModule)
  },
  {
    path: 'lupa',
    loadChildren: () => import('./auth/lupa/lupa.module').then( m => m.LupaPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./auth/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('./auth/verif/verif.module').then( m => m.VerifPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'bantuan',
    loadChildren: () => import('./bantuan/bantuan.module').then( m => m.BantuanPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'detail-berita',
    loadChildren: () => import('./detail-berita/detail-berita.module').then( m => m.DetailBeritaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

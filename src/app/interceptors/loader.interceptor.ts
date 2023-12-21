import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loader:LoaderService = inject(LoaderService);
  loader.showLoader();
  return next(req).pipe(finalize(()=>loader.hideLoader()));
};

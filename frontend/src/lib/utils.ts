import { IAppConsts } from '@/lib/IAppConsts';

export function setTitle(title: string) {
    let pageTitle = appConsts.appName;

    if (title.length !== 0) {
        pageTitle += ` ${title}`;
    }
    document.title = pageTitle;
}

export const appConsts: IAppConsts = {
    appName: 'Fruglar',
};

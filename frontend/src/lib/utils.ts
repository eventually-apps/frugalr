import { IAppConsts } from '@/lib/IAppConsts';

/**
 * Sets the page title for application when routing based off the current page.
 * @param title The page title that needs to be set
 */
export function setTitle(title: string) {
    let pageTitle = appConsts.appName;

    if (title.length !== 0) {
        pageTitle += ` ${title}`;
    }
    document.title = pageTitle;
}

/**
 * Represents the applications constants that will be used across the application.
 */
export const appConsts: IAppConsts = {
    appName: 'Fruglar',
};

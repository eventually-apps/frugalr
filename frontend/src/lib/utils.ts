import { IAppConsts } from '@/lib/IAppConsts';

/**
 * Returns the sum of an array of items.
 * @param items the items that you want to sum
 * @param selector The selector in the item that you to sum
 */
export function sum<T>(items: T[], selector: (arg0: T) => number) {
    let currentSum = 0;
    for (const item of items) {
        currentSum += selector(item);
    }

    return currentSum;
}

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

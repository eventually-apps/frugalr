/**
 * An interface for authentication to check if a user is allowed.
 * You can create your own permission dependency checkers by implementing this and using it in the routes.
 */
export default interface IPermissionDependency {
    /**
     * Method to see if a user is allowed.
     * @returns true if a user is allowed, otherwise false.
     */
    isAllowed(): boolean;
}

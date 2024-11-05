/**
 * Retrieves the authentication token from local storage.
 * @returns {string|null} The parsed token if found, otherwise null.
 */
export const getTokenFromLocalStorage = () => {
    let authToken = localStorage.getItem("authToken");
    try {
        // Check if authToken is not 'undefined' and parse it
        authToken = authToken && authToken !== 'undefined' ? JSON.parse(authToken) : null;
    } catch (e) {
        console.error("Error parsing token from localStorage", e);
        authToken = null; // Ensure authToken is null on error
    }
    return authToken;
};

/**
 * Saves the authentication token to local storage.
 * @param {string} token - The token to save.
 */
export const saveTokenToLocalStorage = (token) => {
    if (typeof token !== 'string') {
        console.error("Invalid token type. Expected a string.");
        return;
    }
    try {
        localStorage.setItem("authToken", JSON.stringify(token));
    } catch (e) {
        console.error("Error saving token to localStorage", e);
    }
};

/**
 * Removes the authentication token from local storage.
 */
export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("authToken");
};
